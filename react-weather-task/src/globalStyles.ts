import { createGlobalStyle } from 'styled-components'

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
`

export default GlobalStyles
