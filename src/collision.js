import { isBetween } from './helpers'

export default function checkCollision(bars, eBar) {
    let editingBar = { ...eBar };
    const oBars = bars.map((b) => {

        if (editingBar.row === b.row) {

            const bStart = b.column + 1;
            const barStart = editingBar.column + 1;
            const bTotal = b.column + b.length
            const editingBarTotal = editingBar.column + editingBar.length

            if (
                isBetween(bStart, bTotal, barStart) ||
                isBetween(bStart, bTotal, editingBarTotal) ||
                isBetween(barStart, editingBarTotal, bTotal) ||
                isBetween(barStart, editingBarTotal, bStart)
            ) {
                const [bar1, bar2] = collided(b, editingBar);
                editingBar = bar2;
                return bar1;

            }
        } else {

            const [bar1, bar2] = removeCollision(b, editingBar);
            editingBar = bar2;
            return bar1;
        }

        return b;
    });

    return [oBars, editingBar]
}
const collided = (bar1, bar2) => {

    bar1 = checkHasCollisionObject(bar1);
    bar1.collisions[bar2.id] = '';

    bar2 = checkHasCollisionObject(bar2);
    bar2.collisions[bar1.id] = '';




    return [bar1, bar2];
}

const checkHasCollisionObject = (bar) => {

    if (!bar.collisions) {
        bar.collisions = {};
    }

    return bar;
}


export const removeCollision = (bar1, bar2) => {

    bar1 = checkHasCollisionObject(bar1);
    delete bar1.collisions[bar2.id];

    bar2 = checkHasCollisionObject(bar2);
    delete bar2.collisions[bar1.id];
    return [bar1, bar2];

}