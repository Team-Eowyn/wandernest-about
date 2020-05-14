import React from 'react';
import styled from 'styled-components';
import RatingBox from '../styledComponents/BubbleRating.js';

const ReviewContainer = styled.div`
  grid-column: 1 / 2;
  border-bottom: 1px solid #e0e0e0;
  display: grid;
  grid-template-columns: .25fr .75fr;
  grid-template-rows: 1fr;
  padding: 10px 0 18px;
`;

const Rating = styled.span`
  font-family: 'LatoBold';
  font-size: 48px;
  position: relative;
  align-self: start;
  padding: 0;
`;

// const RatingBox = styled.span`
//   display: flex;
//   flex-direction: column;
//   padding: 10px 0px 0;
// `;

// const RatingMeaning = styled.div`
//   font-family: 'LatoBold';
//   font-size: 16px;
// `;
// const RatingBubbles = styled.span`
//   display: flex;
//   flex-direction: row;
//   margin: -10px 0 0 -2px;
//   align-items: baseline;
// `;//center

// const RatingBubble = styled.span`
//   --percent: calc(${props => props.rating} / 5 * 100%);
//   display: inline-block;
//   font-size: 37px ;
//   padding-right: 7px;

//   &::before {
//     content: '●●●●●';
//     letter-spacing: -2px;
//     background: linear-gradient(90deg, ${props => props.bubbleBackground} var(--percent), ${props => props.bubbleColor} var(--percent));
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     -webkit-text-stroke: 1px #00aa6c;
//   }
// `;
// //only works if content is black circle (can't me white/ medium or big)

// const RatingTotal = styled.span`
//   font-family: 'LatoRegular';
//   font-size: 14px;
//   color: #4a4a4a;
//   align-self: center;
// `;

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
        <RatingBox rating={this.state.rating} total={this.state.total}>
          {/* <RatingMeaning>Excellent</RatingMeaning>
          <RatingBubbles>
            <RatingBubble bubbleColor='#fff' bubbleBackground='#00aa6c' rating={this.state.rating} />
            <RatingTotal>{this.state.total} reviews</RatingTotal>
          </RatingBubbles> */}
        </RatingBox>
      </ReviewContainer>
    );
  }
}

export default Review;