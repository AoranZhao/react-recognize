'use strict';

const zfadmin = (state = {}, action) => {
    switch (action.type) {
        case 'ZFADMIN_GET_MISSIONS_ING':
            state = { ...state, missions: { status: 'ing' } };
            return state;
        case 'ZFADMIN_GET_MISSIONS_DONE':
            state = { ...state, missions: { status: 'done', data: action.data } };
            return state;
        case 'ZFADMIN_GET_MISSIONS_ERR':
            state = { ...state, missions: { status: 'err', err: action.err } };
            return state;
        case 'ZFADMIN_UPDATE_MISSION_ING':
            state = { ...state, update_mission: { status: 'ing' } };
            return state;
        case 'ZFADMIN_UPDATE_MISSION_DONE':
            state = { ...state, update_mission: { status: 'done', data: action.data } };
            return state;
        case 'ZFADMIN_UPDATE_MISSION_ERR':
            state = { ...state, update_mission: { status: 'err', err: action.err } };
            return state;
        case 'ZFADMIN_GET_SOLUTION_ING':
            state = { ...state, solution: { status: 'ing' } };
            return state;
        case 'ZFADMIN_GET_SOLUTION_DONE':
            state = { ...state, solution: { status: 'done', data: action.data } };
            return state;
        case 'ZFADMIN_GET_SOLUTION_ERR':
            state = { ...state, solution: { status: 'err', err: action.err } };
            return state;
        case 'ZFADMIN_SWITCH_MISSION':
            state = { ...state, mission: action.mission };
            return state;
        case 'ZFADMIN_CHANGE_SOLUTION':
            if (typeof state.solution !== 'undefined' && typeof state.solution.data !== 'undefined') {
                let data = [];
                if (Array.isArray(state.solution.data.solution) && state.solution.data.solution.length > 0) {
                    data = state.solution.data.solution.reduce((arr, val) => {
                        if (val.index === action.index.toString())
                            arr = [...arr, { ...val, value: action.value }];
                        else
                            arr = [...arr, { ...val }];
                        return arr;
                    }, []);
                } else {
                    let temp_data = [];
                    for (var i = 0; i <= 51; i++) {
                        temp_data.push({
                            index: i.toString(),
                            value: ''
                        });
                    }
                    data = temp_data.reduce((arr, val) => {
                        if (val.index === action.index.toString())
                            arr = [...arr, { ...val, value: action.value }];
                        else
                            arr = [...arr, { ...val }];
                        return arr;
                    }, []);
                }
                state = { ...state, solution: { ...state.solution, data: { ...state.solution.data, solution: data } } };
            }
            return state;
        default:
            return state;
    }
}

export default zfadmin;