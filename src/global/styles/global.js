import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  ul{
    list-style: none;
  }
  html,body,#root{
    height: 100%;
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f8f8;
  }

  /* .footer {
    grid-area: footer;
  } */

`

// export const Site = styled.div`
// 	display: grid;
// 	grid-template-areas:
// 		'header header'
// 		'main sidebar'
// 		'footer footer';
// 	grid-template-columns: 1fr 25%;
// 	grid-template-rows: auto 1fr auto;
// 	height: 100vh;
// 	margin: 0;
// 	@media screen and (max-width: 990px) {
// 		grid-template-areas:
// 			'header'
// 			'main'
// 			'sidebar'
// 			'footer';
// 		grid-template-columns: 1fr;
// 	}
// 	main {
// 		padding: 0 100px;
// 		margin: 30px 0;
// 		grid-area: main;

// 		@media screen and (max-width: 855px) {
// 			padding: 0 20px;
// 		}
// 		@media screen and (max-width: 990px) {
// 			padding: 0 20px !important;
// 		}

// 		@media screen and (max-width: 1235px) {
// 			padding: 0 50px;
// 		}
// 	}
// `
