import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
`;

// const Grid = styled.div`
// `;

const Header = styled.div`
  grid-column: 1 / 3;
  font-family: 'LatoBold';
`;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>About</Header>
      </Container>
    );
  }
}

export default About;
