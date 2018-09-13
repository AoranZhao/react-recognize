'use strict';

const datalabeladm = (state = {}, action) => {
    switch (action.type) {
        case 'DLADM_GET_MISSIONS_ING':
            state = { ...state, missions: { status: 'ing' } };
            return state;
        case 'DLADM_GET_MISSIONS_DONE':
            state = { ...state, missions: { status: 'done', data: action.data } };
            return state;
        case 'DLADM_GET_MISSIONS_ERR':
            state = { ...state, missions: { status: 'err', err: action.err } };
            return state;
        case 'DLADM_UPDATE_MISSION_ING':
            state = { ...state, mission_status: 'ing' };
            return state;
        case 'DLADM_UPDATE_MISSION_DONE':
            state = { ...state, mission_status: 'done' };
            return state;
        case 'DLADM_UPDATE_MISSION_ERR':
            state = { ...state, mission_status: 'err', mission_err: action.err };
            return state;
        case 'DLADM_SWITCH_MISSION':
            state = { ...state, missionId: action.id };
            return state;
        case 'DLADM_UPDATE_PAGE':
            state = { ...state, page: action.page, jumpto: action.page };
            return state;
        case 'DLADM_UPDATE_JUMPTO':
            state = { ...state, jumpto: action.page };
            return state;
        case 'DLADM_UPDATE_MISSION':
            state = { ...state, mission: { ...action.mission } };
            return state;
        case 'DLADM_RESET_MISSION_IMAGE':
            state = { ...state, mission_image: {} };
            return state;
        case 'DLADM_ADD_MISSION_IMAGE':
            state = { ...state, mission_image: { ...mission_image, [action.index]: action.image } };
            return state;
        case 'DLADM_REMOVE_MISSION_IMAGE':
            let mission_image = state.mission_image;
            delete mission_image[action.index];
            state = { ...state, mission_image: { ...mission_image } };
            return state;
        default:
            return state;
    }
}

export default datalabeladm;