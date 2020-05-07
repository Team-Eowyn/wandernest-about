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
    this.state = {};
  }

  render() {
    return (
      <DescriptionParagraph>
        A brand new, all adult, luxury all suites hotel featuring 22 one-bedroom king bedded suites, with 11 individual plunge pools, a rooftop swimming pool and bar for all its guests, fitness center, 24 hour concierge services, and a beautiful secluded courtyard with water feature and plush tropical landscaping.
      </DescriptionParagraph>
    );
  }
}

export default Description;