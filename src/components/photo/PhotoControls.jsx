import { useDispatch, useSelector } from 'react-redux';
import { approvedImage, fetchRandomPhoto } from './photoSlice';

import {
  PhotoControlsStyled,
  PhotoControlButtonStyled
} from './Styled.PhotoControls';

function PhotoControls() {
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photo.randomPhoto);

  if (!photo) {
    return null;
  }

  return (
    <PhotoControlsStyled>
      <PhotoControlButtonStyled onClick={() => dispatch(fetchRandomPhoto())}>
        Reject
      </PhotoControlButtonStyled>

      <PhotoControlButtonStyled
        onClick={() => {
          dispatch(approvedImage(photo));
          dispatch(fetchRandomPhoto());
        }}
      >
        Approve
      </PhotoControlButtonStyled>
    </PhotoControlsStyled>
  );
}

export default PhotoControls;
