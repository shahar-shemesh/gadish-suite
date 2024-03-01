import { useState } from 'react';
import classes from '../Pages/Contact.module.scss';

export default function Icon({ iconClassName, text, iconHover }) {

    const [hovered, setHovered] = useState(false);
    const handleHover = () => setHovered(!hovered);

    const iconSize = "bx-md";

    return (
        <div className={`${classes.icon} ${hovered ? iconHover : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <i className={`${iconClassName} ${iconSize} `}></i>
            <p>{text}</p>
        </div>
    );
}