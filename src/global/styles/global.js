import styled, { createGlobalStyle } from 'styled-components'

export const kGreenColor = '#0ece91'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Aldrich&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }
  html,body,#root{
    height: 100%;
  }
  body {
    margin: 0;
    font-family: 'Aldrich', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f8f8;
  }
  a{
    text-decoration: none;
  }

`
