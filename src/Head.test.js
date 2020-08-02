import React from 'react'
import Head from './Head'
import { render, screen } from '@testing-library/react'

test('columnTitleRow receives array ', () => {
  render(
    <Head
      dimension='20'
      rowTitleWidth='20px'
      columnTitleRow={[1, 2, 3, 4]}
      columnCount={4}
    />
  )
  screen.getByText('1')
})
