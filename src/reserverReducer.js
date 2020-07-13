import actionTypes from './actionTypes'

export default function reserverReducer(state, action) {
    switch (action.type) {

        case actionTypes.edit: {
            let nBars = [...state.bars];
            let bIndex = nBars.findIndex(bar => { return action.payload.id === bar.id });
            
            let otherBars = [...nBars].splice(1,bIndex);

            otherBars.forEach((b)=>{
                console.log(b)

            })

            nBars[bIndex] = action.payload;





            return { ...state, bars: nBars };

        }

        case actionTypes.add: {


            let bars = [...state.bars];

            bars.push(action.payload)



            return { ...state, bars: bars, isEditing: true };
        }
        case actionTypes.setBars: {



            return { ...state, bars: action.payload.bars };
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

                        let barStyle = { ...bar.style };
                        barStyle.pointerEvents = "auto";

                        return { ...bar, editing: false, style: barStyle };
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