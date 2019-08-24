import React from 'react';
import './index.css';

import ContactImg from "../imgContact";

const ContactBloc = (propse) => {

    const Items = propse.ContactBloc.map((items) => {

        return (
            <ContactImg name={items.name} avatar={items.avatar} sex={items.sex} date={items.date} city={items.city} rank={items.rank} history={items.history}/>
        )
    })

    return (
        <div className="row justify-content-center">
            {Items}
        </div>
    )

}
export default ContactBloc;