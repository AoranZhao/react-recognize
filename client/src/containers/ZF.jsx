"use strict";

import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ZF.scss';

import { zf_add_mission, zf_switch_mission, zf_switch_tab, zf_add_mission_ing, zf_add_mission_done, zf_add_mission_err, zf_get_missions_ing, zf_get_missions_done, zf_get_missions_err, zf_get_solution_ing, zf_get_solution_done, zf_get_solution_err } from '../actions';
import { Axios } from '../utils';

const mapStateToProps = state => {
    return { auth: state.auth, zf: state.zf };
}

const mapDispatchToProps = dispatch => ({
    sync_zf_add_mission: (files) => {
        dispatch(zf_add_mission(files));
    },
    sync_zf_switch_mission: (mission_id) => {
        dispatch(zf_switch_mission(mission_id));
    },
    sync_zf_switch_tab: (tabname) => {
        dispatch(zf_switch_tab(tabname));
    },
    promise_add_mission_ing: () => {
        dispatch(zf_add_mission_ing());
    },
    promise_add_mission_done: (data) => {
        dispatch(zf_add_mission_done(data));
    },
    promise_add_mission_err: (err) => {
        dispatch(zf_add_mission_err(err));
    },
    promise_get_missions_ing: () => {
        dispatch(zf_get_missions_ing());
    },
    promise_get_missions_done: (data) => {
        dispatch(zf_get_missions_done(data));
    },
    promise_get_missions_err: (err) => {
        dispatch(zf_get_missions_err(err));
    },
    promise_get_solution_ing: () => {
        dispatch(zf_get_solution_ing());
    },
    promise_get_solution_done: (data) => {
        dispatch(zf_get_solution_done(data));
    },
    promise_get_solution_err: (err) => {
        dispatch(zf_get_solution_err(err));
    }
})

class ZFPage extends React.Component {
    constructor(props) {
        super(props);
        this.switchTab = this.switchTab.bind(this);
        this.switchMission = this.switchMission.bind(this);
        this.fetch_missions = this.fetch_missions.bind(this);
        this.submit_mission = this.submit_mission.bind(this);
        this.add_mission = this.add_mission.bind(this);
        this.fetch_solution = this.fetch_solution.bind(this);

        this.generate_options = this.generate_options.bind(this);
        this.generate_tab = this.generate_tab.bind(this);
        this.generate_sidebar = this.generate_sidebar.bind(this);
        this.generate_content = this.generate_content.bind(this);
        this.generate_new = this.generate_new.bind(this);
        this.generate_solution = this.generate_solution.bind(this);
    }

    componentWillMount() {
        this.switchTab('missions');
        this.add_mission([]);
    }

    generate_options() {
        return <div style={{ width: '400px', height: '50px' }}>
            <a style={{ cursor: 'pointer', width: '100px', display: 'inline-block', margin: '2px;', border: '1px solid #AAAAAA' }} onClick={e => {
                e.preventDefault();
                this.switchTab('missions');
            }}>
                <p>Missions</p>
            </a>
            <a style={{ cursor: 'pointer', width: '100px', display: 'inline-block', margin: '2px;', border: '1px solid #AAAAAA' }} onClick={e => {
                e.preventDefault();
                this.switchTab('new');
            }}>
                <p>New</p>
            </a>
        </div>
    }

    switchTab(tabname) {
        this.props.sync_zf_switch_tab(tabname);
        switch (tabname) {
            case 'missions':
                this.fetch_missions();
                this.props.promise_get_solution_done({});
                break;
            case 'new':
                this.add_mission([]);
                break;
            default:
                break;
        }
    }

    switchMission(mission_id) {
        this.props.sync_zf_switch_mission(mission_id);
        this.props.promise_get_solution_done({});
    }

    generate_tab() {
        let content = <div>
            <p>Content Page</p>
        </div>;
        if (!!this.props.zf && this.props.zf.tab === 'missions') {
            content = <div style={{ width: '700px' }}>
                {this.generate_sidebar()}
                {this.generate_content()}
            </div>;
        } else if (!!this.props.zf && this.props.zf.tab === 'new') {
            content = <div style={{ width: '700px' }}>
                {this.generate_new()}
            </div>
        }
        return content;
    }

    generate_sidebar() {
        let content = <div style={{ verticalAlign: 'top' }}><p>Content Sidebar</p></div>;
        if (!!this.props.zf && !!this.props.zf.missions && Array.isArray(this.props.zf.missions.data)) {
            content = <div style={{ width: '280px', display: 'inline-block', verticalAlign: 'top' }}>
                <div>
                    <a style={{ cursor: 'pointer', width: '250px', display: 'inline-block', margin: '2px', border: '1px solid #AAAAAA' }}
                        onClick={e => {
                            e.preventDefault();
                            this.fetch_missions();
                        }}>
                        <p>Refresh</p>
                    </a>
                </div>
                <div>
                    {this.props.zf.missions.data.map((mission, index) => {
                        return <div key={index}>
                            <a style={{ cursor: 'pointer', width: '250px', display: 'inline-block', margin: '2px;', border: '1px solid #AAAAAA' }}
                                onClick={e => {
                                    e.preventDefault();
                                    this.switchMission(mission.id)
                                }}>
                                <p>{mission.id}</p>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        } else {
            content = <div style={{ width: '280px', display: 'inline-block', verticalAlign: 'top' }}>
                <div>
                    <a style={{ cursor: 'pointer', width: '250px', display: 'inline-block', margin: '2px;', border: '1px solid #AAAAAA' }}
                        onClick={e => {
                            e.preventDefault();
                            this.fetch_missions();
                        }}>
                        <p>Refresh</p>
                    </a>
                </div>
                <div>
                    <p>Refreshing....</p>
                </div>
            </div>
        }
        return content;
    }

    generate_content() {
        let content = <div style={{ width: '400px', display: 'inline-block', verticalAlign: 'top' }}>
            <h2>Mission: </h2>
        </div>
        if (!!this.props.zf && !!this.props.zf.mission && Array.isArray(this.props.zf.missions.data)) {
            let missions = this.props.zf.missions.data.filter(mission => ((mission.id === this.props.zf.mission) ? true : false));
            if (missions.length > 0) {
                content = <div style={{ width: '400px', display: 'inline-block', verticalAlign: 'top' }}>
                    <Tabs>
                        <TabList>
                            <Tab>Mission</Tab>
                            <Tab>Solution</Tab>
                        </TabList>
                        <TabPanel>
                            <div>
                                <h2>{`Mission: ${missions[0].id}`}</h2>
                                <p>{`creat at ${missions[0].created_date}`}</p>
                                <img src={`${missions[0].image_url}`} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            {this.generate_solution(missions[0])}
                        </TabPanel>
                    </Tabs>
                </div>
            } else {
                content = <div style={{ width: '400px', display: 'inline-block', verticalAlign: 'top' }}>
                    <h2>Mission: </h2>
                    <p>{`not found ${this.props.zf.mission}`}</p>
                </div>
            }
        }
        return content;
    }

    fetch_missions() {
        this.props.promise_get_missions_ing();
        this.props.promise_get_solution_done({});
        Axios.get('/api/zf/missions', {
            headers: {
                'x-token': this.props.auth.data.token,
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response);
            this.props.promise_get_missions_done(response.data);
            if (Array.isArray(response.data) && response.data.length > 0 && typeof response.data[0] !== 'undefined') {
                this.switchMission(response.data[0].id);
            } else {
                this.switchMission('');
            }
        }).catch(err => {
            console.log(err);
            this.props.promise_get_missions_err(err.data);
        })
    }

    submit_mission() {
        this.props.promise_add_mission_ing();
        if (typeof this.props.zf.new_mission !== 'undefined' && Array.isArray(this.props.zf.new_mission) && this.props.zf.new_mission.length > 0) {
            let imgForm = new FormData();
            imgForm.append('images', this.props.zf.new_mission[0]);
            Axios.post('/api/zf/mission', imgForm, {
                headers: {
                    "x-token": this.props.auth.data.token,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                this.props.promise_add_mission_done(response.data);
                this.props.sync_zf_add_mission([]);
            }).then(err => {
                this.props.promise_add_mission_err(err.data);
                this.props.sync_zf_add_mission([]);
            })
        }
    }

    add_mission(files) {
        if (files.length > 1) {
            alert('only drop one image.');
        } else if (files.length === 0) {
            this.props.sync_zf_add_mission([]);
        } else {
            this.props.sync_zf_add_mission(files);
        }
    }

    generate_new() {
        let content = <div>
            <p>New Page</p>
        </div>
        if (typeof this.props.zf !== 'undefined' && typeof this.props.zf.new_mission !== 'undefined') {
            if (typeof this.props.zf.add_mission !== 'undefined') {
                if (this.props.zf.add_mission.status === 'ing') {
                    content = <div><p>Submitting.....</p></div>
                } else if (this.props.zf.add_mission.status === 'err') {
                    content = <div>
                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.add_mission}>
                            <p>Drop an image or click to select a image to upload.</p>
                        </Dropzone>
                        <input type="button" value="Submit" disabled={(typeof this.props.zf.new_mission !== 'undefined' && Array.isArray(this.props.zf.new_mission) && this.props.zf.new_mission.length > 0) ? false : true} onClick={e => {
                            e.preventDefault();
                            this.submit_mission();
                        }} />
                        <div>
                            <p>{`Error: ${this.props.zf.add_mission.err}`}</p>
                        </div>
                        <div>
                            <p>Preview:</p>
                            {(Array.isArray(this.props.zf.new_mission) && this.props.zf.new_mission.length > 0) ? <div>
                                <p>{this.props.zf.new_mission[0].name}</p>
                                <img src={this.props.zf.new_mission[0].preview} />
                            </div> : <div></div>}
                        </div>
                    </div>
                } else {
                    content = <div>
                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.add_mission}>
                            <p>Drop an image or click to select a image to upload.</p>
                        </Dropzone>
                        <input type="button" value="Submit" disabled={(typeof this.props.zf.new_mission !== 'undefined' && Array.isArray(this.props.zf.new_mission) && this.props.zf.new_mission.length > 0) ? false : true} onClick={e => {
                            e.preventDefault();
                            this.submit_mission();
                        }} />
                        <div>
                            <p>Preview:</p>
                            {(Array.isArray(this.props.zf.new_mission) && this.props.zf.new_mission.length > 0) ? <div>
                                <p>{this.props.zf.new_mission[0].name}</p>
                                <img src={this.props.zf.new_mission[0].preview} />
                            </div> : <div></div>}
                        </div>
                    </div>
                }
            } else {
                content = <div>
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.add_mission}>
                        <p>Drop an image or click to select a image to upload.</p>
                    </Dropzone>
                    <input type="button" value="Submit" disabled={(typeof this.props.zf !== 'undefined' && typeof this.props.zf.new_mission !== 'undefined' && Array.isArray(this.props.zf.new_mission) && this.props.zf.new_mission.length > 0) ? false : true} onClick={e => {
                        e.preventDefault();
                        this.submit_mission();
                    }} />
                    <div>
                        <p>Preview:</p>
                        {(Array.isArray(this.props.zf.new_mission) && this.props.zf.new_mission.length > 0) ? <div>
                            <p>{this.props.zf.new_mission[0].name}</p>
                            <img src={this.props.zf.new_mission[0].preview} />
                        </div> : <div></div>}
                    </div>
                </div>
            }
        }
        return content;
    }

    fetch_solution() {
        if (typeof this.props.zf !== 'undefined' && !!this.props.zf.mission) {
            this.props.promise_get_solution_ing();
            Axios.get(`/api/zf/mission/${this.props.zf.mission}/solutions`, {
                headers: {
                    "x-token": this.props.auth.data.token,
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.props.promise_get_solution_done(response.data);
            }).catch(err => {
                this.props.promise_get_solution_err(err);
            })
        }
    }

    generate_solution(mission) {
        console.log('generate solution');
        let content = <div><p>Solution Section</p></div>
        if (!mission.check) {
            content = <div>
                <p>Solution: Coming soon....</p>
            </div>
        } else {
            if (typeof this.props.zf !== 'undefined' && typeof this.props.zf.solution !== 'undefined' && typeof this.props.zf.solution.data !== 'undefined' && Object.keys(this.props.zf.solution.data).length > 0) {
                content = <div>
                    <p>Solution: </p>
                    <input type="button" value="Get Solution" onClick={e => {
                        e.preventDefault();
                        this.fetch_solution()
                    }} />
                    <div>
                        <p>{`Solution id: ${this.props.zf.solution.data.id}`}</p>
                        <p>{`created at ${this.props.zf.solution.data.created_date}`}</p>
                        <div>
                            <p>Image: </p>
                            <img src={this.props.zf.solution.image} />
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr><td>Index</td><td>Value</td><td>Image</td></tr>
                                </thead>
                                <tbody>
                                    {this.props.zf.solution.data.solution.map((sol, index) => {
                                        return <tr key={index}>
                                            <td><p>{sol.index}</p></td>
                                            <td><p>{sol.value}</p></td>
                                            <td>{(!!sol.image_url) ? <img src={sol.image_url} /> : <p></p>}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            } else {
                content = <div>
                    <p>Solution: </p>
                    <input type="button" value="Get Solution" onClick={e => {
                        e.preventDefault();
                        this.fetch_solution();
                    }} />
                </div>
            }
        }
        return content;
    }

    render() {
        return (
            <div>
                {this.generate_options()}
                {this.generate_tab()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZFPage);