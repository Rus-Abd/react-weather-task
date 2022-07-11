import styled from 'styled-components'

export const WeatherContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #354377;
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
