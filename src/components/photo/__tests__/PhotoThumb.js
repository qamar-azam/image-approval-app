import { render, screen } from '@testing-library/react';
import { store } from '../../../app/store';
import { Provider } from 'react-redux';
import PhotoThumb from '../PhotoThumb';

test('should have heading', () => {
  render(
    <Provider store={store}>
      <PhotoThumb />
    </Provider>
  );

  expect(screen.getByText('APPROVED IMAGES (0)')).toBeInTheDocument();
});
