import { render, screen } from '@testing-library/react';
import { store } from '../../../app/store';
import { Provider } from 'react-redux';
import PhotoControls from '../PhotoControls';

test('should have refuse and approve button', () => {
  render(
    <Provider store={store}>
      <PhotoControls />
    </Provider>
  );

  expect(screen.getByText('Approve')).toBeInTheDocument();
  expect(screen.getByText('Reject')).toBeInTheDocument();
});
