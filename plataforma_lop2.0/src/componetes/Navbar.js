import React from 'react'

const Navbar = props => {
    return (
        <div>
            {/* Navbar (sit on top) */}
            < div className="w3-top" >
                <div className="w3-bar w3-white w3-card" id="myNavbar">
                    <a href="#home" className="w3-bar-item w3-button w3-wide">LoP</a>
                    {/* Right-sided navbar links */}
                    <div className="w3-right w3-hide-small">
                        <a href="#about" className="w3-bar-item w3-button">INÍCIO</a>
                        <a href="#team" className="w3-bar-item w3-button"><i className="fa fa-user"></i> LOGIN</a>
                        <a href="#work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> CADASTRO</a>
                        <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTATO</a>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Navbar;