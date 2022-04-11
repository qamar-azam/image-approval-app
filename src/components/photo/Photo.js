import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhotoControls from './PhotoControls';
import PhotoThumb from './PhotoThumb';
import { PhotoWrapperStyled, HeroPhotoStyled } from './Styled.Photo';
import { fetchRandomPhoto } from './photoSlice';
import { MainHeadingStyled } from '../../theme/Styled.global';
import PreLoader from '../preLoader/PreLoader';

function PhotoView() {
  const photo = useSelector((state) => state.photo.randomPhoto);
  const status = useSelector((state) => state.photo.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomPhoto());
  }, [dispatch]);

  return (
    <PhotoWrapperStyled>
      <MainHeadingStyled>IMAGE APPROVAL APPLICATION</MainHeadingStyled>
      <PhotoThumb />

      <HeroPhotoStyled>
        {status && <PreLoader />}
        {photo && !status && (
          <img
            src={photo.urls.regular}
            className='rounded'
            alt={photo.alt_description}
          />
        )}
      </HeroPhotoStyled>
      <PhotoControls />
    </PhotoWrapperStyled>
  );
}

export default PhotoView;
