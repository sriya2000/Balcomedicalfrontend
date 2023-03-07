import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import {Link} from 'react-router-dom'
const Menu=()=>{
    return( 
        <ListGroup>
            <Link className="list-group-item list-group-item-action"
             tag="a" to="" action>
               Book Appointment
            </Link>
            <Link className="list-group-item list-group-item-action" 
            tag="a" to="/facilitiesviewappointment" action>
                View Appointment
            </Link>
            <Link className="list-group-item list-group-item-action" 
            tag="a" to="" action>
                View Doctor
            </Link>
            <ListGroupItem tag="a" href="#" action>
                Contact
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action>
                Facilities
            </ListGroupItem>
        </ListGroup>

    )
}

export default Menu;