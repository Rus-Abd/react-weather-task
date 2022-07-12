import styled from 'styled-components'

export const List = styled.ul`
    list-style: none;
    display: inline-block;
    width: 350px;
    margin-top: 15px;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: var(--x1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 5px 35px;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    color: var(--white);
    font-size: var(--x4);
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: var(--x1);
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 40px;
        margin-right: var(--x1);
        border-radius: var(--x1);
        background-color: rgba(48, 50, 99, 0.8);
        border: 2px solid rgba(255, 255, 255, 0.1);
    }
`
