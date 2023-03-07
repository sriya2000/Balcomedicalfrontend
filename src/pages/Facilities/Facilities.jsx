import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Bloodcentre from "../Blood Centre/Bloodcentre";
import Cafeteria from "../Cafeteria/Cafeteria";
import Pickdrop from "../Pick&Drop/Pickdrop";
import Roomtype from "../Roomtype/Roomtype";
import './facilities.css'

const Facilities = () => {
  return (
    <div className="b1">
      
      <Tabs
        defaultActiveKey="roomtype"
        id="uncontrolled-tab-example"
        className="mb-3 b2"
      >
        <Tab eventKey="roomtype" title="Room Type" className="roo">
          <Roomtype />
        </Tab>
        <Tab eventKey="cafeteria" title="Cafeteria" className="roo1">
          <Cafeteria />
        </Tab>
        <Tab eventKey="blood centre" title="Blood Centre" className="roo2">
        <Bloodcentre />
        </Tab>
        <Tab eventKey="pickdrop" title="Free Pick & Drop" className="roo3">
        <Pickdrop />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Facilities;
