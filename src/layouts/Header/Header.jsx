import React from 'react';
import Nav from "./Nav.jsx";
import Logo from "./Logo.jsx";
import UserProfile from "./UserProfile.jsx";

export default function Header() {
    return (
        <header className={'flex justify-between px-20 bg-amber-50'}>
            <Logo></Logo>
            <Nav></Nav>
            <UserProfile></UserProfile>
        </header>
    )
}