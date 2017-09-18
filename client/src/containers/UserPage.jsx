'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import { drop_files, upload_files_ing, upload_files_done, upload_files_err } from '../actions';
import { Axios } from '../utils';

const mapStateToProps = state => {
    return {auth: state.auth, recognize: state.recognize};
}

const mapDispatchToProps = dispatch => ({
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
                                {(this.props.recognize.outputs) ? <p>{this.props.recognize.outputs}</p> : <p></p>}
                                <table>
                                    <thead>
                                        <tr><td>img</td></tr>
                                    </thead>
                                    <tbody>
                                    {this.props.recognize.dropped_files.map((file, index) => {
                                        return (
                                        <tr key={index}>
                                            <td>
                                                <img src={file.preview} style={{maxHeight: "100px", }} />
                                            </td>
                                        </tr>
                                    )})}
                                    </tbody>
                                </table>
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

    render() {
        var images_preview = this.preview_images();
        var btn_ctrl = this.generate_btn_ctrl();
        return(
            <div>
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