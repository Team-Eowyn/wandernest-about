import React from 'react';
import styled from 'styled-components';
import RatingBox from '../styledComponents/BubbleRating.js';

const ReviewContainer = styled.div`
  grid-column: 1 / 2;
  border-bottom: 1px solid #e0e0e0;
  display: grid;
  grid-template-columns: .25fr .75fr;
  padding: 10px 0 30px;
  margin: 0;
`;

const Rating = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 48px;
  position: relative;
  align-self: start;
  padding: 0;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
      total: this.props.total
    };
  }

  render() {
    return (
      <ReviewContainer>
        <Rating>{this.state.rating}</Rating>
        <RatingBox rating={this.state.rating} total={this.state.total} />
      </ReviewContainer>
    );
  }
}

export default Review;