import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';
import MoreLink from '../styledComponents/MoreLink.js';

const AmenitiesContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
`;

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AmenitiesContainer>
        <Title>Property amenities</Title>
        <MoreLink>Show more</MoreLink>
      </AmenitiesContainer>
    );
  }
}

export default Amenities;