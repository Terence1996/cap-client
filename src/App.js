import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme }from "@mui/material/styles";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useMemo } from "react";
 import { themeSettings } from "./theme";
 import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./scenes/dashboard/dashboard";
import Layout from "./scenes/layout/layout";
import { Products } from "scenes/products/product";
import { Customers } from "scenes/customers/customer";
import { Transactions } from "scenes/transactions/transaction";
import Geography from "scenes/geography/geography";
import Overview from "scenes/overview/overview";
import Daily from "scenes/daily/daily";
import Monthly from "scenes/monthly/monthly";
import Breakdown from "scenes/breakdown/breakdown";
import Admin from "scenes/admin/admin";
import { Performance } from "scenes/performance/performance";

function App() {
  const mode = useSelector((state)=>state.global.mode);
  const theme= useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
          <Route path="/dashboard" element= {<Dashboard/>}/>
    <Route path = "/products" element={<Products/>} />
    <Route path="/customers" element={<Customers/>}/>
    <Route path="/transactions" element={<Transactions/>}/>
    <Route path="/geography" element={<Geography/>}/>
    <Route path="/overview" element={<Overview/>}/>
    <Route path="/daily" element={<Daily/>} />
    <Route path="/monthly" element={<Monthly/>}/>
    <Route path="/breakdown" element={<Breakdown/>}/>
    <Route path="admin" element={<Admin/>} />
<Route path="/performance" element={<Performance/>}/>
    </Route>
        </Routes>
</ThemeProvider>
</BrowserRouter>
    </div>
  );
}

export default App;
