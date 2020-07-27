import React from 'react'
import Head from './Head';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'


test('headrow receives array ', () => {
    render(<Head dimension="20" rowTitleWidth="20px" headRow={[1, 2, 3, 4]} columnCount={4} />)
    screen.getByText('1')

})

test('headrow receives function ', () => {
    render(<Head dimension="20" rowTitleWidth="20px" headRow={c => {
        return [...Array(c)].map((x, i) => {
            return <div>{i}</div>
        })
    }} columnCount={4} />)
    screen.getByText('1')

})



