'use strict';

const datalabel = (state = {}, action) => {
    switch (action.type) {
        case 'DL_GET_MISSIONS_ING':
            state = { ...state, missions: { status: 'ing' } };
            return state;
        case 'DL_GET_MISSIONS_DONE':
            state = { ...state, missions: { status: 'done', data: action.data } };
            return state;
        case 'DL_GET_MISSIONS_ERR':
            state = { ...state, missions: { status: 'err', err: action.err } };
            return state;
        case 'DL_ADD_MISSION_ING':
            state = { ...state, new: { ...state.new, status: 'ing' } }
            return state;
        case 'DL_ADD_MISSION_DONE':
            state = { ...state, new: { status: 'done', crop: { x: 10, y: 10, width: 80, height: 80 }, crops: [], data: {} } };
            return state;
        case 'DL_ADD_MISSION_ERR':
            state = { ...state, new: { ...state.new, status: 'err', err: action.err } };
            return state;
        case 'DL_UPDATE_MISSION_ING':
            state = { ...state, mission_status: 'ing' };
            return state;
        case 'DL_UPDATE_MISSION_DONE':
            state = { ...state, mission_status: 'done' };
            return state;
        case 'DL_UPDATE_MISSION_ERR':
            state = { ...state, mission_status: 'err', mission_err: action.err };
            return state;
        case 'DL_SWITCH_TAB':
            state = { ...state, tab: action.tab };
            return state;
        case 'DL_SWITCH_MISSION':
            state = { ...state, missionId: action.id };
            return state;
        case 'DL_UPDATE_NEW_MISSION':
            state = { ...state, new: action.new };
            return state;
        case 'DL_UPDATE_PAGE':
            state = { ...state, page: action.page, jumpto: action.page };
            return state;
        case 'DL_UPDATE_JUMPTO':
            state = { ...state, jumpto: action.page };
            return state;
        case 'DL_UPDATE_MISSION':
            state = { ...state, mission: { ...action.mission } };
            return state;
        case 'DL_RESET_MISSION_IMAGE':
            state = { ...state, mission_image: {} };
            return state;
        case 'DL_ADD_MISSION_IMAGE':
            state = { ...state, mission_image: { ...mission_image, [action.index]: action.image } };
            return state;
        case 'DL_REMOVE_MISSION_IMAGE':
            let mission_image = state.mission_image;
            delete mission_image[action.index];
            state = { ...state, mission_image: { ...mission_image } };
            return state;
        default:
            return state;
    }
}

export default datalabel;