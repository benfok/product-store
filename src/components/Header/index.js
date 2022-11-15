import React from 'react';
import useMedia from '../../hooks/useMedia';
import navPic from '../../assets/vailDesktopMenu.png';
import mobileNav from '../../assets/vailMobileMenu.png';
import mobileLogo from '../../assets/vailLogo.png';
import '../../styles/header.css';

function Header () {

    const isMobile = useMedia('(max-width: 1080px)');

    return (
        <div className="header">
            <div className="heroBackgroundGradient"></div>
            {!isMobile &&
                <>
                    <div className="navPicContainer">
                        <img className="desktopNav" src={navPic} alt="nav-desktop" />
                    </div>
                </>
            }
            {isMobile &&
                <>
                    <div className="navPicContainer">
                        <img src={mobileLogo} alt="logo" />
                        <img className="mobileNav" src={mobileNav} alt="nav-mobile" />
                    </div>
                </>
            }
            <div className="heroTextContainer">
                <div className="heroSub">
                    Vail Ski & Snowboard School
                </div>
                <h1>
                    Experience a Mountain Like No Other
                </h1>
                <p>
                    Learn a new sport, improve your technique, or explore new possibilities. At Vail, you don't just experience a mountain like no other, you learn how to truly explore it.
                </p>
            </div>
        </div>
    )
}

export default Header;