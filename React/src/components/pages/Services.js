import React from "react";
import Cards from "../Cards";
import Announcement from "../Announcement";
import PlayerFinder from "../PlayerFinder";
import './Services.css';

function Services() {
  return (
    <div>
      <Cards />
      <h1 className="text-center">Announcement Section</h1>
      <Announcement/>
      <PlayerFinder/>
    </div>
  );
}

export default Services;