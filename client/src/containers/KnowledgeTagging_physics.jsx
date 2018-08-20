'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Tree } from 'react-d3-tree';

import { kt_ph_upload_question_ing, kt_ph_upload_question_done, kt_ph_upload_question_err } from '../actions';
import { Axios } from '../utils';

const mapStateToProps = state => {
    return { auth: state.auth, ktph: state.ktph };
}

const mapDispatchToProps = dispatch => ({
    promise_upload_question_ing: (question) => {
        dispatch(kt_ph_upload_question_ing(question));
    },
    promise_upload_question_done: (data) => {
        dispatch(kt_ph_upload_question_done(data));
    },
    promise_upload_question_err: (err) => {
        dispatch(kt_ph_upload_question_err(err));
    }
})

class KTPHPage extends React.Component {
    constructor(props) {
        super(props);
        this.generate_question_preview = this.generate_question_preview.bind(this);
        this.generate_question_input = this.generate_question_input.bind(this);
        this.generate_question_image = this.generate_question_image.bind(this);
        this.upload_question = this.upload_question.bind(this);
        this.output_convert = this.output_convert.bind(this);

        // this.generate_node = this.generate_node.bind(this);
        // this.check_node = this.check_node.bind(this);
        // this.generate_children = this.generate_children.bind(this);

        // this.handleResponse = this.handleResponse.bind(this);
        // this.handleOutput = this.handleOutput.bind(this);
    }

    generate_question_preview() {
        return <div>
            {/* <pre style={{ width: '800px', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{this.props.ktph.question}</pre> */}
            {(this.props.ktph.err) ? <pre style={{ color: 'red' }}>{this.props.ktph.err}</pre> : <pre></pre>}
        </div>
    }

    generate_question_input() {
        let ref_question;
        return <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!ref_question.value.trim())
                        return;
                    this.upload_question(ref_question.value.trim());
                }}>
                <textarea style={{ height: '400px', width: '700px' }} ref={node => ref_question = node}></textarea><br />
                <input type="submit" value={(this.props.ktph.status === 'ing') ? "Uploading...." : "Upload"} disabled={(this.props.ktph.status === 'ing') ? true : false} />
            </form>
        </div>
    }

    generate_question_image() {
        let el = <div></div>;
        if (typeof this.props.ktph.output === 'object') {
            el = <div style={{ height: '600px', width: '800px' }}><pre>{this.output_convert(this.props.ktph.output)}</pre></div>
        }
        return <div>
            {/* <p>{JSON.stringify(this.props.ktjx.output)}</p> */}
            {el}
        </div>
    }

    upload_question(question) {
        this.props.promise_upload_question_ing(question);
        Axios.post('/api/kt/physics', { question: question }, {
            headers: {
                "x-token": this.props.auth.data.token,
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response.data);
            if (response.data.err) {
                this.props.promise_upload_question_err(response.data.err);
            } else {
                this.props.promise_upload_question_done(response.data);
            }
        }).catch(err => {
            console.log(err);
            this.props.promise_upload_question_err(err);
        })
    }

    output_convert(output) {
        let result = '';
        if (Array.isArray(output)) {
            output.forEach((out, index) => {
                console.log(index, out);
                result += `Section - ${index + 1}: ${Array.isArray(out) ? out.join(',') : out.toString()}\n`;
            })
        } else {
            result = output;
        }
        return result;
    }

    render() {
        var question_preview = this.generate_question_preview(),
            question_input = this.generate_question_input(),
            question_image = this.generate_question_image();
        return <div style={{ marginLeft: '20px' }}>
            <p>Upload Question</p>
            {question_preview}
            {question_input}
            {question_image}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KTPHPage);