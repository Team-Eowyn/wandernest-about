import React from 'react';
import styled from 'styled-components';
import Title from '../styledComponents/Title.js';
import Stars from '../styledComponents/StarRating.js';

const GTKContainer = styled.div`
  grid-column: 1 / 3;
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
`;

const Class = styled.div`
  font-size: 12px;
  font-family: 'LatoBold';
`;

class GoodToKnow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: props.class
    };
  }

  render() {
    return (
      <GTKContainer>
        <Title>Good to know</Title>
        <Class>HOTEL CLASS</Class>
        <Stars rating={this.state.class} />
      </GTKContainer>
    );
  }
}

export default GoodToKnow;