import { Investment } from '../types/investment'

export const validateInvestment = (investment: Partial<Investment>): Record<string, string> => {
  const errors: Record<string, string> = {}

  if (!investment.name) {
    errors.name = 'Name is required'
  }

  if (!investment.amount || investment.amount <= 0) {
    errors.amount = 'Amount must be a positive number'
  }

  if (!investment.currentValue || investment.currentValue < 0) {
    errors.currentValue = 'Current value must be a non-negative number'
  }

  if (!investment.date) {
    errors.date = 'Date is required'
  } else {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(investment.date)) {
      errors.date = 'Date must be in YYYY-MM-DD format'
    }
  }

  if (!investment.type) {
    errors.type = 'Type is required'
  }

  return errors
}

export const validateUser = (user: { email: string; password: string }): Record<string, string> => {
  const errors: Record<string, string> = {}

  if (!user.email) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = 'Email is invalid'
  }

  if (!user.password) {
    errors.password = 'Password is required'
  } else if (user.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long'
  }

  return errors
}

