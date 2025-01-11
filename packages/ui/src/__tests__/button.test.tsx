import {render, screen} from '@testing-library/react-native';

import {Button} from '../button';

it('renders textual children', () => {
  render(<Button title="Press me"></Button>);
  expect(screen.getByText('Press me')).toBeDefined();
});
