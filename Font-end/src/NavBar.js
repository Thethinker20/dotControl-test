import React from 'react';
import Logo from "./image/logo1.png";


function NavBar() {
    return (
<div className="dash-nav">
                <nav>
                    <div className="container">
                    <img src={Logo} alt=""/>
                    </div>
                    {/*                     
                    <div className="notification-icon">
                        <FontAwesomeIcon className="N-icon" icon={faBell} />
                    </div>
                    <div className="dropdown">
                        <span>Profile</span>
                        <div className="dropdown-content">
                            <p>Login</p>
                        </div>
                    </div> */}
                </nav>
            </div>
    );
}

export default NavBar;