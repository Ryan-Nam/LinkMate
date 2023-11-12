import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactCard({contact}) {
    const { name, username, email, address, phone, website, company } = contact;
    const navigate = useNavigate();

    return (
       <li onClick={()=>{navigate(`contacts/${contact.id}`, {state: {contact}})}}>
        <div>
            <p>{name}</p>
        </div>
      
    </li>
    );
}

