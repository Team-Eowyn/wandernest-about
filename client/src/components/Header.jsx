import styled from 'styled-components';

// grid-column: stretches from 1 to 3
// at smaller resize: font-size: 18px;
// only border, padding at bottom (border = grey divider)
const Header = styled.h2`
  grid-column: 1 / 3;
  font-family: 'LatoBold';
  margin: 0;
  padding: 0 0 18px;
  border-bottom: 1px solid #e0e0e0;
`;

export default Header;
