import React from 'react';

const Header = (props) => {
    return(
        <div className="select_title rounded-pill font_title">
            <div className="container center_align">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Header;