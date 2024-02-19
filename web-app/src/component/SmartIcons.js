import React from 'react';
import { PiLampFill, PiLampDuotone, PiDoorDuotone, PiDoorOpenDuotone} from "react-icons/pi";
import { MdOutlineSensors } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";

function SmartIcons({ device, active }) {
    
    let IconComponent;

    if (device === "whiteLed") {
        IconComponent = active ? <PiLampFill size={50} color="white" /> : <PiLampDuotone size={50} color="black" />
    } else if (device === "yellowLed") {
        IconComponent = active ? <PiLampFill size={50} color="yellow" /> : <PiLampDuotone size={50} color="#D0A103" />
    } else if (device === "door") {
        IconComponent = active ? <PiDoorOpenDuotone size={50} color="white" /> : <PiDoorDuotone size={50} color="black" />
    } else if (device === "motionSensor") {
        IconComponent = active ? <MdOutlineSensors size={50} className="card-icon-top" /> : <FaDotCircle size={10} className="card-icon-top" />
    } else {
        IconComponent = <PiLampDuotone size={50} color="black" />
    } 

    return (
        <>
            {IconComponent}
        </>
    );
}

export default SmartIcons;
