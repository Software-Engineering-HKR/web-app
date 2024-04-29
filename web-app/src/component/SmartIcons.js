import React from 'react';

function SmartIcons({ device, active, extraClasses }) {

    let IconComponent;

    switch (device) {
        case "led":
            IconComponent = <span className= {`material-icons ${extraClasses}`}>&#xe0f0;</span>
            break;
        case "yellow-led":
            IconComponent = <span className={`material-icons ${extraClasses}`}>&#xe0f0;</span>
            break;
        case "door":
            IconComponent = <span className={`material-icons ${extraClasses}`}>&#xeffd;</span>
            break;
        case "window":
            IconComponent = <span className={`material-icons ${extraClasses}`}>&#xec12;</span>
            break;
        case "fan":
            IconComponent = <span className={`material-icons ${extraClasses}`}>&#xec0c;</span>
            break;
        case "motion":
            IconComponent = <span className={`material-icons ${extraClasses}`} style={{ color: '#004F9B' }}>&#xe51e;</span>
            break;
        case "light":
            IconComponent = <span className={`material-icons ${extraClasses}`} style={{ color: '#004F9B' }}>&#xe3ab;</span>
            break;
        case "gas":
            IconComponent = <span className={`material-icons ${extraClasses}`} style={{ color: '#004F9B' }}>&#xe7b0;</span>
            break;
        case "steam":
            IconComponent = <span className={`material-icons ${extraClasses}`} style={{ color: '#004F9B' }}>&#xefd8;</span>
            break;
        case "moisture":
            IconComponent = <span className={`material-icons ${extraClasses}`} style={{ color: '#004F9B' }}>&#xe798;</span>
            break;
        default:
            IconComponent = <span className={`material-icons ${extraClasses}`}>&#xe5d5;</span>
    }

    return (
        <>
            {IconComponent}
        </>
    );
}

export default SmartIcons;
