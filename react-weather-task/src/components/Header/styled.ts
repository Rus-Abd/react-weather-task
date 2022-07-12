import styled from 'styled-components'

export const HeaderEl = styled.header`
    display: flex;
    justify-content: space-between;
    color: var(--white);
    font-family: Arial, Helvetica, sans-serif;
`
export const HeaderH1 = styled.h1`
    color: var(--white);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 52px;
`

export const HeaderH2 = styled.h2`
    color: var(--white);
    font-family: Arial, Helvetica, sans-serif;
    font-size: var(--x4);
`

export const Location = styled.div`
    color: var(--white);
    align-self: flex-end;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    height: 40px;
`

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    width: 150px;
    height: 200px;
`
