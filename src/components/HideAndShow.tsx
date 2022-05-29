import React, { useState } from "react";
import './HideAndShow.css'

type HideAndShowProps = {
    title: string;
    children: React.ReactNode;
}
const HideAndShow = (props: HideAndShowProps) => {

    const {title, children} = props;
    const [show, setShow] = useState(false);

    const onAccordionClick = () => {
        setShow(!show);
    }

    return (
        <div className="HideAndShow">
            <div className="HideAndShow-title">
                <h3>{title}</h3>
                <button onClick={() => onAccordionClick()}>{!show ? 'Visible' : 'Hide'}</button>
            </div>
            {show && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

export default HideAndShow;