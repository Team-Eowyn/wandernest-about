import React from 'react';
import styled from 'styled-components';

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
    this.state = {};
  }

  render() {
    return (
      <AboutModule>
        <Header>About</Header>
        <LeftColumn>
          <Review />
          <Description />
          <Pictures />
        </LeftColumn>
        <RightColumn>
          <Amenities />
          <Features />
          <Types />
          <GoodToKnow />
          <HotelLinks />
        </RightColumn>
      </AboutModule>
    );
  }
}

export default About;
