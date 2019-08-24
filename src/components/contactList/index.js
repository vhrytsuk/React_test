import React from 'react';
import './index.css';
import ContacItem from "../contactItem";


const ContactList = (props) => {

    const Item = props.ContactList.map((item) => {

        return (
            <ContacItem name={item.name} desc={item.desc} avatar={item.avatar} sex={item.sex} />
        )
    })

    return (
        <div className="col-md-10 offset-md-1 row-block">
            <ul id="sortable">
                {Item}
            </ul>
        </div>
    )
}
export default ContactList;