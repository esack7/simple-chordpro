import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const BaseStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
  ${reset};
`;

const AppContain = styled.div`
  background: hsl(220, 13%, 18%);
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: block;
  margin: auto;
  width: 55%;
`;

const Title = styled.h1`
  /* margin: 10px; */
  color: hsl(207, 82%, 66%);
  font-size: 48px;
  font-family: 'Permanent marker', cursive;
  display: block;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: hsl(220, 14%, 71%);
  /* margin-left: 10px; */
  display: block;
`;

const StyledSongPad = styled.div`
  height: calc(100% - 116px);
`;

const TextBoxContainer = styled.div`
  display: inline-block;
  width: 83%;
  margin-top: 10px;
  height: calc(100% - 10px);
`;

const TextBox = styled.textarea`
  background: black;
  color: white;
  font-size: 0.8em;
  display: inline-block;
  width: 95%;
  height: calc(100% - 50px);
  margin: 10px;
  padding-left: 5px;
  font-family: Consolas, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Aside = styled.aside`
  display: inline-block;
  vertical-align: top;
  width: 17%;
  height: calc(100% - 10px);
  margin-top: 10px;
`;

const Buttons = styled.button`
  display: block;
  margin: 10px auto 5px;
  padding: 5px;
  width: 95%;
  border-radius: 10px;
  :hover {
    background-color: #778899;
    color: #fff;
  }
`;

const NonHyper = styled.a`
  color: hsl(220, 14%, 71%);
  text-decoration: inherit;
`;

const Foot = styled.div`
  height: 45px;
  background: hsl(207, 35%, 36%);
  color: hsl(220, 14%, 71%);
`;

const FootText = styled.h3`
  margin-top: 5px;
  font-size: 17px;
  text-align: center;
`;

const LogoStyled = styled.img`
  height: 15px;
`;

const Setting = styled.div`
  height: 410px;
  margin: 10px;
`;

const Explain = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #fff;
  padding-top: 25px;
  padding-bottom: 75px;
`;

const FileInput = styled.input`
  display: block;
  padding: 50px;
  border: solid #fff 1px;
  margin: auto;
  margin-bottom: 75px;
  background-color: hsl(220, 14%, 71%);
`;

const Label = styled.label`
  color: hsl(220, 14%, 71%);
  display: block;
  text-align: center;
  padding: 5px;
`;

const Select = styled.select`
  display: block;
  margin: 10px auto;
`;

const TransposeDiv = styled.div`
  border: 2px solid hsl(220, 14%, 71%);
  width: 95%;
  display: block;
  padding: 2px;
  margin-top: 10px;
`;
export {
  BaseStyles,
  AppContain,
  HeaderContainer,
  Title,
  SubTitle,
  StyledSongPad,
  TextBoxContainer,
  TextBox,
  Aside,
  Buttons,
  NonHyper,
  Foot,
  FootText,
  LogoStyled,
  Setting,
  Explain,
  FileInput,
  Label,
  Select,
  TransposeDiv,
};
