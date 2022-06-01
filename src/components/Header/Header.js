import React, { Component } from "react";

const Header = () => {
    const headerStyle = { display: "flex", textAlign: "center", padding: 20, textTransform: 'uppercase', background: '#000', color: '#fff' }

    return (
        <div>
            <span style={headerStyle}>Phone Directory</span>
            </div >
        )
    

        }
export default Header;