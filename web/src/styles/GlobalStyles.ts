import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height:100%;

    }

    *, button, input {
        border: 0;
        outline: 0;
    }

    
    @media(max-width: 1080px) {
        html {
            font-size: 93.75%; 
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%
        }
    }

    body {
        background: var(--black);
    }

    a {
        color: inherit; /*herda a cor do seu pai*/
        text-decoration: none;
    }

    :root{
        --gray-dark: #212121;
        --black: #000;
        --white: #FFF;
        --backgroud: #F2F3F5;
        --gray-line: #DCDDE0;
        --text: #666666;
        --title: #2E384D;
    }
`