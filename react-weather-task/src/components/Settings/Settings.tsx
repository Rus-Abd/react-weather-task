import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDailyWeather, getWeather } from '@slices/weatherSlice'
import { SettingsBox, SettingsEl, SettingsIcon, SettingsBoxItem } from './styled'

function Settings() {
    const dispatch = useDispatch()
    const [showBox, setShowBox] = useState(false)

    const handleClick = () => () => {
        setShowBox(!showBox)
    }

    return (
        <SettingsEl>
            <SettingsIcon onClick={handleClick()} />
            <SettingsBox show={showBox}>
                <SettingsBoxItem onClick={() => dispatch(getWeather())}>Weekly</SettingsBoxItem>
                <SettingsBoxItem onClick={() => dispatch(getDailyWeather())}>daily</SettingsBoxItem>
            </SettingsBox>
        </SettingsEl>
    )
}

export default Settings
