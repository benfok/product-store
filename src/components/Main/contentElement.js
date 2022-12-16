import React from 'react';
import '../../styles/contentElement.css';

const ContentElement = ({imageUrl, header, contentHtml}) => {

    return (
        <section className="contentElement">

                <div className="contentElementBackground"></div>

            <div className="contentElementContainer">
                <div className="contentImageContainer">
                    <img src={imageUrl} alt="Photo by Matt Sclarandis on Unsplash"/>
                </div>
                <div className="contentCopyContainer">
                    <h2>{header}</h2>
                    <div>{contentHtml}</div>
                </div>
            </div>
        </section>
    )

};

export default ContentElement;