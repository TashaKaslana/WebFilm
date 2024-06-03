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
            <Home/>
            <Routes>
                <Route path="/WebFilm/" element={<Home/>} />
                <Route path="/WebFilm/login" element={<Login/>}/>
                <Route path='/WebFilm/register' element={<Register/>}/>
                <Route path='/WebFilm/ticket' element={<Ticket/>}/>
                <Route path='/WebFilm/account' element={<Account/>}/>
                <Route path='/WebFilm/history' element={<History/>}/>
                <Route path='/WebFilm/category' element={<Category/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

export default App;
