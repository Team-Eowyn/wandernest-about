import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';
import MoreLink from '../styledComponents/MoreLink.js';
import Icon from '../styledComponents/Icons.js';

const FeaturesContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
`;

const LeftColumn = styled.div`
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

const RightColumn = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

class Features extends React.Component {
  render() {
    return (
      <FeaturesContainer>
        <Title>Room features</Title>
        <LeftColumn>
          <Icon type='roomFeatures' title='Air conditioning'/>
          <Icon type='roomFeatures' title='Housekeeping'/>
          {/* <Icon type='roomFeatures' title='Private balcony'/> */}
        </LeftColumn>
        <RightColumn>
          <Icon type='roomFeatures' title='Safe'/>
          <Icon type='roomFeatures' title='Sofa'/>
        </RightColumn>
        <MoreLink>Show more</MoreLink>
      </FeaturesContainer>
    );
  }
}

export default Features;