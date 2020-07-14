import React from 'react'
import { render } from '@testing-library/react'
import Reserver from './index'
describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
    render(<Reserver />)
  })
})
