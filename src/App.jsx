import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Ticket from "./pages/Ticket.jsx";
import Account from "./pages/Account.jsx";
import History from "./pages/History.jsx";
import Category from "./pages/Category.jsx";


const App = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/ticket' element={<Ticket/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/history' element={<History/>}/>
                <Route path={'category'} element={<Category/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

export default App;