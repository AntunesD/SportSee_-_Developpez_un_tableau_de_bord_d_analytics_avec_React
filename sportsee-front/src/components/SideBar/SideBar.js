import React from 'react';
import './SideBar.scss';

//import des image des logos
import Meditation from '../../assets/Meditation.svg';
import musculation from '../../assets/musculation.svg';
import natation from '../../assets/natation.svg';
import velo from '../../assets/velo.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href='/meditation'><img src={Meditation} alt='Logo méditation'></img></a></li>
        <li><a href='/natation'><img src={natation} alt='Logo natation'></img></a></li>
        <li><a href='/velo'><img src={velo} alt='Logo velo'></img></a></li>
        <li><a href='/musculation'><img src={musculation} alt='Logo musculation'></img></a></li>
      </ul>
      <span> <p>Copiryght, SportSee 2020</p></span>
     
    </div>
  );
}

export default Sidebar;
