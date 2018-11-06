'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Axios } from '../../utils.js';

import './RequestDemoSection.scss';

import {
    send_email_ing, send_email_done, send_email_err, update_email_body
} from '../../actions';

const mapStateToProps = (state) => {
    return { email: state.email }
};

const mapDispatchToProps = dispatch => ({
    promise_send_email_ing: () => {
        dispatch(send_email_ing());
    },
    promise_send_email_done: (data) => {
        dispatch(send_email_done(data));
    },
    promise_send_email_err: (err) => {
        dispatch(send_email_err(err));
    },
    sync_update_email_body: (data) => {
        dispatch(update_email_body(data));
    }
});

class RequestDemoSection extends React.Component {
    constructor(props) {
        super(props);
        this.generateDemo = this.generateDemo.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.initial = this.initial.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }

    componentWillMount() {

    }

    initial() {
        this.updateBody('email', '');
        this.updateBody('name', '');
        this.updateBody('message', '');
    }

    updateBody(key, value) {
        let body = (typeof this.props.email !== 'undefined' && typeof this.props.email.body !== 'undefined') ? this.props.email.body : {};
        body[key] = value;
        this.props.sync_update_email_body(body);
    }

    submitEmail() {
        this.props.promise_send_email_ing();
        Axios.post('/api/sendemail', this.props.email.body, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.props.promise_send_email_done(response);
        }).catch(err => {
            this.props.promise_send_email_err(err.message);
        })
    }

    validate(body) {
        if (!body.email) {
            return false;
        }
    }

    generateDemo() {
        return <div className="requestDemoFrame">
            {/* <div>
                <p>Request Demo</p>
            </div> */}
            <div className="requestDemoContent">
                <div className="requestDemoRow">
                    <label>Name</label>
                    <input type="input" value={typeof this.props.email.body !== 'undefined' ? this.props.email.body.name : ""} onChange={e => {
                        this.updateBody('name', e.target.value);
                    }} />
                </div>
                <div className="requestDemoRow">
                    <label>Email</label>
                    <input type="input" value={typeof this.props.email.body !== 'undefined' ? this.props.email.body.email : ""} onChange={e => {
                        this.updateBody('email', e.target.value);
                    }} />
                </div>
                <div className="requestDemoRow">
                    <label>Message</label>
                    <textarea defaultValue={typeof this.props.email.body !== 'undefined' ? this.props.email.body.message : ""} rows="10" onChange={e => {
                        this.updateBody('message', e.target.value);
                    }}>
                        {/* {typeof this.props.email.body !== 'undefined' ? this.props.email.body.message : ""} */}
                    </textarea>
                </div>
                {typeof this.props.email !== 'undefined' && this.props.email.status == 'ing' ? <div className="requestDemoRow">
                    <p>sending</p>
                </div> : typeof this.props.email !== 'undefined' && this.props.email.status == 'err' ? <div className="requestDemoRow">
                    <p>{this.props.email.message}</p>
                </div> : <div></div>}
                <div className="requestDemoRow">
                    <a href="" onClick={e => {
                        e.preventDefault();
                        this.submitEmail();
                    }}>Submit</a>
                </div>
            </div>
        </div>
    }

    render() {
        return this.generateDemo();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestDemoSection);