import { Link } from 'react-router-dom';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: (
        <a href="/">
          Home
        </a>
      ),
   
  },
  {
    label: (
        <a href="/player">
          Player
        </a>
      ),
  },
  {
    label: (
        <a href="/squad">
          Squad
        </a>
      ),
  },
  {
    label: (
      <a href="/calender">
        Calendar
      </a>
    ),
   
  },
];
const NavBar = ({calender}) => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default NavBar;


// const NavBar = ()=>{
//     return(
//         <div className="nav-bar">
//         <ul className='nav-link-container'>
//         <Link to='/'><li id='nav-list-item'>Home</li></Link>
//         <Link to='/player'><li id='nav-list-item'>Player</li></Link>
//         <Link to='/squad'><li id='nav-list-item'>Squad</li></Link>
//         <Link to='/calender'><li id='nav-list-item'>Calendar</li></Link>
//         </ul>

//         </div>
//     )
// }

// export default NavBar