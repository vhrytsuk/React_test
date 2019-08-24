import React from 'react';
import './index.css';

const SligerItem = (sliders) => {
    

    // const url = `../../public/images/slider/${sliders.namber}.jpg`;
    const url = `https://randomuser.me/api/portraits/men/${sliders.namber}.jpg`;

    return (
        <div class="carousel-item">
            <img class="d-block w-100" src={url} alt="First slide" />
        </div>
    )
}
export default SligerItem;