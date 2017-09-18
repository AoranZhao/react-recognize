'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import moment from 'moment-timezone';
const tz_str = 'Asia/Shanghai';

import { reset_files, drop_files, upload_files_ing, upload_files_done, upload_files_err } from '../actions';
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
    promise_upload_files_done: (response) => {
        dispatch(upload_files_done(response));
    },
    prommise_upload_files_err: (err) => {
        dispatch(upload_files_err(err));
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

    preview_images() {
        if(this.props.recognize && Array.isArray(this.props.recognize.dropped_files)) {
            switch(this.props.recognize.status) {
                case 'upload_files_ing':
                    return <div><p>analyzing...</p></div>
                default:
                    return <div>
                                {(this.props.recognize.outputs) ? <div>
                                        <div>
                                            {(this.props.recognize.api_duration) ? <p>API execution time: {this.props.recognize.api_duration / 1000} s</p> : <p>API execution time: unknow</p>}
                                            <br />
                                            {(this.props.recognize.script_duration) ? <p>Script execution time: {this.props.recognize.script_duration / 1000} s</p> : <p>Script execution time: unknow</p>}
                                        </div>
                                        <div>
                                            <p>Output: </p><br />
                                            <p>{this.props.recognize.outputs}</p>
                                        </div>
                                    </div> : <div></div>}
                                    {(Array.isArray(this.props.recognize.dropped_files) && this.props.recognize.dropped_files.length !== 0) ? 
                                        <table>
                                            <thead>
                                                <tr><td>img</td></tr>
                                            </thead>
                                            <tbody>
                                            {this.props.recognize.dropped_files.map((file, index) => {
                                                return (
                                                <tr key={index}>
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
            <input type="button" value="Upload" onClick={e => {
                e.preventDefault();
                this.upload_images();
            }} />
        </div>
    }

    upload_images() {
        if(this.props.recognize && this.props.recognize.dropped_files) {
            this.props.promise_upload_files_ing();
            var imgForm = new FormData();
            this.props.recognize.dropped_files.forEach(file => {
                imgForm.append('images', file);
            })
            Axios.post('/api/recognize', imgForm, {
                headers: {
                    "x-token": this.props.auth.data.token,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                this.props.promise_upload_files_done(response);
            }).catch(err => {
                this.props.prommise_upload_files_err(err);
            })
        } else {
            alert('please choose images first.');
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
                </Dropzone>
                {btn_ctrl}
                {images_preview}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);