import React from 'react';
import { BaseStyles, AppContain } from '../style/Styles';
import Header from './Header';
import SongPad from './SongPad';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BaseStyles />
        <AppContain>
          <Header />
          <SongPad />
          <Footer />
        </AppContain>
      </div>
    );
  }
}

export default App;
