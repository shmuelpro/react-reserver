import actionTypes from './actionTypes'
import { makeId, evaluatePosition } from './helpers'
export default function reserverReducer(state, action) {
    switch (action.type) {

        case actionTypes.edit: {
            let nBars = [...state.bars];
            let bIndex = nBars.findIndex(bar => { return action.payload.id === bar.id });
            nBars[bIndex] = action.payload;
            return { ...state, bars: nBars };

        }

        case actionTypes.add: {


            let bars = [...state.bars];

            bars.push(action.payload)



            return { ...state, bars: bars, isEditing: true };
        }

        case actionTypes.delete: {

            let nBars = [...state.bars];
            let bIndex = nBars.findIndex(bar => { return action.payload.id === bar.id });

            nBars.splice(bIndex, 1);



            return { ...state, bars: nBars };
        }
        case actionTypes.doneEditing: {
            if (state.isEditing) {
                let nBars = [...state.bars];
                nBars = nBars.map((bar) => {
                    if (bar.editing) {

                        return { ...bar, editing: false, pointerEvents: "auto" };
                    }
                    return bar;


                })

                return { ...state, bars: nBars, isEditing: false };
            }

            return state;
        }

        case actionTypes.mouseDragOver: {


            return { ...state };
        }

        default: {

            console.log(`Unhandled type: ${action.type}`)
            return state;
        }
    }
}