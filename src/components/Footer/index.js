import React from 'react';
import footerPic from '../../assets/vailFooter.png';
import { Link } from 'react-router-dom';
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
                <p>
                    <Link to = "/card">
                    Product Card
                    </Link>
                </p>
                <p>
                    <Link to = "/">
                    Store
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;