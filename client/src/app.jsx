import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
//import child components:
import GlobalFonts from './fonts/fonts.jsx';
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
        <GlobalFonts />
        <About />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
