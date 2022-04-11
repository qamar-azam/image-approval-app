import { useSelector } from 'react-redux';
import { PhotoThumbsStyled, PhotoThumbStyled } from './Styled.PhotoThumb';
import { getSelectedPhotos } from './photoSlice';
import { SubHeadingStyled } from '../../theme/Styled.global';

function PhotoThumb() {
  const selectedPhotos = useSelector(getSelectedPhotos);

  if (!selectedPhotos.length) {
    return null;
  }

  return (
    <>
      <SubHeadingStyled>
        APPROVED IMAGES ({selectedPhotos.length})
      </SubHeadingStyled>
      <PhotoThumbsStyled>
        {selectedPhotos.map((photo) => (
          <PhotoThumbStyled key={photo.id}>
            <img src={photo.urls.thumb} alt={photo.alt_description} />
          </PhotoThumbStyled>
        ))}
      </PhotoThumbsStyled>
    </>
  );
}

export default PhotoThumb;
