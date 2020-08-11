import actionTypes from './actionTypes'

export default function reserverReducer(state, action) {
  switch (action.type) {
    case actionTypes.setBars: {
      return { ...state, bars: action.payload }
    }
    case actionTypes.edit: {
      const nBars = [...state.bars]
      const bIndex = nBars.findIndex((bar) => {
        return action.payload.id === bar.id
      })

      nBars[bIndex] = action.payload

      return { ...state, bars: nBars }
    }
    case actionTypes.add: {
      const bars = [...state.bars]

      bars.push(action.payload)

      return { ...state, bars: bars }
    }

    case actionTypes.delete: {
      const nBars = [...state.bars]
      const bIndex = nBars.findIndex((bar) => {
        return action.payload.id === bar.id
      })

      nBars.splice(bIndex, 1)

      return { ...state, bars: nBars }
    }
    case actionTypes.setIsEditing: {
      return { ...state, isEditing: action.payload }
    }
  }
}
