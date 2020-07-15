import actionTypes from './actionTypes'
import { isBetween, collision,removeCollision } from './helpers'


export default function reserverReducer(state, action) {
    switch (action.type) {
        case actionTypes.edit: {
            const nBars = [...state.bars]
            const bIndex = nBars.findIndex((bar) => {
                return action.payload.id === bar.id
            })

            const otherBars = [...nBars]
            let editingBar = action.payload;
           
            otherBars.splice(bIndex, 1)
            // console.log(otherBars)
            // console.log(nBars)

            const oBars = otherBars.map((b) => {
                // console.log(nBars[bIndex], b)
                if (editingBar.row === b.row) {

                    const bStart = b.column +1;
                    const barStart = editingBar.column +1;

                    const bTotal = b.column + b.length 

                    const editingBarTotal = editingBar.column + editingBar.length 

                    console.log(editingBar,b)
                    // one bar is larger than the other it doesnt work.
                   
                    if (
                        isBetween(bStart, bTotal, barStart) ||
                        isBetween(bStart, bTotal, editingBarTotal) ||
                        isBetween(barStart, editingBarTotal, bTotal) ||
                        isBetween(barStart, editingBarTotal, bStart)
                    ) {
                        const [bar1,bar2] = collision(b, editingBar);
                        
                        editingBar = bar2;
                        return bar1;
                        

                    }else{
                        const [bar1,bar2] = removeCollision(b, editingBar);
                        editingBar = bar2;
                        return bar1;
                    }
                   


                }
                return b;
            })

            oBars[bIndex] = editingBar;

            return { ...state, bars: oBars }
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
