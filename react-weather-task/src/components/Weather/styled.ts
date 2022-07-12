import styled from 'styled-components'

export const WeatherContainer = styled.div`
    width: 100%;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.33);

    backdrop-filter: blur(10px);

    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    opacity: 0.8;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const List = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    width: 100%;
`
export const ListItem = styled.li`
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
`
