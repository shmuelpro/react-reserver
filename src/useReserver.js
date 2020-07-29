import { useReducer } from 'react'
import actionTypes from './actionTypes'
function useReserver(reducer, initialState) {
  const [{ bars, isEditing }, dispatch] = useReducer(reducer, {
    bars: initialState,
    isEditing: false
  })

  const addBar = (props) => {
    return dispatch({ payload: props, type: actionTypes.add })
  }

  const editBar = (props) => {
    return dispatch({ payload: props, type: actionTypes.edit })
  }

  const deleteBar = (props) => {
    return dispatch({ payload: props, type: actionTypes.delete })
  }

  const setBars = (props) => {
    return dispatch({ payload: props, type: actionTypes.setBars })
  }

  const setIsEditing = (props) => {
    return dispatch({ payload: props, type: actionTypes.setIsEditing })
  }

  return {
    isEditing,
    setIsEditing,
    bars,
    addBar,
    editBar,
    deleteBar,
    setBars
  }
}
export default useReserver
