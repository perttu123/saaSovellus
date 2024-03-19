

import NavBar from '../components/navbar.js';


import { Outlet } from 'react-router-dom';

function Layout() {


  return (
    <>
         <NavBar/>
         <Outlet/>
         </>
  );
}

export default Layout;