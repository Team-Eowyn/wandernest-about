import React from 'react';
import styled from 'styled-components';
import { ParkingBox, Safe } from 'styled-icons/remix-line';
import { Parent } from 'styled-icons/remix-fill';
import {
  Coffee, LuggageCart, ConciergeBell, Broom, UmbrellaBeach, Couch, SmokingBan, Bicycle
} from 'styled-icons/fa-solid';
import { Snowflake } from 'styled-icons/fa-regular';
import { Bed, Fridge } from 'styled-icons/boxicons-regular';
import { Sun } from 'styled-icons/evaicons-solid';
import { WifiOutline, ClockOutline } from 'styled-icons/evaicons-outline';
import {
  Pool, FitnessCenter, LocalBar, BusinessCenter, LiveTv
} from 'styled-icons/material-sharp';
import { LocalLaundryService, Waves } from 'styled-icons/material-outlined';


const propertyAmenities = { // 10/20
  'Free parking': ParkingBox,
  'Free High Speed Internet (WiFi)': WifiOutline,
  Pool,
  'Fitness Center with Gym / Workout Room': FitnessCenter,
  'Bar / lounge': LocalBar,
  'Bicycle rental': Bicycle,
  'Children Activities (Kid / Family Friendly)': Parent,
  'Business Center with Internet Access': BusinessCenter,
  Parking: ParkingBox,
  Wifi: WifiOutline,
  'Complimentary instant coffee': Coffee,
  'Poolside bar': LocalBar,
  'Rooftop bar': LocalBar,
  'Baggage storage': LuggageCart,
  Concierge: ConciergeBell,
  'Non-smoking hotel': SmokingBan,
  'Sun terrace': Sun,
  'Private check-in / check-out': ConciergeBell,
  'Dry cleaning': LocalLaundryService,
  'Laundry service': LocalLaundryService
};

const roomFeatures = { // 10 --> pick 5
  'Air conditioning': Snowflake,
  Housekeeping: Broom,
  'Private balcony': UmbrellaBeach,
  Safe,
  Sofa: Couch,
  Minibar: LocalBar,
  Refrigerator: Fridge,
  'Flatscreen TV': LiveTv,
  'Laptop safe': Safe,
  'Wake-up service / alarm clock': ClockOutline
};

const roomTypes = { // 4 --> pick 2
  'Non-smoking rooms': SmokingBan,
  Suites: Bed,
  'Ocean view': Waves,
  'Family rooms': Bed
};

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      icon: propertyAmenities['Free parking'], //default value, later changed in findType
      show: false,
      index: null
    };
  }

  componentDidMount() {
    this.findType(this.props);
    this.setState({
      show: this.props.clicked,
      index: this.props.index
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.clicked != prevProps.clicked) {
      this.setState({
        show: this.props.clicked
      });
    }
  }

  findType(props) {
    if (props.type === 'propertyAmenities') {
      this.setState({
        icon: propertyAmenities[this.state.name]
      });
    } else if (props.type === 'roomFeatures') {
      this.setState({
        icon: roomFeatures[this.state.name]
      });
    } else if (props.type === 'roomTypes') {
      this.setState({
        icon: roomTypes[this.state.name]
      });
    }
  }

  render() {
    const IconContainer = styled.div`
      grid-row-end: span 1;
      align-self: center;
      display: ${props => props.show || props.index < 3 ? 'block' : 'none'};
    `;
    //display: ${props => props.show ? 'block' : 'none'};


    const StyledIcon = styled(this.state.icon)`
      color: #4a4a4a;
      padding-right: 5px;
    `;
    const IconName = styled.span`
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #4a4a4a;
    `;

    return (
      <IconContainer show={this.state.show} index={this.state.index}>
        <StyledIcon size='20px' />
        <IconName>{this.state.name}</IconName>
      </IconContainer>
    );
  }
}

export default Icon;
