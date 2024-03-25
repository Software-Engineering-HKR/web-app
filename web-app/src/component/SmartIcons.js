import React from 'react';
import { PiLampFill, PiLampDuotone, PiDoorDuotone, PiDoorOpenDuotone, PiFanFill, PiFanDuotone } from "react-icons/pi";
import { MdOutlineSensors, MdOutlineDoorSliding } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { GiWindow, /*GiClosedDoors*/ } from "react-icons/gi";

function SmartIcons({ device, active, className }) {

    let IconComponent;

    switch (device) {
        case "led":
            IconComponent = <span class= {`material-icons ${className}`}>&#xe0f0;</span>
            // IconComponent = active ? <PiLampFill size={50} color="white" /> : <PiLampDuotone size={50} color="black" />;
            break;
        case "yellow-led":
            IconComponent = <span class={`material-icons ${className}`}>&#xe0f0;</span>
            // IconComponent = active ? <PiLampFill size={50} color="yellow" /> : <PiLampDuotone size={50} color="#D0A103" />;
            break;
        case "door":
            IconComponent = <span class={`material-icons ${className}`}>&#xeffd;</span>
            // IconComponent = active ? <PiDoorOpenDuotone size={50} color="white" /> : <PiDoorDuotone size={50} color="black" />;
            break;
        case "window":
            IconComponent = <span class={`material-icons ${className}`}>&#xec12;</span>
            // IconComponent = active ? <GiWindow size={50} color="white" /> : <MdOutlineDoorSliding size={50} color="black" />;
            break;
        case "fan":
            IconComponent = <span class={`material-icons ${className}`}>&#xec0c;</span>
            // IconComponent = active ? <PiFanFill size={50} color="white" /> : <PiFanDuotone size={50} color="black" />;
            break;
        case "motion":
            IconComponent = <span class={`material-icons ${className}`}>&#xe51e;</span>
            // IconComponent = active ? <MdOutlineSensors size={50} className="card-icon-top" /> : <FaDotCircle size={10} className="card-icon-top" />;
            break;
        default:
            IconComponent = active ? <PiLampFill size={50} color="white" /> : <PiLampDuotone size={50} color="black" />;
    }


    return (
        <>
            {IconComponent}
        </>
    );
}

export default SmartIcons;
