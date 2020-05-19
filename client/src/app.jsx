import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

// import GlobalFonts from './fonts/fonts.js';
import GlobalStyle from './styledComponents/GlobalStyle.js';
import About from './components/About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        {/* <GlobalFonts /> */}
        <About />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
