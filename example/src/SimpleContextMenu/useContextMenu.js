import { useReducer } from 'react'
import actionTypes from './actionTypes'
function useContextMenu(reducer, initialState) {
  const [{visible},dispatch] = useReducer(reducer, {
    position: initialState.position,
    visible: false
  })

  const toggleVisibility = (e) => {
    return dispatch({ payload:!visible , type: actionTypes.toggleVisibility })
  }

  const changeVisibility = (props) => {
    return dispatch({ payload: props.visible, type: actionTypes.changeVisibility })
  }

  const changePosition = (props) => {
    return dispatch({ payload: props.position, type: actionTypes.changePosition })
  }


  return {
    toggleVisibility,
    changeVisibility,
    changePosition
  }
}
export default useContextMenu
