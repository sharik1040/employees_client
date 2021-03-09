import headers from '../../tableHeaders.json';

const initialState = {
    employees: [],
    headers: headers
};

function rootReducer(state=initialState, action){
    if(action.type === "EMPLOYEES_LOADED"){
        return Object.assign({}, state, {
            employees: action.payload
        });
    }
    return state;
};

export default rootReducer;