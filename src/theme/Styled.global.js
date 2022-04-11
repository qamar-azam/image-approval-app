import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
    }
`;

export const ContainerStyled = styled.div`
  max-width: 1400px;
  margin: auto;
`;

export const MainHeadingStyled = styled.div`
  border-bottom: 2px solid rgb(6 182 212);
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

export const SubHeadingStyled = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;
