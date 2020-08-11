import React from 'react'
import Peg from './Peg'
import { render } from '@testing-library/react'
describe('Peg', () => {
  test(' runs', () => {
    render(<Peg />)
  })
})
