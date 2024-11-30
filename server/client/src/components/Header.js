import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        <li>
                            <button className="btn" onClick={this.handleGoogleLogin}>Login with Google</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    handleGoogleLogin() {
    }
}

export default Header;
