import actionTypes from './actionTypes'
import { isBetween } from './helpers'

export default function reserverReducer(state, action) {
  switch (action.type) {
    case actionTypes.edit: {
      const nBars = [...state.bars]
      const bIndex = nBars.findIndex((bar) => {
        return action.payload.id === bar.id
      })

      const otherBars = [...nBars]
      otherBars.splice(bIndex, 1)
      // console.log(otherBars)
      // console.log(nBars)
      otherBars.forEach((b) => {
        // console.log(nBars[bIndex], b)
        if (nBars[bIndex].row === b.row) {
          const bTotal = b.column + b.length
          const rowTotal = nBars[bIndex].column + nBars[bIndex].length

          console.log(isBetween(nBars[bIndex].column, rowTotal, bTotal))
          // one bar is larger than the other it doesnt work.
          if (
            isBetween(b.column, bTotal, nBars[bIndex].column) ||
            isBetween(b.column, bTotal, rowTotal) ||
            isBetween(nBars[bIndex].column, rowTotal, bTotal) ||
            isBetween(nBars[bIndex].column, rowTotal, b.column)
          ) {
            console.log('collll')
          }

          console.log(b.column, b.length, b.column + b.length)
          console.log(
            nBars[bIndex].column,
            nBars[bIndex].length,
            nBars[bIndex].column + nBars[bIndex].length
          )
        }
      })

      nBars[bIndex] = action.payload

      return { ...state, bars: nBars }
    }

    case actionTypes.add: {
      const bars = [...state.bars]

      bars.push(action.payload)

      return { ...state, bars: bars, isEditing: true }
    }
    case actionTypes.setBars: {
      return { ...state, bars: action.payload.bars }
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
