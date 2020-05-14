import styled from 'styled-components';
import React from 'react';

const RatingStars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const RatingStar = styled.span`
  --percent: calc(${props => props.rating} / 5 * 100%);
  display: inline-block;
  font-size: 15px;

  &::before {
    content: '★★★★★';
    letter-spacing: -2px;
    background: linear-gradient(90deg, ${props => props.starBackground} var(--percent), ${props => props.starColor} var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating
    };
  }

  render() {
    return (
      <RatingStars>
        <RatingStar starColor='#c4c4c4' starBackground='#4a4a4a' rating={this.state.rating} />
      </RatingStars>
    );
  }
}

export default StarRating;