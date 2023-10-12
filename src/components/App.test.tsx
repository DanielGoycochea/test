import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import 'jest-canvas-mock'

import { MyCounter } from '../'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MyCounter />)
    const text = screen.getByText(/Counter/i)

    expect(text).toBeInTheDocument()
  })
})
