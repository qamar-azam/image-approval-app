import styled from 'styled-components';

const PhotoThumbsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PhotoThumbStyled = styled.div`
  height: 120px;
  margin-right: 15px;
  margin-bottom: 20px;
  img {
    border-radius: 5px;
    height: 100%;
  }
`;

export { PhotoThumbsStyled, PhotoThumbStyled };
