import React from 'react'
import RowTitle from './RowTitle'
import { render } from '@testing-library/react'
describe('RowTitle', () => {
  test(' runs', () => {
    render(<RowTitle isVisible />)
  })
})
