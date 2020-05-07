import { createGlobalStyle } from 'styled-components';

import LatoBoldTtf from './Lato-Bold.ttf';
import LatoLightTtf from './Lato-Light.ttf';
import LatoRegularTtf from './Lato-Regular.ttf';
import LatoBoldWoff from './Lato-Bold.woff';
import LatoLightWoff from './Lato-Light.woff';
import LatoRegularWoff from './Lato-Regular.woff';
import LatoBoldWoff2 from './Lato-Bold.woff2';
import LatoLightWoff2 from './Lato-Light.woff2';
import LatoRegularWoff2 from './Lato-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'LatoRegular';
    src: local('Lato Regular'), local('Lato-Regular'), local('LatoRegular'),
    url(${LatoRegularWoff2}) format('woff2'),
    url(${LatoRegularWoff}) format('woff'),
    url(${LatoRegularTtf}) format('tff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'LatoBold';
    src: local('Lato Bold'), local('Lato-Bold'), local('LatoBold'),
    url(${LatoBoldWoff2}) format('woff2'),
    url(${LatoBoldWoff}) format('woff'),
    url(${LatoBoldTtf}) format('tff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'LatoLight';
    src: local('Lato Light'), local('Lato-Light'), local('LatoLight'),
    url(${LatoLightWoff2}) format('woff2'),
    url(${LatoLightWoff}) format('woff'),
    url(${LatoLightTtf}) format('tff');
    font-weight: 300;
    font-style: normal;
  }
`;
