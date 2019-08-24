import React from 'react';
import './index.css';

const ContactImg = (propse) => {
    const url = `https://randomuser.me/api/portraits/${propse.sex}/${propse.avatar}.jpg`;

    return (
            <div className="card imgContact">
                <img className="card-img-top" src={url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{propse.name}</h5>
                    <p className="card-text">{propse.history}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li className="list-group-item">{propse.date}</li>
                    <li className="list-group-item">{propse.city}</li>
                    <li className="list-group-item">{propse.rank}</li>
                </ul>
                <div class="card-body">
                    <a href="#" className="btn btn-default linc__bloc">Card link</a>
                    <a href="#" className="btn btn-default linc__bloc">Another link</a>
                </div>
            </div>
        
    )
}

export default ContactImg;