import {
  HeaderStyled,
  HeaderColStyled,
  HeaderHeadingStyled
} from './Styled.Header';
import logo from './logo.svg';

function Header() {
  return (
    <HeaderStyled>
      <HeaderColStyled>
        <img src={logo} alt='Sellics' width='150' />
      </HeaderColStyled>
      <HeaderColStyled>
        <HeaderHeadingStyled>ACCELERATE YOUR AMAZON PPC</HeaderHeadingStyled>
      </HeaderColStyled>
    </HeaderStyled>
  );
}

export default Header;
