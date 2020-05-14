import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';
import Icon from '../styledComponents/Icons.js';

const TypesContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
`;

//grid-template-rows: 1fr;
const LeftColumn = styled.div`
  grid-column: 1 / 2;
  display: grid;
`;

const RightColumn = styled.div`
  grid-column: 2 / 3;
  display: grid;
`;

const MoreLink = styled.a`
  grid-row: 3 / 4;
  padding: 10px 0 0;
  font-family: 'LatoBold';
  font-size: 14px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

class Types extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: props.types
    };
  }
  render() {
    return (
      <TypesContainer>
        <Title>Room types</Title>
        <LeftColumn>
          <Icon type='roomTypes' name={this.state.types[0]} index={0}/>
        </LeftColumn>
        <RightColumn>
          <Icon type='roomTypes' name={this.state.types[1]} index={0}/>
        </RightColumn>
        <MoreLink>Show more room details</MoreLink>
      </TypesContainer>
    );
  }
}

export default Types;