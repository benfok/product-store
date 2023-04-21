import React from 'react';
import footerPic from '../../assets/vailFooter.png';
import '../../styles/footer.css';

function Footer () {

    return (
        <footer>
            <img src={footerPic} />
            <div className="footerContentContainer">
                <div id="background">
                    <div id="t"></div>
                    <div id="l"></div>
                </div>
                <p>Tidy Lines Web Design</p>
            </div>
        </footer>
    )
}

export default Footer;