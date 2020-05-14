import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';
import {Web} from 'styled-icons/foundation';
import {DiagonalArrowRightUp} from 'styled-icons/evaicons-solid';
// @styled-icons/evaicons-outline/DiagonalArrowRightUpOutline

const LinkContainer = styled.div`
  grid-column: 1 / 3;
  padding: 10px 0 0;
`;
const HotelWebsite = styled.div`
  display: flex;
  align-items: center
`;
const LinkIcon = styled(Web)`
  color: #4a4a4a;
`;
const Link = styled.span`
  font-family: 'LatoRegular';
  font-size: 14px;
  color: #4a4a4a;
`;
const ArrowIcon = styled(DiagonalArrowRightUp)`
  color: #4a4a4a;
`;

class HotelLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: props.link
    };
  }

  render() {
    return (
      <LinkContainer>
        <Title>Hotel links</Title>
        <HotelWebsite>
          <LinkIcon size='20px' />
          <Link>Visit hotel website</Link>
          <ArrowIcon size='20px' />
        </HotelWebsite>
      </LinkContainer>
    );
  }
}

export default HotelLinks;