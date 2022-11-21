import React from 'react';
import footerPic from '../../assets/vailFooter.png';
import '../../styles/footer.css';

function Footer () {

    return (
        <footer>
            <img src={footerPic} />
            <div className="footerContentContainer">
                <p>Resort Footer</p>
            </div>
        </footer>
    )
}

export default Footer;