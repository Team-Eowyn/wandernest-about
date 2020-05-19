import styled from 'styled-components';
import React from 'react';

const RatingBox = styled.span`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 0;
`;

const RatingMeaning = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
`;
const RatingBubbles = styled.span`
  display: flex;
  flex-direction: row;
  margin: -10px 0 0 -2px;
  align-items: baseline;
`;//center

const RatingBubble = styled.span`
  --percent: calc(${props => props.rating} / 5 * 100%);
  display: inline-block;
  font-size: 37px ;
  padding-right: 7px;

  &::before {
    content: '●●●●●';
    letter-spacing: -2px;
    background: linear-gradient(90deg, ${props => props.bubbleBackground} var(--percent), ${props => props.bubbleColor} var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #00aa6c;
  }
`;
//only works if content is black circle (can't be white/ medium or big)

const RatingTotal = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #4a4a4a;
  align-self: center;
`;

class BubbleRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
      total: this.props.total
    };
  }

  render() {
    var rating = this.state.rating;
    var meaning;
    if (rating >= 4.5) {
      meaning = "Excellent";
    } else if (rating >= 3.5) {
      meaning = "Excellent";
    } else if (rating >= 2.5) {
      meaning = "Average";
    } else if (rating >= 1.5) {
      meaning= "Poor";
    } else {
      meaning = "Terrible";
    }
    return (
      <RatingBox>
        <RatingMeaning>{meaning}</RatingMeaning>
        <RatingBubbles>
          <RatingBubble bubbleColor='#fff' bubbleBackground='#00aa6c' rating={this.state.rating} />
          <RatingTotal>{this.state.total} reviews</RatingTotal>
        </RatingBubbles>
      </RatingBox>
    );
  }
}

export default BubbleRating;