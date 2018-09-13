"use strict";

import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './DataLabelAdmPage.scss';

import ReactCrop from 'react-image-crop';

import {
    dladm_switch_mission, dladm_update_page, dladm_update_jumpto, dladm_update_mission,
    dladm_reset_mission_image, dladm_add_mission_image, dladm_remove_mission_image,
    dladm_get_missions_ing, dladm_get_missions_done, dladm_get_missions_err,
    dladm_update_mission_ing, dladm_update_mission_done, dladm_update_mission_err
} from '../actions';
import { Axios } from '../utils';

const mapStateToProps = state => {
    return { auth: state.auth, datalabeladm: state.datalabeladm };
}

const mapDispatchToProps = dispatch => ({
    sync_dladm_reset_mission_image: () => {
        dispatch(dladm_reset_mission_image());
    },
    sync_dladm_add_mission_image: (index, image) => {
        dispatch(dladm_add_mission_image(index, image));
    },
    sync_dladm_remove_mission_image: (index) => {
        dispatch(dladm_remove_mission_image(index));
    },
    sync_dladm_update_mission: (mission) => {
        let str = JSON.stringify(mission);
        dispatch(dladm_update_mission(JSON.parse(str)));
    },
    sync_dladm_update_page: (page) => {
        dispatch(dladm_update_page(page));
    },
    sync_dladm_update_jumpto: (page) => {
        dispatch(dladm_update_jumpto(page));
    },
    sync_dladm_switch_mission: (id) => {
        dispatch(dladm_switch_mission(id));
    },
    promise_dladm_get_missions_ing: () => {
        dispatch(dladm_get_missions_ing());
    },
    promise_dladm_get_missions_done: (data) => {
        dispatch(dladm_get_missions_done(data));
    },
    promise_dladm_get_missions_err: (err) => {
        dispatch(dladm_get_missions_err(err));
    },
    promise_dladm_update_mission_ing: () => {
        dispatch(dladm_update_mission_ing());
    },
    promise_dladm_update_mission_done: () => {
        dispatch(dladm_update_mission_done());
    },
    promise_dladm_update_mission_err: (err) => {
        dispatch(dladm_update_mission_err(err));
    }
})

class DataLabelAdmPage extends React.Component {
    constructor(props) {
        super(props);
        this.fetch_missions = this.fetch_missions.bind(this);
        this.amount_per_page = 2;

        this.generate_missions = this.generate_missions.bind(this);
        this.generate_missions_list = this.generate_missions_list.bind(this);
        this.generate_mission_detail = this.generate_mission_detail.bind(this);

        this.switchMission = this.switchMission.bind(this);
        this.update_mission_detail = this.update_mission_detail.bind(this);
    }

    componentWillMount() {
        this.props.sync_dladm_update_page(1);
        this.fetch_missions(1);
    }

    fetch_missions(page) {
        this.props.promise_dladm_get_missions_ing();
        Axios.get(`/api/datalabels?page=${page}&amount=${this.amount_per_page}&admin=yes`, {
            headers: {
                'x-token': this.props.auth.data.token,
                'Content-Type': 'application/json'
            }
        }).then(response => {
            let page = this.props.datalabeladm.page;
            if (page > 1 && Array.isArray(response.data) && response.data.length === 0) {
                page--;
                this.props.sync_dladm_update_page(page);
                this.fetch_missions(page);
            } else {
                this.props.promise_dladm_get_missions_done(response.data);
                let objs = response.data.reduce((obj, mission) => {
                    obj[mission.id] = mission;
                    return obj;
                }, {})
                if (Object.keys(objs).length > 0) {
                    if (Object.keys(objs).indexOf(this.props.datalabeladm.missionId) === -1) {
                        this.switchMission(objs[Object.keys(objs)[0]]);
                    } else {
                        this.switchMission(objs[this.props.datalabeladm.missionId]);
                    }
                }
            }
        }).catch(err => {
            this.props.promise_dladm_get_missions_err(err.data);
        })
    }

    update_mission_detail() {
        let mission = this.props.datalabeladm.mission,
            original = this.props.datalabeladm.missions.data.filter(mission => ((mission.id === this.props.datalabeladm.missionId) ? true : false))[0];
        if (typeof mission !== 'undefined' && typeof original !== 'undefined') {
            this.props.promise_dladm_update_mission_ing();
            let data = [];
            mission.result.forEach((result, index) => {
                let obj = { index: index };
                if (original.result[index].question !== result.question)
                    obj.question = result.question;
                if (original.result[index].answer !== result.answer)
                    obj.answer = result.answer;
                if (original.result[index].score !== result.score)
                    obj.score = result.score;
                if (original.result[index].text !== result.text)
                    obj.text = result.text;
                data.push(obj);
            })
            let body = {
                data: data
            }
            Axios.put(`/api/datalabel/${mission.id}`, body, {
                headers: {
                    "x-token": this.props.auth.data.token,
                    "Content-Type": "application/json"
                }
            }).then(response => {
                let images = this.props.datalabeladm.mission_image;
                let che = 0;
                let keys = Object.keys(images);
                if (keys.length === 0) {
                    this.props.promise_dladm_update_mission_done(response.data);
                } else {
                    keys.forEach(key => {
                        che++;
                        let imgForm = new FormData();
                        imgForm.append('images', images[key]);
                        Axios.put(`/api/datalabel/${mission.id}/image/${key}`, imgForm, {
                            headers: {
                                "x-token": this.props.auth.data.token,
                                "Content-Type": "multipart/form-data"
                            }
                        }).then(response => {
                            if (--che <= 0) {
                                this.props.promise_dladm_update_mission_done(response.data);
                            }
                        }).catch(err => {
                            if (--che <= 0) {
                                this.props.promise_dladm_update_mission_done(response.data);
                            }
                        })
                    })
                }
            }).catch(err => {
                this.props.promise_dladm_update_mission_err(err.data);
            })
        }
    }

    switchMission(mission) {
        this.props.sync_dladm_switch_mission(mission.id);
        this.props.sync_dladm_update_mission(mission);
        this.props.sync_dladm_reset_mission_image();
        this.props.promise_dladm_update_mission_done();
    }

    generate_missions() {
        let content = <div>
            <p>Missions Page, still loading....</p>
        </div>
        if (!!this.props.datalabeladm) {
            content = <div style={{ width: '900px' }}>
                {this.generate_missions_list()}
                {this.generate_mission_detail()}
            </div>
        }
        return content;
    }

    generate_missions_list() {
        let content = <div style={{ verticalAlign: 'top' }}>
            <p>Missions List, still loading...</p>
        </div>
        if (!!this.props.datalabeladm && !!this.props.datalabeladm.missions && Array.isArray(this.props.datalabeladm.missions.data)) {
            content = <div style={{ width: '280px', display: 'inline-block', verticalAlign: 'top' }}>
                <div>
                    <a style={{ cursor: 'pointer', width: '250px', display: 'inline-block', margin: '2px', border: '1px solid #AAAAAA' }}
                        onClick={e => {
                            e.preventDefault();
                            this.props.sync_dladm_update_page(1);
                            this.fetch_missions(1);
                        }}>
                        <p>Refresh</p>
                    </a>
                    <div style={{ width: '250px', height: '40px', display: 'inline-block', margin: '2px' }}>
                        <a style={{ color: (typeof this.props.datalabeladm.page !== 'undefined' && this.props.datalabeladm.page > 1) ? 'black' : '#DDDDDD', cursor: 'pointer', width: '60px', height: '36px', display: 'inline-block', marginRight: '2px', border: '1px solid #AAAAAA' }}
                            onClick={e => {
                                e.preventDefault();
                                if (typeof this.props.datalabeladm.page !== 'undefined' && this.props.datalabeladm.page > 1) {
                                    let page = this.props.datalabeladm.page - 1;
                                    this.props.sync_dladm_update_page(page);
                                    this.fetch_missions(page);
                                }
                            }}>
                            Previous
                        </a>
                        <form style={{ width: '50px', height: '36px', margin: '0 2px 0 0', padding: '0', display: 'inline-block', verticalAlign: 'top' }} onSubmit={e => {
                            e.preventDefault();
                            try {
                                let page = parseInt(this.props.datalabeladm.jumpto.replace(/(^\s*)|(\s*$)/g, ''));
                                if (page !== this.props.datalabeladm.page) {
                                    this.props.sync_dladm_update_page(page);
                                    this.fetch_missions(page);
                                }
                            } catch (e) {
                                alert('please input valid page number.');
                            }
                        }}>
                            <input type="text" style={{ border: 'none', width: '48px', height: '34px', border: '1px solid #AAAAAA' }} value={(typeof this.props.datalabeladm.jumpto !== 'undefined') ? this.props.datalabeladm.jumpto : 1} onChange={e => {
                                e.preventDefault();
                                this.props.sync_dladm_update_jumpto(e.target.value);
                            }} />
                        </form>
                        <a style={{ color: (typeof this.props.datalabeladm.missions !== 'undefined' && Array.isArray(this.props.datalabeladm.missions.data) && this.props.datalabeladm.missions.data.length >= this.amount_per_page) ? 'black' : '#DDDDDD', cursor: 'pointer', width: '60px', height: '36px', display: 'inline-block', marginLeft: '2px', border: '1px solid #AAAAAA' }}
                            onClick={e => {
                                e.preventDefault();
                                if (typeof this.props.datalabeladm.missions !== 'undefined' && Array.isArray(this.props.datalabeladm.missions.data) && this.props.datalabeladm.missions.data.length >= this.amount_per_page) {
                                    let page = this.props.datalabeladm.page + 1;
                                    this.props.sync_dladm_update_page(page);
                                    this.fetch_missions(page);
                                }
                            }}>
                            Next
                        </a>
                    </div>
                </div>
                <div>
                    {(this.props.datalabeladm.missions.data.length > 0) ? this.props.datalabeladm.missions.data.map((mission, index) => {
                        return <div key={index}>
                            <a style={{ cursor: 'pointer', width: '250px', display: 'inline-block', margin: '2px', border: (!!mission.check) ? '1px solid green' : '1px solid red', borderRightWidth: (!!this.props.datalabeladm.missionId && this.props.datalabeladm.missionId === mission.id) ? '10px' : '1px' }}
                                onClick={e => {
                                    e.preventDefault();
                                    this.switchMission(mission)
                                }}>
                                <p>{mission.mission}</p>
                            </a>
                        </div>
                    }) : <div>
                            <p>You have no mission, please update a new.</p>
                        </div>}
                </div>
            </div>
        } else {
            content = <div style={{ width: '280px', display: 'inline-block', verticalAlign: 'top' }}>
                <div>
                    <a style={{ cursor: 'pointer', width: '250px', display: 'inline-block', margin: '2px', border: '1px solid #AAAAAA' }}
                        onClick={e => {
                            e.preventDefault();
                            this.props.sync_dladm_update_page(1);
                            this.fetch_missions(1);
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

    generate_mission_detail() {
        let content = <div style={{ width: '600px', display: 'inline-block', verticalAlign: 'top' }}>
            <p>Please select a mission, for show detail.</p>
        </div>
        if (!!this.props.datalabeladm && !!this.props.datalabeladm.missionId) {
            if (!!this.props.datalabeladm.mission) {
                let mission = this.props.datalabeladm.mission;
                let btn_save_txt = 'Save',
                    btn_save_disabled = false;
                switch (this.props.datalabeladm.mission_status) {
                    case 'ing':
                        btn_save_txt = 'Saving';
                        btn_save_disabled = true;
                        break;
                    case 'err':
                        btn_save_txt = 'Err';
                        btn_save_disabled = false;
                        break;
                    case 'done':
                        btn_save_txt = 'Save';
                        btn_save_disabled = false;
                        break;
                    default:
                        break;
                }
                content = <div style={{ width: '600px', display: 'inline-block', verticalAlign: 'top' }}>
                    <div>
                        <p>Mission id: {mission.id}</p>
                        <p>Mission name: {mission.mission}</p>
                        <p>Created at: {mission.created_date}</p>
                        <input type="button" value={btn_save_txt} disabled={btn_save_disabled} onClick={e => {
                            e.preventDefault();
                            this.update_mission_detail();
                        }} />
                        <input type="button" value="Reset" onClick={e => {
                            e.preventDefault();
                            let missions = this.props.datalabeladm.missions.data.filter(mission => (mission.id === this.props.datalabeladm.missionId) ? true : false);
                            if (missions.length > 0) {
                                this.props.sync_dladm_update_mission(missions[0]);
                            }
                        }} />
                    </div>
                    {(Array.isArray(mission.result) && mission.result.length > 0) ?
                        <Tabs>
                            <TabList>
                                {mission.result.map((result, index) => (<Tab key={index}>{index + 1}</Tab>))}
                            </TabList>
                            {mission.result.map((result, ind) => {
                                let index = ind;
                                return <TabPanel key={index}>
                                    <Tabs>
                                        <TabList>
                                            <Tab>输入题目文字</Tab>
                                            <Tab>输入题目答案</Tab>
                                            <Tab>上传学生手写重抄图片</Tab>
                                            <Tab>学生答案评分</Tab>
                                            <Tab>学生答案文字</Tab>
                                            <Tab>查看原图</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <textarea value={result.question} rows="3" style={{ width: '250px', resize: 'none' }} onChange={e => {
                                                e.preventDefault();
                                                mission.result[index].question = e.target.value;
                                                this.props.sync_dladm_update_mission(mission);
                                            }}>
                                            </textarea>
                                        </TabPanel>
                                        <TabPanel>
                                            <textarea value={result.answer} rows="3" style={{ width: '250px', resize: 'none' }} onChange={e => {
                                                e.preventDefault();
                                                mission.result[index].answer = e.target.value;
                                                this.props.sync_dladm_update_mission(mission);
                                            }}>
                                            </textarea>
                                        </TabPanel>
                                        <TabPanel>
                                            <div style={{ margin: '2px' }}>
                                                <Dropzone
                                                    // style={{ width: '400px', height: '50px' }}
                                                    multiple={false}
                                                    accept="image/*"
                                                    onDrop={(files) => {
                                                        console.log('index: ', index);
                                                        if (files.length > 0) {
                                                            let mission = this.props.datalabeladm.mission;
                                                            mission.result[index].image = files[0].preview;
                                                            this.props.sync_dladm_update_mission(mission);
                                                            this.props.sync_dladm_add_mission_image(index, files[0]);
                                                        }
                                                    }}>
                                                    <p>Select a image upload..</p>
                                                </Dropzone>
                                            </div>
                                            {(typeof result.image !== 'undefined') ? <div>
                                                <img src={result.image} style={{ maxWidth: '600px' }} />
                                            </div> : <div>
                                                    <p>No Image</p>
                                                </div>}
                                        </TabPanel>
                                        <TabPanel>
                                            <label>Score: </label><input type="text" value={result.score} onChange={e => {
                                                e.preventDefault();
                                                try {
                                                    mission.result[index].score = parseFloat(e.target.value);
                                                    this.props.sync_dladm_update_mission(mission);
                                                } catch (e) {

                                                }
                                            }} />
                                        </TabPanel>
                                        <TabPanel>
                                            <textarea value={result.text} rows="3" style={{ width: '250px', resize: 'none' }} onChange={e => {
                                                e.preventDefault();
                                                mission.result[index].text = e.target.value;
                                                this.props.sync_dladm_update_mission(mission);
                                            }}>
                                            </textarea>
                                        </TabPanel>
                                        <TabPanel>
                                            <p>Corp: left - {result.cord.left}, right - {result.cord.right}, up - {result.cord.up}, down - {result.cord.down}</p>
                                            <img src={mission.image_url} style={{ maxWidth: '550px' }} />
                                        </TabPanel>
                                    </Tabs>
                                </TabPanel>
                            })}
                        </Tabs> : <div>
                            <p>This mission has no output.</p>
                            <img src={mission.image_url} style={{ maxWidth: '550px' }} />
                        </div>}
                </div>
            } else {
                content = <div style={{ width: '600px', display: 'inline-block', verticalAlign: 'top' }}>
                    <h2>Mission: </h2>
                    <p>{`not found ${this.props.datalabeladm.mission}`}</p>
                </div>
            }
        }
        return content;
    }

    render() {
        return <div>
            {this.generate_missions()}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataLabelAdmPage);