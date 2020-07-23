import actionTypes from './actionTypes'
import checkCollision from './collision'

export default function reserverReducer(state, action) {
  switch (action.type) {
    case actionTypes.edit: {
      const nBars = [...state.bars]
      const bIndex = nBars.findIndex((bar) => {
        return action.payload.id === bar.id
      })
      const otherBars = [...nBars]

      otherBars.splice(bIndex, 1)
      const [oBars, editingBar] = checkCollision(otherBars, action.payload)

      oBars.push(editingBar)
      return { ...state, bars: oBars }
    }
    case actionTypes.add: {
      const bars = [...state.bars]

      bars.push(action.payload)

      return { ...state, bars: bars, isEditing: true }
    }
    case actionTypes.setBars: {
      return { ...state, bars: action.payload }
    }

    case actionTypes.delete: {
      const nBars = [...state.bars]
      const bIndex = nBars.findIndex((bar) => {
        return action.payload.id === bar.id
      })

      nBars.splice(bIndex, 1)

      return { ...state, bars: nBars }
    }
    case actionTypes.doneEditing: {
      if (state.isEditing) {
        let nBars = [...state.bars]
        nBars = nBars.map((bar) => {
          if (bar.editing) {
            const barStyle = { ...bar.style }
            barStyle.pointerEvents = 'auto'

            return { ...bar, editing: false, style: barStyle }
          }
          return bar
        })

        return { ...state, bars: nBars, isEditing: false }
      }

      return state
    }

    case actionTypes.mouseDragOver: {
      return { ...state }
    }

    default: {
      console.log(`Unhandled type: ${action.type}`)
      return state
    }
  }
}
