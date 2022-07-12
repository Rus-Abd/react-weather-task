import styled from 'styled-components'

export const WeatherContainer = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 188px;
    background-color: rgba(255, 255, 255, 0.33);
    backdrop-filter: blur(var(--x1));
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    opacity: 0.8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 1200px) {
        margin-top: 40px;
    }
    @media screen and (max-width: 900px) {
        border-radius: 30px;
    }
`
export const List = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    width: 100%;
`
export const ListItem = styled.li`
    color: var(--white);
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`
