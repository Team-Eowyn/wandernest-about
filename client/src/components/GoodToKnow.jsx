import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';

const GTKContainer = styled.div`
  grid-column: 1 / 3;
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
`;

class GoodToKnow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GTKContainer>
        <Title>Good to know</Title>
      </GTKContainer>
    );
  }
}

export default GoodToKnow;