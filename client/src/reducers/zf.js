'use strict';

const zf = (state = {}, action) => {
    switch (action.type) {
        case 'ZF_ADD_MISSION_ING':
            state = { ...state, add_mission: { status: 'ing' } };
            return state;
        case 'ZF_ADD_MISSION_DONE':
            state = { ...state, add_mission: { status: 'done', data: action.data } };
            return state;
        case 'ZF_ADD_MISSION_ERR':
            state = { ...state, add_mission: { status: 'err', err: action.err } };
            return state;
        case 'ZF_GET_MISSIONS_ING':
            state = { ...state, missions: { status: 'ing' } };
            return state;
        case 'ZF_GET_MISSIONS_DONE':
            state = { ...state, missions: { status: 'done', data: action.data } };
            return state;
        case 'ZF_GET_MISSIONS_ERR':
            state = { ...state, missions: { status: 'err', err: action.err } };
            return state;
        case 'ZF_GET_SOLUTION_ING':
            state = { ...state, solution: { status: 'ing' } };
            return state;
        case 'ZF_GET_SOLUTION_DONE':
            state = { ...state, solution: { status: 'done', data: action.data } };
            return state;
        case 'ZF_GET_SOLUTION_ERR':
            state = { ...state, solution: { status: 'err', err: action.err } };
            return state;
        case 'ZF_SWITCH_TAB':
            state = { ...state, tab: action.tab };
            return state;
        case 'ZF_SWITCH_MISSION':
            state = { ...state, mission: action.mission };
            return state;
        case 'ZF_ADD_MISSION':
            state = { ...state, new_mission: [...action.files] };
            return state;
        default:
            return state;
    }
}

export default zf;