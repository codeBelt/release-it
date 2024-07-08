import { render, screen } from '@testing-library/react-native'

import Index from '../index'

it('renders textual children', () => {
  render(<Index />)
  expect(
    screen.getByText('Edit app/index.tsx to edit this screen.')
  ).toBeDefined()
})
