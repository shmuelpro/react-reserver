import React from 'react'
import Head from './Head'
import { render, screen } from '@testing-library/react'

test('columnTitles receives array ', () => {
  render(
    <Head
      dimension='20'
      rowTitleWidth='20px'
      columnTitles={[1, 2, 3, 4]}
      columnCount={4}
      dir='ltr'
      isVisible
    />
  )
  screen.getByText('1')
})

test('columnTitles receives array righttoleft', () => {
  render(
    <Head
      dimension='20'
      rowTitleWidth='20px'
      columnTitles={[1, 2, 3, 4]}
      columnCount={4}
      dir='rtl'
      isVisible
    />
  )
  screen.getByText('1')
})
