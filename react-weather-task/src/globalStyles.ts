import styled, { createGlobalStyle } from 'styled-components'
import bodyBackground from './assets/kace-rodriguez-p3OzJuT_Dks-unsplash.jpg'

const GlobalStyles = createGlobalStyle`
:root {
		--white: #ffffff;
	    --x0:  5px;
		--x1: 10px;
		--x2: 15px;
		--x3: 20px;
		--x4: 25px;
		--x5: 50px;
        
	}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{ 
    background-image: url(${bodyBackground});
    background-repeat: no-repeat;
    background-size: cover;
}


`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 900px) {
        max-width: 600px;
        margin: 0 auto;
    }
`

export default GlobalStyles
