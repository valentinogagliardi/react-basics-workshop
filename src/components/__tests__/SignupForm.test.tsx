import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import SignupForm from '../SignupForm'

describe('SignupForm', () => {
  it('should display "Create an account" text', () => {
    render(<SignupForm />)
    screen.getByText('Create an account')
  })
})
