import { makeId,getColumnCount,evaluatePosition,validForBar,getRowCount,isBetween } from './helpers'

test('calculate number of columns based on width ', () => {
    
    expect(getColumnCount(20, 500, 80)).toBe(21);
});

test('number should be in between two other numbers ', () => {
    
    expect(isBetween(20, 500, 80)).toBe(true);
    expect(isBetween(20, 30, 280)).toBe(false);
});


test('makeid returns 15 characters', () => {
    let newid = makeId();
    expect(newid.length).toBe(15);
});


test('make sure the position is correct', () => {

    let fPosition = {row:3,column:3};
    let sPosition = {row:4,column:6};

    let position = evaluatePosition(fPosition,sPosition);

    expect(position.column).toBe(3)
    expect(position.row).toBe(3)
    expect(position.length).toBe(4)

});

test("number needs to be valid for bar",()=>{

    expect(validForBar(-1)).toBe(false);
    expect(validForBar(3)).toBe(true);

})

test("get correct number of rows",()=>{
    expect(getRowCount(20,300)).toBe(15)
})


