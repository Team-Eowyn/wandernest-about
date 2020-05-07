import React from 'react';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  grid-column: 1 / 2;
  padding: 10px 0 18px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
`;

const Rating = styled.span`
  font-family: 'LatoBold';
  font-size: 48px;
`;

const RatingBox = styled.span`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const RatingMeaning = styled.div`
  font-family: 'LatoBold';
  font-size: 16px;
`;
const RatingBubble = styled.span``;
const RatingTotal = styled.span`
  font-family: 'LatoRegular';
  font-size: 14px;
  color: #4a4a4a;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ReviewContainer>
        <Rating>5.0</Rating>
        <RatingBox>
          <RatingMeaning>Excellent</RatingMeaning>
          <RatingBubble />
          <RatingTotal>500 reviews</RatingTotal>
        </RatingBox>
      </ReviewContainer>
    );
  }
}

export default Review;