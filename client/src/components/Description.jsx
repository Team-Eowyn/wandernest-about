import React from 'react';
import styled from 'styled-components';

const DescriptionParagraph = styled.p`
  grid-column: 1 / 2;
  font-family: 'LatoRegular';
  font-size: 16px;
  color: #4a4a4a;
`;

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.description
    };
  }

  render() {
    return (
    <DescriptionParagraph>{this.state.description}</DescriptionParagraph>
    );
  }
}

export default Description;