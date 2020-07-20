
import actionTypes from './actionTypes';
export default function reserverReducer(state, action) {
    switch (action.type) {
        case actionTypes.changeVisibility: {
            return { ...state, visible: action.payload }
        }

        default:{
        return state;
        }



    }

}