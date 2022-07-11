import styled from 'styled-components'
import settingsIcon from '../../assets/icons8-settings.svg'

export const SettingsEl = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
export const SettingsIcon = styled.span`
    background-image: url(${settingsIcon});
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    cursor: pointer;
`
export const SettingsBox = styled.ul`
    display: ${(props) => (props.show ? 'flex' : 'none')};
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    list-style: none;
    margin-top: 15px;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    width: 140px;
    height: 100px;
`

export const SettingsBoxItem = styled.li`
    font-size: 20px;
    cursor: pointer;
`
