import styled , {createGlobalStyle} from 'styled-components';

import  bGImage from './images/beach.jpg';

export const GlobalStyle = createGlobalStyle`
html{
 height: 100%;
}
body{
    background-image: url(${bGImage});
    background-size: cover;
    margin: 0;
    padding 0 , 20px;
    display: flex;
    justify-content: center;
}
*{
    box-sizing: border-box;
    font-family: 'Catamaran' ,sans-serif
}

`;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
>p{
    color: #ffffff;

}
.score{
    color:#ffffff;
    font-size: 2rem;
    margin: 0;

}
h1{
    font-family: Catamaran , 'Arial Narrow Bold', san-serif;
    background-image: linear-gradient(180deg, #F9F2F2, #87f1ff);
    background-size:100%;
    background-clip:text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin: 20px;



}
.Start, .next{
    cursor: pointer;
    background-image: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;

}
.Start{
    max-width: 200px
}

`;