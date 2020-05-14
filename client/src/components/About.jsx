import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

//import child components:
import Header from './Header.jsx';
import Review from './Review.jsx';
import Description from './Description.jsx';
import Pictures from './Pictures.jsx';
import Amenities from './Amenities.jsx';
import Features from './Features.jsx';
import Types from './Types.jsx';
import GoodToKnow from './GoodToKnow.jsx';
import HotelLinks from './HotelLinks.jsx';

//don't put top border, so it looks like shadow
const AboutModule = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 24px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-top: 0;
`;
// grid-row-gap: 15px;

const LeftColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2px 0 0;
`;

const RightColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px 0 0;
`;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: null
    };
  }

  componentDidMount() {
    var url = new URL(window.location.href);
    var ID = url.searchParams.get('id');
    $.get(`/about/${ID}`)
      .then(response => {
        this.setState({
          hotel: response
        });
      })
      .catch( err => res.status(400).send('Hotel not found') );
  }

  render() {
    //wait for componentDidMount to update state before rendering html
    if (this.state.hotel === null) {
      return null;
    }
    return (
      <AboutModule>
        <Header>About</Header>
        <LeftColumn>
          <Review rating={this.state.hotel.averageReview} total={this.state.hotel.numReviews}/>
          <Description description={this.state.hotel.description}/>
          <Pictures links={this.state.hotel.photos}/>
        </LeftColumn>
        <RightColumn>
          <Amenities amenities={this.state.hotel.propertyAmenities}/>
          <Features features={this.state.hotel.roomFeatures}/>
          <Types types={this.state.hotel.roomTypes}/>
          <GoodToKnow class={this.state.hotel.class}/>
          <HotelLinks link={this.state.hotel.link}/>
        </RightColumn>
      </AboutModule>
    );
  }
}

export default About;
