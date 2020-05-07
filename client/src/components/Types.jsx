import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';

const TypesContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
`;

const MoreLink = styled.a`
  grid-row: 3 / 4;
  font-family: 'LatoBold';
  font-size: 14px;
`;

class Types extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TypesContainer>
        <Title>Room types</Title>
        <MoreLink>Show more room details</MoreLink>
      </TypesContainer>
    );
  }
}

export default Types;