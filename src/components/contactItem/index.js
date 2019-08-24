import React from 'react';
import './index.css';

const ContacItem = (props) => {
    const url = `https://randomuser.me/api/portraits/${props.sex}/${props.avatar}.jpg`;
    return (
        <li>
            <div className="media">
                <div className="media-left align-self-center">
                    <img className="rounded-circle" src={url} />
                </div>
                <div className="media-body">
                    <h4>{props.name}</h4>
                    <p>{props.desc}</p>
                </div>
                <div class="media-right align-self-center">
                    <a href="#" className="btn btn-default">Contact Now</a>
                </div>
            </div>
        </li>
    )
}
export default ContacItem;