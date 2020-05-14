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
  constructor(props) {
    super(props);
    this.state = {
      features: props.features
    };
  }
  render() {
    var leftIcons = this.state.features.slice(0, 3);
    var rightIcons = this.state.features.slice(3);
    return (
      <FeaturesContainer>
        <Title>Room features</Title>
        <LeftColumn>
          {leftIcons.map(name => <Icon type='roomFeatures' name={name} key ={name} />)}
        </LeftColumn>
        <RightColumn>
          {rightIcons.map(name => <Icon type='roomFeatures' name={name} key ={name} />)}
        </RightColumn>
        <MoreLink>Show more</MoreLink>
      </FeaturesContainer>
    );
  }
}

export default Features;