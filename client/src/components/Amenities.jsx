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
  row-gap: 15px;
`;

const RightColumn = styled.div`
  grid-column: 2 / 3;
  display: grid;
  row-gap: 10px;
`;

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: props.amenities,
      clicked: false
    };
  }

  clickHandler() {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    var leftIcons = this.state.amenities.slice(0, 5);
    var rightIcons = this.state.amenities.slice(5);

    return (
      <AmenitiesContainer>
        <Title>Property amenities</Title>
        <LeftColumn>
          {leftIcons.map( (name, index) => <Icon key={name} type='propertyAmenities' name={name} clicked={this.state.clicked} index={index} />)}
          {/* need to add key to avoid error: Warning: Each child in a list should have a unique "key" prop. */}
        </LeftColumn>
        <RightColumn>
          {/* {rightIcons.map( (name) => <Icon type='propertyAmenities' name={name} key={name}/>)} */}
          {rightIcons.map( (name, index) => <Icon key={name} type='propertyAmenities' name={name} clicked={this.state.clicked} index={index} />)}
        </RightColumn>
        <MoreLink onClick={this.clickHandler.bind(this)} clicked={this.state.clicked}>Show more</MoreLink>
      </AmenitiesContainer>
    );
  }
}

export default Amenities;
