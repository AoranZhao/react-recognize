'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import io from 'socket.io-client';
// import { Icon } from 'react-fa';

import moment from 'moment-timezone';
const tz_str = 'Asia/Shanghai';

import { reset_files, drop_files, upload_files_ing, upload_files_done, upload_analysis_ing, upload_analysis_done, upload_files_err, setup_socket } from '../actions';
import { Axios } from '../utils';

const mapStateToProps = state => {
    return {auth: state.auth, recognize: state.recognize};
}

const mapDispatchToProps = dispatch => ({
    sync_reset_files: () => {
        dispatch(reset_files());
    },
    sync_drop_files: (files) => {
        dispatch(drop_files(files));
    },
    promise_upload_files_ing: () => {
        dispatch(upload_files_ing());
    },
    promise_upload_files_done: (response, api_dur) => {
        dispatch(upload_files_done(response, api_dur));
    },
    promise_upload_files_err: (err) => {
        dispatch(upload_files_err(err));
    },
    promise_upload_analysis_ing: () => {
        dispatch(upload_analysis_ing());
    },
    promise_upload_analysis_done: (data, api_dur) => {
        dispatch(upload_analysis_done(data, api_dur));
    },
    sync_setup_socket: (socket) => {
        dispatch(setup_socket(socket));
    }
})

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.onImageDrop = this.onImageDrop.bind(this);
        this.preview_images = this.preview_images.bind(this);
        this.generate_btn_ctrl = this.generate_btn_ctrl.bind(this);
        this.upload_images = this.upload_images.bind(this);
        this.resetImages = this.resetImages.bind(this);
        this.get_user_info = this.get_user_info.bind(this);
        this.setupSocket = this.setupSocket.bind(this);
        if(!this.props.recognize.socket) {
            this.props.sync_setup_socket(this.setupSocket());
        }
        this.socket = this.props.recognize.socket;
        this.sendingStatus = ['upload_files_ing', 'upload_files_done', 'upload_analysis_ing'];
    }

    componentWillMount() {
        this.resetImages();
    }

    resetImages() {
        this.props.sync_reset_files();
    }

    onImageDrop(files) {
        this.props.sync_drop_files(files);
    }

    setupSocket() {
        console.log('set up socket');
        let socket = io('http://47.94.99.252:2979');
        socket.on('connect', () => {
            console.log('socket id:', socket.id);
        })
        socket.on('message', (data) => {
            console.log('message:', data);
            var api_end_time = new Date().getTime();
            this.props.promise_upload_analysis_done(data, api_end_time - this.api_start_time);
        })
        return socket;
    }

    preview_images() {
        let output_style = {};
        if(this.props.recognize.output_status) {
            switch(this.props.recognize.output_status) {
                case 200: 
                    output_style = {borderWidth: 1, borderStyle: 'solid', borderColor: 'green'};
                    break;
                case 500:
                    output_style = {borderWidth: 1, borderStyle: 'solid', borderColor: 'red'};
                    break;
                default:
                    break;
            }
        }
        if(this.props.recognize && Array.isArray(this.props.recognize.dropped_files)) {
            switch(this.props.recognize.status) {
                case 'upload_files_ing':
                    return <div><p>uploading...</p></div>
                case 'upload_files_done':
                    return <div><p>upload is done</p></div>
                case 'upload_analysis_ing':
                    return <div><p>upload is done. analyzing...</p></div>
                default:
                    return <div>
                                {(this.props.recognize.outputs) ? <div>
                                        <div>
                                            {(this.props.recognize.api_duration) ? <p>API execution time: {this.props.recognize.api_duration / 1000} s</p> : <p>API execution time: unknow</p>}
                                            {(this.props.recognize.script_duration) ? <p>Script execution time: {this.props.recognize.script_duration / 1000} s</p> : <p>Script execution time: unknow</p>}
                                        </div>
                                        <br />
                                        <div style={output_style}>
                                            <p>Output: </p>
                                            <pre>{this.props.recognize.outputs}</pre>
                                        </div>
                                    </div> : <div></div>}
                                    <br />
                                    {(Array.isArray(this.props.recognize.dropped_files) && this.props.recognize.dropped_files.length !== 0) ? 
                                        <table>
                                            <thead>
                                                <tr><td>filename</td><td>img</td></tr>
                                            </thead>
                                            <tbody>
                                            {this.props.recognize.dropped_files.reverse().map((file, index) => {
                                                return (
                                                <tr key={index}>
                                                    <td>
                                                        <p>{file.name}</p>
                                                    </td>
                                                    <td>
                                                        <img src={file.preview} style={{maxHeight: "100px", maxWidth: "500px"}} />
                                                    </td>
                                                </tr>
                                            )})}
                                            </tbody>
                                        </table> : 
                                        <div><p>Not select img file yet.</p></div>
                                    }
                            </div>
            }
        } else {
            return <div></div>
        }
    }

    generate_btn_ctrl() {
        return <div>
            <input type="button" value="Upload" disabled={(this.sendingStatus.indexOf(this.props.recognize.status) !== -1) ? true : false} onClick={e => {
                e.preventDefault();
                this.upload_images();
            }} />
            <input type="button" value="Clean" disabled={(this.sendingStatus.indexOf(this.props.recognize.status) !== -1) ? true : false} onClick={e => {
                e.preventDefault();
                this.resetImages();
            }} />
        </div>
    }

    upload_images() {
        this.api_start_time = new Date().getTime();
        if(this.props.recognize && Array.isArray(this.props.recognize.dropped_files) && this.props.recognize.dropped_files.length > 0) {
            this.props.promise_upload_files_ing();
            var imgForm = new FormData(),
                sharedSize = 2 * 1024 * 1024;
            this.props.recognize.dropped_files.forEach(file => {
                // var total_shares = Math.ceil(file.size / sharedSize);
                
                // for(var i = 0; i < total_shares; i++) {
                //     var start = i * total_shares,
                //         end = Math.min(file.size, start + sharedSize);
                    
                //     imgForm.append('images', file.slice(start, end));
                //     imgForm.append('name', file.name);
                //     imgForm.append('total', total_shares);
                //     imgForm.append('index', i);
                // }
                imgForm.append('images', file);
            })
            imgForm.set('cb_api', '/api/callback');
            imgForm.set('socket_id', this.props.recognize.socket ? this.props.recognize.socket.id : '');
        // Axios.post('/api/upload', imgForm, {
	    Axios.post('/api/recognize', imgForm, {
                headers: {
                    "x-token": this.props.auth.data.token,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                this.props.promise_upload_files_done();
                this.props.promise_upload_analysis_ing();
            }).catch(err => {
                this.props.promise_upload_files_err(err);
            })
        } else {
            alert('please choose images to upload first.');
        }
    }

    get_user_info() {
        if(this.props.auth.data) {
            let greeting = (this.props.auth.data.email) ? <p>hello, {this.props.auth.data.email}</p> : <p>hello, </p>,
                expire_time = moment(this.props.auth.data.expire).tz(tz_str).format('MMMM Do YYYY, H:mm'),
                expire_mention = (this.props.auth.data.expire) ? <p>Account expire at {expire_time}</p> : <p>Account expire at unknow</p>;
            return <div>
                {greeting}
                {expire_mention}  
            </div>
        } else {
            return <div><p>loading user infomation</p></div>
        }
    }

    render() {
        var frame_user_info = this.get_user_info();
        var images_preview = this.preview_images();
        var btn_ctrl = this.generate_btn_ctrl();
        return(
            <div>
                 {frame_user_info} 
                <Dropzone
                    multiple={true}
                    accept="image/*"
                    onDrop={this.onImageDrop}>
                    <p>Drop an image or click to select a file to upload.</p>
                    <p>Currently our recognize function is supported by firefox and chrome.</p>
                </Dropzone>
                {btn_ctrl}
                {images_preview}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
