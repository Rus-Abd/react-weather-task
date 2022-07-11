import React, { useState } from 'react'
import { SettingsBox, SettingsEl, SettingsIcon, SettingsBoxItem } from './styled'

function Settings() {
    const [showBox, setShowBox] = useState(false)

    const handleClick = () => () => {
        setShowBox(!showBox)
    }

    return (
        <SettingsEl>
            <SettingsIcon onClick={handleClick()} />
            <SettingsBox show={showBox}>
                <SettingsBoxItem>Weekly</SettingsBoxItem>
                <SettingsBoxItem>daily</SettingsBoxItem>
            </SettingsBox>
        </SettingsEl>
    )
}

export default Settings
