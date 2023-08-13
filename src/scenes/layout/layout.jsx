import React, { useEffect, useState } from 'react'
import {Box, useMediaQuery} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { useGetUserQuery } from '../../state/api.js';



 const Layout = () => {
const [layout, setLayout] = useState({})
const isNonMobile = useMediaQuery("(min-width:600px)");
const [isSidebarOpen, setIsSidebarOpen]= useState(true);
const userId = useSelector ((state)=>state.global.userId);
console.log(userId)
const {data, refetch} = useGetUserQuery("63701cc1f032398675000120");
// useEffect(()=>{
// refetch();
// setLayout(data)
// console.log("injmj",data)
// },[])
console.log("data", data);

  return (
   <Box display={isNonMobile?"flex":"block"} width="100%" height="100%">
    <pre>
      {JSON.stringify(layout)}
    </pre>
    <Sidebar
    user={ data || {}}
    isNonMobile={isNonMobile}
    drawerWidth="250px"
    isSidebarOpen={isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
    />
<Box>
 <Navbar 
//  user={ data || {}}
 isSidebarOpen={isSidebarOpen}
 setIsSidebarOpen={setIsSidebarOpen}
 />
  <Outlet/>
    </Box>
   </Box>
  )
}

export default Layout;