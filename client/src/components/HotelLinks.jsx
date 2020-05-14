import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';

const LinksContainer = styled.div`
  grid-column: 1 / 3;
  padding: 10px 0 0;
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
      <LinksContainer>
        <Title>Hotel links</Title>
      </LinksContainer>
    );
  }
}

export default HotelLinks;