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
  render() {
    return (
      <AmenitiesContainer>
        <Title>Property amenities</Title>
        <LeftColumn>
          <Icon type='propertyAmenities' title='Free parking'/>
          <Icon type='propertyAmenities' title='Free High Speed Internet (WiFi)'/>
          <Icon type='propertyAmenities' title='Pool'/>
          <Icon type='propertyAmenities' title='Fitness Center with Gym / Workout Room'/>
          {/* <Icon title='Bar / lounge'/> */}
        </LeftColumn>
        <RightColumn>
          <Icon type='propertyAmenities' title='Bicycle rental'/>
          <Icon type='propertyAmenities' title='Children Activities (Kid / Family Friendly)'/>
          <Icon type='propertyAmenities' title='Business Center with Internet Access'/>
          <Icon type='propertyAmenities' title='Parking'/>
          {/* <Icon title='Wifi'/> */}
        </RightColumn>
        <MoreLink>Show more</MoreLink>
      </AmenitiesContainer>
    );
  }
}

export default Amenities;