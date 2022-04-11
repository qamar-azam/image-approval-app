// components
import Header from './components/header/Header';
import PhotoView from './components/photo/Photo';
import { ContainerStyled, GlobalStyle } from './theme/Styled.global';

import { createApi } from 'unsplash-js';

// config unsplash api
export const unsplashApi = createApi({
  accessKey: 'iMruzF1VZRwbn2bJZr8X-N8NyYathlwKApNJn7t3GO0'
});

function App() {
  return (
    <ContainerStyled>
      <GlobalStyle />
      <Header />
      <PhotoView />
    </ContainerStyled>
  );
}

export default App;
