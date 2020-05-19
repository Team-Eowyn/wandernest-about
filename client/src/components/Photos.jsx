import React, {useState} from 'react';
import styled from 'styled-components';
import {ArrowIosBackOutline, ArrowIosForwardOutline} from 'styled-icons/evaicons-outline';

const PhotoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 0;
  padding-top: 15px;
`;

const Slider = styled.div`
  grid-row: 1 / 2;
  width: 95%;
  position: relative;
`;

const MainPhoto = styled.img`
  width: 100%;
`;

const BottomPhotos = styled.div`
  grid-row: 2 / 3;
  width: 95%;
  display: flex;
  justify-content: space-between;

`;

const BottomPhoto = styled.img`
  height: 50px;
  width: calc(95% / 7);
`;

const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  background: rgba(0,0,0,.32);
  border: 0;
  position: absolute;
  top: calc((100% - 40px) / 2);
  right: 0;
  &:hover {
    background: rgba(0,0,0,.5);
    cursor: pointer;
  }
`;
const PrevArrowButton = styled(ArrowButton)`
  left: 0;
`;

const Previous = styled(ArrowIosBackOutline)`
  color: white;
`;
const Next = styled(ArrowIosForwardOutline)`
  color: white;
`;

const Photos = (props) => {
  const [mainPhotoIndex, setIndex] = useState(0);

  const nextIndex = (currentIndex) => {
    if (currentIndex === props.links.length - 1) {
      setIndex(0);
    } else {
      setIndex(currentIndex + 1);
    }
  };

  const prevIndex = (currentIndex) => {
    if (currentIndex === 0) {
      setIndex(props.links.length - 1);
    } else {
      setIndex(currentIndex - 1);
    }
  };

  return(
    <PhotoContainer>
      <Slider>
        <MainPhoto src={props.links[mainPhotoIndex]} />
        <PrevArrowButton onClick={() => prevIndex(mainPhotoIndex)}><Previous size='15px' /></PrevArrowButton>
        <ArrowButton onClick={() => nextIndex(mainPhotoIndex)}><Next size='15px' /></ArrowButton>
      </Slider>
      <BottomPhotos>
        {props.links.map((link, index) => <BottomPhoto key={index} src={link}></BottomPhoto>)}
      </BottomPhotos>
    </PhotoContainer>
  );
}

// class Photos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       links: this.props.links
//     };
//   }

//   render() {
//     return(
//       <PhotoContainer>
//         <Slider>
//           <MainPhoto src={this.state.links[0]} />
//           <PrevArrowButton><Previous size='15px' /></PrevArrowButton>
//           <ArrowButton><Next size='15px' /></ArrowButton>
//         </Slider>
//         <BottomPhotos>
//           {this.state.links.map((link, index) => <BottomPhoto key={index} src={link}></BottomPhoto>)}
//         </BottomPhotos>
//       </PhotoContainer>
//     );
//   }
// }

export default Photos;
