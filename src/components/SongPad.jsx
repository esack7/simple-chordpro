import React from 'react';
import uuid from 'uuid/v4';
import {
  parseCP as parse,
  createCP as create,
  transpose,
  keys as keyList,
} from 'simplechordpro';
import {
  StyledSongPad,
  TextBoxContainer,
  TextBox,
  Buttons,
  Aside,
  Label,
  Select,
  TransposeDiv,
} from '../style/Styles';

class SongPad extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.data) {
      this.state = JSON.parse(localStorage.data);
    } else {
      this.state = {
        songInput: '',
        prevInput: '',
        currentKey: 'A',
        newKey: 'A',
      };
    }

    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleParse = this.handleParse.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSelectCurrentKey = this.handleSelectCurrentKey.bind(this);
    this.handleSelectNewKey = this.handleSelectNewKey.bind(this);
    this.handleTranspose = this.handleTranspose.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state));
  }

  handleClear() {
    const { songInput } = this.state;
    this.setState({ prevInput: songInput });
    this.setState({ songInput: '' });
  }

  handleParse() {
    const { songInput } = this.state;
    this.setState({ prevInput: songInput });
    this.setState({ songInput: parse(songInput) });
  }

  handleCreate() {
    const { songInput } = this.state;
    this.setState({ prevInput: songInput });
    this.setState({ songInput: create(songInput) });
  }

  handleTranspose() {
    const { songInput, currentKey, newKey } = this.state;
    this.setState({ prevInput: songInput });
    this.setState({
      songInput: transpose(songInput, currentKey, newKey),
      currentKey: newKey,
    });
  }

  handleUndo() {
    const { prevInput } = this.state;
    this.setState({ songInput: prevInput });
  }

  handleSongInput(e) {
    let { value } = e.target;
    // Allows song stings to be pasted directly into SongPad //
    if (value.split('\\r\\n').length > 1) {
      value = value.split('\\r\\n').join('\n');
    }
    if (value.split('\\n').length > 1) {
      value = value.split('\\n').join('\n');
    }
    // ///////////////////////////////////////////////////// //
    this.setState({ songInput: value });
  }

  handleSelectCurrentKey(e) {
    const { value } = e.target;
    this.setState({ currentKey: value });
  }

  handleSelectNewKey(e) {
    const { value } = e.target;
    this.setState({ newKey: value });
  }

  render() {
    const { songInput, currentKey, newKey } = this.state;
    return (
      <StyledSongPad>
        <Aside>
          <Buttons onClick={this.handleParse}>
            ChordPro to
            <br /> Chord/Lyric
          </Buttons>
          <Buttons onClick={this.handleCreate}>
            Chord/Lyric to
            <br /> ChordPro
          </Buttons>
          <TransposeDiv>
            <Label htmlFor="currentKey">
              Current Key
              <Select
                name="currentKey"
                id="currentKey"
                onChange={this.handleSelectCurrentKey}
                value={currentKey}
              >
                {keyList.map(ele => (
                  <option key={uuid()} value={ele}>
                    {ele}
                  </option>
                ))}
              </Select>
            </Label>
            <br />
            <Label htmlFor="newKey">
              New Key
              <Select
                name="newKey"
                id="newKey"
                onChange={this.handleSelectNewKey}
                value={newKey}
              >
                {keyList.map(ele => (
                  <option key={uuid()} value={ele} typeof="newKey">
                    {ele}
                  </option>
                ))}
              </Select>
            </Label>
            <Buttons onClick={this.handleTranspose}>Transpose</Buttons>
          </TransposeDiv>
          <Buttons onClick={this.handleUndo}>Undo</Buttons>
          <Buttons onClick={this.handleClear}>Clear</Buttons>
        </Aside>
        <TextBoxContainer>
          <TextBox
            onChange={this.handleSongInput}
            value={songInput}
            placeholder="Type or paste your song here -->"
          />
        </TextBoxContainer>
      </StyledSongPad>
    );
  }
}

export default SongPad;
