import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';
import MoreLink from '../styledComponents/MoreLink.js';

const FeaturesContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
`;

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FeaturesContainer>
        <Title>Room features</Title>
        <MoreLink>Show more</MoreLink>
      </FeaturesContainer>
    );
  }
}

export default Features;