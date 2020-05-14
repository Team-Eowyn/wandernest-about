import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';
import MoreLink from '../styledComponents/MoreLink.js';
import Icon from '../styledComponents/Icons.js';

// justify-content: space-between;
const AmenitiesContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
`;

// align-content: space-evenly;
const LeftColumn = styled.div`
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;

const RightColumn = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: props.amenities
    };
  }
  render() {
    var leftIcons = this.state.amenities.slice(0, 5);
    var rightIcons = this.state.amenities.slice(5);

    return (
      <AmenitiesContainer>
        <Title>Property amenities</Title>
        <LeftColumn>
          {leftIcons.map( (name) => <Icon type='propertyAmenities' name={name} key={name}/>)}
          {/* need to add key to avoid error: Warning: Each child in a list should have a unique "key" prop. */}
        </LeftColumn>
        <RightColumn>
          {rightIcons.map( (name) => <Icon type='propertyAmenities' name={name} key={name}/>)}
        </RightColumn>
        <MoreLink>Show more</MoreLink>
      </AmenitiesContainer>
    );
  }
}

export default Amenities;
