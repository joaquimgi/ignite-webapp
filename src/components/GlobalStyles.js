import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:darkgray;
    }
    &::-webkit-scrollbar-track {
    background: white;
  }
}
body{
    font-family:'Montserrat', sans-serif;
    width:100%;
    margin-bottom:5rem;
}
h2{
    font-family:'Abril Fatface', cursive;
    font-size:3rem;
    font-weight: lighter;
    color: #333;
}
h3{
    font-size:1.3rem;
    padding:1.5rem 0rem;
    color: #333;
}
p{
    font-size:1.2rem;
    line-height:200%;
    color: #696969;
}
a{
    text-decoration:none;
    color: #333;
}
img{
    display:block;
}
input{
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
}

`;

export default GlobalStyles;
