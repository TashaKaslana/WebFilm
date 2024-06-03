import React from 'react';
import Slider from "/src/layouts/Main/HomeSection/Slider.jsx"
import TabFilms from "./TabFilms.jsx";
import SideNews from "./SideNews.jsx";

export default function HomeSection() {
    return(
        <main className={''}>
            <Slider></Slider>
            <TabFilms></TabFilms>
            <SideNews></SideNews>
        </main>
    )
}