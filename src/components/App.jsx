import React from 'react';
import { BaseStyles, AppContain } from '../style/Styles';
import Header from './Header';
import SongPad from './SongPad';
import Footer from './Footer';
// import ImportPdf from './ImportPdf';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // importPdf: false,
    };
    // this.handleImportPdfClick = this.handleImportPdfClick.bind(this);
  }

  handleImportPdfClick() {
    const { importPdf } = this.state;
    this.setState({ importPdf: !importPdf });
  }

  render() {
    // const { importPdf } = this.state;
    // if (importPdf) {
    //   return (
    //     <AppContain>
    //       <Header />
    //       <ImportPdf goBack={this.handleImportPdfClick} />
    //       <Footer />
    //     </AppContain>
    //   );
    // }

    return (
      <div>
        <BaseStyles />
        <AppContain>
          <Header />
          <SongPad
          // importPdfClick={this.handleImportPdfClick}
          />
          <Footer />
        </AppContain>
      </div>
    );
  }
}

export default App;
