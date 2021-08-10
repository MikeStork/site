import React from 'react';
import './Banner.css';

const Banner = ({url}) => {
    return (
        <div data-testid="Banner">
            <img data-testid="BannerImg" src={url} alt="Kuchnia"/>
        </div>
    )
}

export default Banner
