import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'Roboto';
  src: url("../fonds/Roboto-Medium.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  background-color: #F1F1F1;
}

div,
button,
a {
  font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyles;
