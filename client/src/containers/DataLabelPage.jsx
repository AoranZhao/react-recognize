"use strict";

import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './DataLabelAdmPage.scss';
import uuidv1 from 'uuid/v1';

import ReactCrop from 'react-image-crop';

import {
    dl_switch_tab, dl_switch_mission, dl_update_new_mission, dl_update_page, dl_update_jumpto, dl_update_mission,
    dl_reset_mission_image, dl_add_mission_image, dl_remove_mission_image,
    dl_get_missions_ing, dl_get_missions_done, dl_get_missions_err,
    dl_add_mission_ing, dl_add_mission_done, dl_add_mission_err,
    dl_update_mission_ing, dl_update_mission_done, dl_update_mission_err
} from '../actions';
import { Axios } from '../utils';

const mapStateToProps = state => {
    return { auth: state.auth, datalabel: state.datalabel };
}

const mapDispatchToProps = dispatch => ({
    sync_dl_reset_mission_image: () => {
        dispatch(dl_reset_mission_image());
    },
    sync_dl_add_mission_image: (index, image) => {
        dispatch(dl_add_mission_image(index, image));
    },
    sync_dl_remove_mission_image: (index) => {
        dispatch(dl_remove_mission_image(index));
    },
    sync_dl_update_mission: (mission) => {
        let str = JSON.stringify(mission);
        dispatch(dl_update_mission(JSON.parse(str)));
    },
    sync_dl_update_page: (page) => {
        dispatch(dl_update_page(page));
    },
    sync_dl_update_jumpto: (page) => {
        dispatch(dl_update_jumpto(page));
    },
    sync_dl_update_new_mission: (mission) => {
        dispatch(dl_update_new_mission(mission));
    },
    sync_dl_switch_tab: (tab) => {
        dispatch(dl_switch_tab(tab));
    },
    sync_dl_switch_mission: (id) => {
        dispatch(dl_switch_mission(id));
    },
    promise_dl_get_missions_ing: () => {
        dispatch(dl_get_missions_ing());
    },
    promise_dl_get_missions_done: (data) => {
        dispatch(dl_get_missions_done(data));
    },
    promise_dl_get_missions_err: (err) => {
        dispatch(dl_get_missions_err(err));
    },
    promise_dl_add_mission_ing: () => {
        dispatch(dl_add_mission_ing());
    },
    promise_dl_add_mission_done: () => {
        dispatch(dl_add_mission_done());
    },
    promise_dl_add_mission_err: (err) => {
        dispatch(dl_add_mission_err(err));
    },
    promise_dl_update_mission_ing: () => {
        dispatch(dl_update_mission_ing());
    },
    promise_dl_update_mission_done: () => {
        dispatch(dl_update_mission_done());
    },
    promise_dl_update_mission_err: (err) => {
        dispatch(dl_update_mission_err(err));
    }
})

class DataLabelPage extends React.Component {
    constructor(props) {
        super(props);
        this.fetch_missions = this.fetch_missions.bind(this);
        this.delete_mission = this.delete_mission.bind(this);
        this.submit_mission = this.submit_mission.bind(this);
        this.amount_per_page = 100;

        this.generate_options = this.generate_options.bind(this);
        this.generate_missions = this.generate_missions.bind(this);
        this.generate_missions_list = this.generate_missions_list.bind(this);
        this.generate_mission_detail = this.generate_mission_detail.bind(this);
        this.generate_new_mission = this.generate_new_mission.bind(this);

        this.switchTab = this.switchTab.bind(this);
        this.switchMission = this.switchMission.bind(this);
        this.update_new_mission = this.update_new_mission.bind(this);
        this.update_mission_detail = this.update_mission_detail.bind(this);
    }

    componentWillMount() {
        this.props.sync_dl_update_page(1);
        this.fetch_missions(1);
        this.update_new_mission({ status: 'done', crop: { x: 10, y: 10, width: 80, height: 80 }, crops: [], data: {} });
        this.switchTab('missions');
    }

    fetch_missions(page) {
        this.props.promise_dl_get_missions_ing();
        Axios.get(`/api/datalabels?page=${page}&amount=${this.amount_per_page}`, {
            headers: {
                'x-token': this.props.auth.data.token,
                'Content-Type': 'application/json'
            }
        }).then(response => {
            let page = this.props.datalabel.page;
            if (page > 1 && Array.isArray(response.data) && response.data.length === 0) {
                page--;
                this.props.sync_dl_update_page(page);
                this.fetch_missions(page);
            } else {
                this.props.promise_dl_get_missions_done(response.data);
                let objs = response.data.reduce((obj, mission) => {
                    obj[mission.id] = mission;
                    return obj;
                }, {})
                if (Object.keys(objs).length > 0) {
                    if (Object.keys(objs).indexOf(this.props.datalabel.missionId) === -1) {
                        this.switchMission(objs[Object.keys(objs)[0]]);
                    } else {
                        this.switchMission(objs[this.props.datalabel.missionId]);
                    }
                }
            }
        }).catch(err => {
            this.props.promise_dl_get_missions_err(err.data);
        })
    }

    submit_mission() {
        if (typeof this.props.datalabel.new !== 'undefined' && typeof this.props.datalabel.new.data !== 'undefined') {
            this.props.promise_dl_add_mission_ing();
            let imgForm = new FormData();
            imgForm.append('images', this.props.datalabel.new.data);
            if (Array.isArray(this.props.datalabel.new.crops) && this.props.datalabel.new.crops.length > 0) {
                this.props.datalabel.new.crops.forEach(crop => {
                    imgForm.append('cords[]', JSON.stringify(crop));
                })
            }
            Axios.post('/api/datalabel', imgForm, {
                headers: {
                    "x-token": this.props.auth.data.token,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                this.props.promise_dl_add_mission_done();
            }).catch(err => {
                this.props.promise_dl_add_mission_err(err.data);
            })
        } else {
            alert('not found image for upload...');
        }
    }

    delete_mission(id) {
        console.log('delete mission')
        this.props.promise_dl_get_missions_ing();
        Axios.delete(`/api/datalabel/${id}`, {
            headers: {
                "x-token": this.props.auth.data.token,
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.fetch_missions(this.props.datalabel.page || 1);
        }).catch(err => {
            console.log(err);
            alert(err.data);
            this.fetch_missions(this.props.datalabel.page || 1);
        })
    }

    update_new_mission(mission) {
        this.props.sync_dl_update_new_mission(mission);
    }

    update_mission_detail() {
        let mission = this.props.datalabel.mission,
            original = this.props.datalabel.missions.data.filter(mission => ((mission.id === this.props.datalabel.missionId) ? true : false))[0];
        if (typeof mission !== 'undefined' && typeof original !== 'undefined') {
            this.props.promise_dl_update_mission_ing();
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
                let images = this.props.datalabel.mission_image;
                let che = 0;
                Object.keys(images).forEach(key => {
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
                            this.props.promise_dl_update_mission_done(response.data);
                        }
                    }).catch(err => {
                        if (--che <= 0) {
                            this.props.promise_dl_update_mission_done(response.data);
                        }
                    })
                })
            }).catch(err => {
                this.props.promise_dl_update_mission_err(err.data);
            })
        }
    }

    switchTab(tab) {
        this.props.sync_dl_switch_tab(tab);
        switch (tab) {
            case 'missions':
                this.fetch_missions(this.props.datalabel.page || 1);
                break;
            case 'new':
                break;
            default:
                break;
        }
    }

    switchMission(mission) {
        this.props.sync_dl_switch_mission(mission.id);
        this.props.sync_dl_update_mission(mission);
        this.props.sync_dl_reset_mission_image();
        this.props.promise_dl_update_mission_done();
    }

    generate_options() {
        return <div style={{ width: '400px', height: '60px' }}>
            <a style={{ cursor: 'pointer', width: '100px', display: 'inline-block', margin: '2px', border: '1px solid #AAAAAA' }} onClick={e => {
                e.preventDefault();
                this.switchTab('missions');
            }}>
                <p>Missions</p>
            </a>
            <a style={{ cursor: 'pointer', width: '100px', display: 'inline-block', margin: '2px', border: '1px solid #AAAAAA' }} onClick={e => {
                e.preventDefault();
                this.switchTab('new');
            }}>
                <p>New</p>
            </a>
        </div>
    }

    generate_missions() {
        let content = <div>
            <p>Missions Page, still loading....</p>
        </div>
        if (!!this.props.datalabel && this.props.datalabel.tab === 'missions') {
            content = <div style={{ width: '900px' }}>
                {this.generate_missions_list()}
                {this.generate_mission_detail()}
            </div>
        } else if (!!this.props.datalabel && this.props.datalabel.tab === 'new') {
            content = <div style={{ width: '900px' }}>
                {this.generate_new_mission()}
            </div>
        }
        return content;
    }

    generate_missions_list() {
        let content = <div style={{ verticalAlign: 'top' }}>
            <p>Missions List, still loading...</p>
        </div>
        if (!!this.props.datalabel && !!this.props.datalabel.missions && Array.isArray(this.props.datalabel.missions.data)) {
            content = <div style={{ width: '280px', display: 'inline-block', verticalAlign: 'top' }}>
                <div>
                    <a style={{ cursor: 'pointer', width: '250px', display: 'inline-block', margin: '2px', border: '1px solid #AAAAAA' }}
                        onClick={e => {
                            e.preventDefault();
                            this.props.sync_dl_update_page(1);
                            this.fetch_missions(1);
                        }}>
                        <p>Refresh</p>
                    </a>
                    <div style={{ width: '250px', height: '40px', display: 'inline-block', margin: '2px' }}>
                        <a style={{ color: (typeof this.props.datalabel.page !== 'undefined' && this.props.datalabel.page > 1) ? 'black' : '#DDDDDD', cursor: 'pointer', width: '60px', height: '36px', display: 'inline-block', marginRight: '2px', border: '1px solid #AAAAAA' }}
                            onClick={e => {
                                e.preventDefault();
                                if (typeof this.props.datalabel.page !== 'undefined' && this.props.datalabel.page > 1) {
                                    let page = this.props.datalabel.page - 1;
                                    this.props.sync_dl_update_page(page);
                                    this.fetch_missions(page);
                                }
                            }}>
                            Previous
                        </a>
                        <form style={{ width: '50px', height: '36px', margin: '0 2px 0 0', padding: '0', display: 'inline-block', verticalAlign: 'top' }} onSubmit={e => {
                            e.preventDefault();
                            try {
                                let page = parseInt(this.props.datalabel.jumpto.replace(/(^\s*)|(\s*$)/g, ''));
                                if (page !== this.props.datalabel.page) {
                                    this.props.sync_dl_update_page(page);
                                    this.fetch_missions(page);
                                }
                            } catch (e) {
                                alert('please input valid page number.');
                            }
                        }}>
                            <input type="text" style={{ border: 'none', width: '48px', height: '34px', border: '1px solid #AAAAAA' }} value={(typeof this.props.datalabel.jumpto !== 'undefined') ? this.props.datalabel.jumpto : 1} onChange={e => {
                                e.preventDefault();
                                this.props.sync_dl_update_jumpto(e.target.value);
                            }} />
                        </form>
                        <a style={{ color: (typeof this.props.datalabel.missions !== 'undefined' && Array.isArray(this.props.datalabel.missions.data) && this.props.datalabel.missions.data.length >= this.amount_per_page) ? 'black' : '#DDDDDD', cursor: 'pointer', width: '60px', height: '36px', display: 'inline-block', marginLeft: '2px', border: '1px solid #AAAAAA' }}
                            onClick={e => {
                                e.preventDefault();
                                if (typeof this.props.datalabel.missions !== 'undefined' && Array.isArray(this.props.datalabel.missions.data) && this.props.datalabel.missions.data.length >= this.amount_per_page) {
                                    let page = this.props.datalabel.page + 1;
                                    this.props.sync_dl_update_page(page);
                                    this.fetch_missions(page);
                                }
                            }}>
                            Next
                        </a>
                    </div>
                </div>
                <div>
                    {(this.props.datalabel.missions.data.length > 0) ? this.props.datalabel.missions.data.map((mission, index) => {
                        return <div key={index}>
                            <a style={{ cursor: 'pointer', width: '250px', display: 'inline-block', margin: '2px', border: (!!mission.check) ? '1px solid green' : '1px solid red', borderRightWidth: (!!this.props.datalabel.missionId && this.props.datalabel.missionId === mission.id) ? '10px' : '1px' }}
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
                            this.props.sync_dl_update_page(1);
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
        if (!!this.props.datalabel && !!this.props.datalabel.missionId) {
            if (!!this.props.datalabel.mission) {
                let mission = this.props.datalabel.mission;
                let btn_save_txt = 'Save',
                    btn_save_disabled = false;
                switch (this.props.datalabel.mission_status) {
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
                            let missions = this.props.datalabel.missions.data.filter(mission => (mission.id === this.props.datalabel.missionId) ? true : false);
                            if (missions.length > 0) {
                                this.props.sync_dl_update_mission(missions[0]);
                            }
                        }} />
                        <input type="button" value="Delete" style={{ color: 'red' }} onClick={e => {
                            e.preventDefault();
                            if (typeof this.props.datalabel.missionId !== 'undefined' && typeof this.props.datalabel.mission !== 'undefined') {
                                if (confirm(`Are you sure for deleting missions with id \<${this.props.datalabel.mission.mission}\> ?`)) {
                                    this.delete_mission(this.props.datalabel.missionId);
                                }
                            } else {
                                alert('not found mission id');
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
                                            <textarea value={result.question} rows="10" style={{ width: '600px', resize: 'none' }} onChange={e => {
                                                e.preventDefault();
                                                mission.result[index].question = e.target.value;
                                                this.props.sync_dl_update_mission(mission);
                                            }}>
                                            </textarea>
                                        </TabPanel>
                                        <TabPanel>
                                            <textarea value={result.answer} rows="10" style={{ width: '600px', resize: 'none' }} onChange={e => {
                                                e.preventDefault();
                                                mission.result[index].answer = e.target.value;
                                                this.props.sync_dl_update_mission(mission);
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
                                                            let mission = this.props.datalabel.mission;
                                                            mission.result[index].image = files[0].preview;
                                                            this.props.sync_dl_update_mission(mission);
                                                            this.props.sync_dl_add_mission_image(index, files[0]);
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
                                                    this.props.sync_dl_update_mission(mission);
                                                } catch (e) {

                                                }
                                            }} />
                                        </TabPanel>
                                        <TabPanel>
                                            <textarea value={result.text} rows="10" style={{ width: '600px', resize: 'none' }} onChange={e => {
                                                e.preventDefault();
                                                mission.result[index].text = e.target.value;
                                                this.props.sync_dl_update_mission(mission);
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
                    <p>{`not found ${this.props.datalabel.mission}`}</p>
                </div>
            }
        }
        return content;
    }

    generate_new_mission() {
        let content = <div>
            <p>New Mission Page, still loading...</p>
        </div>
        if (typeof this.props.datalabel !== 'undefined' && typeof this.props.datalabel.new !== 'undefined') {
            if (this.props.datalabel.new.status === 'ing') {
                content = <div>
                    <p>Submiting...</p>
                </div>
            } else if (this.props.datalabel.new.status === 'err') {
                content = <div>
                    <p>Error: </p>
                    <p>{this.props.datalabel.new.err}</p>
                    <input type="button" value="Reset" onClick={e => {
                        e.preventDefault();
                        this.update_new_mission({ status: 'done', crop: { x: 10, y: 10, width: 80, height: 80 }, crops: [], data: {} });
                    }} />
                </div>
            } else if (this.props.datalabel.new.status === 'done') {
                content = <div style={{ width: '900px' }}>
                    <div style={{ width: '280px', display: 'inline-block', verticalAlign: 'top' }}>
                        <div style={{ margin: '2px' }}>
                            <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={(files) => {
                                    let new_mission = this.props.datalabel.new;
                                    if (files.length > 1) {
                                        alert('only drop one image');
                                    } else if (files.length === 0) {
                                        alert('not find uploaded file.');
                                    } else {
                                        new_mission.data = files[0];
                                        new_mission.crop = { x: 10, y: 10, width: 80, height: 80 };
                                        this.update_new_mission(new_mission);
                                    }
                                }}>
                                <p>Drop an image or click to select a image to upload.</p>
                            </Dropzone>
                        </div>
                        <input type="button" value="Submit"
                            style={{ height: '30px', width: '200px', margin: '2px', color: 'white', backgroundColor: '#5394fc', fontSize: '15px', cursor: 'pointer' }}
                            disabled={(typeof this.props.datalabel !== 'undefined' && typeof this.props.datalabel.new !== 'undefined' && typeof this.props.datalabel.new.data !== 'undefined') ? false : true}
                            onClick={e => {
                                e.preventDefault();
                                this.submit_mission();
                            }} /><br />
                        <input type="button" value="Crop Image"
                            style={{ height: '30px', width: '200px', margin: '2px', color: 'white', backgroundColor: '#5394fc', fontSize: '15px', cursor: 'pointer' }}
                            onClick={e => {
                                e.preventDefault();
                                let new_mission = this.props.datalabel.new;
                                new_mission.crops.push(new_mission.crop);
                                this.update_new_mission(new_mission);
                            }} />
                    </div>
                    <div style={{ width: '600px', display: 'inline-block', verticalAlign: 'top' }}>
                        <Tabs>
                            <TabList>
                                <Tab>Preview</Tab>
                                <Tab>Cropped</Tab>
                            </TabList>
                            <TabPanel>
                                <p>Preview:</p>
                                {(typeof this.props.datalabel.new.data !== 'undefined' && typeof this.props.datalabel.new.data.preview !== 'undefined') ? <div>
                                    <p>{this.props.datalabel.new.data.name}</p>
                                    {/* <img src={this.props.zf.new_mission[0].preview} style={{ maxWidth: '550px' }} /> */}
                                    <ReactCrop
                                        src={this.props.datalabel.new.data.preview}
                                        crop={this.props.datalabel.new.crop}
                                        // onImageLoaded={}
                                        onComplete={(crop) => { }}
                                        onChange={(crop) => {
                                            let new_mission = this.props.datalabel.new;
                                            new_mission.crop = crop;
                                            this.update_new_mission(new_mission);
                                        }} />
                                </div> : <div></div>}
                            </TabPanel>
                            <TabPanel>
                                <p>Cropped</p>
                                {(Array.isArray(this.props.datalabel.new.crops)) ? <div>
                                    {this.props.datalabel.new.crops.map((crop, index) => {
                                        return <div key={index}>
                                            <a onClick={e => {
                                                e.preventDefault();
                                                let new_mission = this.props.datalabel.new;
                                                new_mission.crops.splice(index, 1);
                                                this.update_new_mission(new_mission);
                                            }}>delete</a>
                                            <p>{index + 1}: {JSON.stringify(crop)}</p>
                                        </div>
                                    })}
                                </div> : <div></div>}
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            }
        }
        return content;
    }

    render() {
        return <div>
            {this.generate_options()}
            {this.generate_missions()}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataLabelPage);