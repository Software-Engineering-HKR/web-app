import React from 'react';
import { PiLampFill, PiLampDuotone, PiDoorDuotone, PiDoorOpenDuotone, PiFanFill, PiFanDuotone} from "react-icons/pi";
import { MdOutlineSensors, MdOutlineDoorSliding } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { GiWindow, /*GiClosedDoors*/ } from "react-icons/gi";

function SmartIcons({ device, active }) {
    
    let IconComponent;

    switch (device) {
        case "led":
            IconComponent = active ? <PiLampFill size={50} color="white" /> : <PiLampDuotone size={50} color="black" />;
            break;
        case "yellow-led":
            IconComponent = active ? <PiLampFill size={50} color="yellow" /> : <PiLampDuotone size={50} color="#D0A103" />;
            break;
        case "door":
            IconComponent = active ? <PiDoorOpenDuotone size={50} color="white" /> : <PiDoorDuotone size={50} color="black" />;
            break;
        case "window":
            IconComponent = active ? <GiWindow size={50} color="white" /> : <MdOutlineDoorSliding size={50} color="black" />;
            break;
        case "fan":
            IconComponent = active ? <PiFanFill size={50} color="white" /> : <PiFanDuotone size={50} color="black" />;
            break;
        case "motion":
            IconComponent = active ? <MdOutlineSensors size={50} className="card-icon-top" /> : <FaDotCircle size={10} className="card-icon-top" />;
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
