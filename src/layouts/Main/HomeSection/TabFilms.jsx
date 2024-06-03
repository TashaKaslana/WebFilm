import React, {useState} from 'react';
import {Tabs, Image, Card} from 'antd';
import img from '/src/assets/img/112186074_p0_master1200.jpg';

const filmsData = {
    present: {
        imgs: [
            'src/assets/lamnhom/MV5BMmI1ZmZkNmMtNTkxNi00NTZjLWFjMzYtZGQzMzY1YTViMWU1XkEyXkFqcGdeQXVyNzEyMDQ1MDA@._V1_.jpg',
            'src/assets/img/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            'src/assets/img/MV5BNWIwNjI2ZDMtNTJmNy00YTkxLTg0MmUtMTMyMmZmNDYzMmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
            'src/assets/lamnhom/Fate-Grand-Order-Shinsei-Entaku-Ryoiki-Camelot-Wandering-Agateram-Visual-002-20191006-1.webp',
            'src/assets/lamnhom/112957.jpg',
            'src/assets/img/MV5BZjlmYWUwYzMtNjA4NS00MTRiLTlhMjctZDQ2YjNmZjA1M2MzXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
            'src/assets/img/ĐRM_đao_giau_vang.jpg',
            'src/assets/img/PokeMovie21.jpg',
        ],
        title: ['Fate Grand Order', 'Dragon Ball Super - Broly', 'Gintama Final', 'Fate/Grand Order: Camelot 2',
            'Fate Stay Night', 'Your Name', 'Doramon: Đảo Kho Báu', 'Pokemon: Cuộc thám hiểm vô tận'],
    },
    future: {
        imgs: [
            'src/assets/lamnhom/112957.jpg',
            'src/assets/img/MV5BZjlmYWUwYzMtNjA4NS00MTRiLTlhMjctZDQ2YjNmZjA1M2MzXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
            'src/assets/img/ĐRM_đao_giau_vang.jpg',
            'src/assets/img/PokeMovie21.jpg',
            'src/assets/lamnhom/MV5BMmI1ZmZkNmMtNTkxNi00NTZjLWFjMzYtZGQzMzY1YTViMWU1XkEyXkFqcGdeQXVyNzEyMDQ1MDA@._V1_.jpg',
            'src/assets/img/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            'src/assets/img/MV5BNWIwNjI2ZDMtNTJmNy00YTkxLTg0MmUtMTMyMmZmNDYzMmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
            'src/assets/lamnhom/Fate-Grand-Order-Shinsei-Entaku-Ryoiki-Camelot-Wandering-Agateram-Visual-002-20191006-1.webp',

        ],
        title: ['Fate Stay Night', 'Your Name', 'Doramon: Đảo Kho Báu', 'Pokemon: Cuộc thám hiểm vô tận',
            'Fate Grand Order', 'Dragon Ball Super - Broly', 'Gintama Final', 'Fate/Grand Order: Camelot 2']

    },
};


const FilmContainer = ({films}) => (
    <div className="p-3">
        <div className="grid grid-cols-4 gap-4">
            {films.imgs.map((item, index) => (
                <Card
                    key={index}
                    hoverable
                    cover={
                        <Image
                            src={item}
                            alt={`Phim ${films.title[index]}`}
                            className="rounded-xl w-72 h-96 object-cover"
                        />
                    }
                >
                    <Card.Meta title={films.title[index]}/>
                </Card>
            ))}
        </div>
    </div>
);

const items = [
    {
        key: '1',
        label: 'Đang chiếu',
        children: (
            <FilmContainer films={filmsData.present}/>
        ),
    },
    {
        key: '2',
        label: 'Sắp chiếu',
        children: (
            <FilmContainer films={filmsData.future}/>
        ),
    },
];

const TabFilms = () => {
    return (
        <div className="p-3">
            <h1>Danh sách phim</h1>
            <Tabs defaultActiveKey="1" items={items}/>
        </div>
    );
};

export default TabFilms;
