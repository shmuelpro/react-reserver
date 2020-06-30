import {  useReducer} from 'react';
import actionTypes from './actionTypes'
function useReserver(reducer, initialState) {

    const [{ bars, isEditing }, dispatch] = useReducer(reducer, { bars: initialState, isEditing: false, })

    const addBar = (props) => {

        return dispatch({ payload: props, type: actionTypes.add })
    }

    const editBar = (props) => {
        return dispatch({ payload: props, type: actionTypes.edit })
    }

    const deleteBar = (props) => {
        return dispatch({ payload: props, type: actionTypes.delete })
    }


    const doneEditing = (props) => {
        return dispatch({ type: actionTypes.doneEditing })
    }

    const addToEditing =(props) => {
        return dispatch({payload:props, type: actionTypes.addToEditing })
    }



    return { bars, isEditing, addBar,  editBar, doneEditing, deleteBar , addToEditing}
}


export default useReserver;


