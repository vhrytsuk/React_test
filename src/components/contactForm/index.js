import React from 'react';
import './index.css';

const ContactForm = () => {
    
    return(
        <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2 contact_name">
                    <label for="inputPassword2" class="sr-only">Name</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="Name" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Fand</button>
                <button type="submit" class="btn btn-primary mb-2">Add</button>
                <button type="submit" class="btn btn-primary mb-2">Delete</button>
        </form>
    )
}
export default ContactForm;




