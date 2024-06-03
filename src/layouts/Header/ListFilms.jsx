import React from 'react';
import {Button, Popover} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import img from '/src/assets/react.svg'
import PropTypes from "prop-types";

const ImgHover = ({img, imgTitle}) => {
    return (
        <div className={'relative group border p-2'}>
            <img className={'h-48 w-48 hover:scale-105 transition-transform'} src={img} alt=""/>
            <div className={'absolute bottom-[10%] gap-3 hidden group-hover:flex'}>
                <Button>Đặt mua</Button>
                <Button>Xem thêm</Button>
            </div>
            <h3 className={'text-center mt-3'}>
                {imgTitle}
            </h3>
        </div>
    )
}

ImgHover.propTypes = {
    img: PropTypes.string,
    imgTitle: PropTypes.string,
}

const presentFilms = ['/src/assets/lamnhom/Solomon_Poster.webp',
    'src/assets/img/Doraemon_Vien_bao_tang_bao_boi.jpg.webp',
    'src/assets/img/750_1708503841673.jpg'
];

const presentFilmsTitle = ['Fate', 'Doraemon', 'Gorrila vs King Kong'];

const futureFilms = [
    'src/assets/img/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    'src/assets/img/PokeMovie21.jpg',
    'src/assets/img/kung-fu-panda-4-gau-truc-po-vat-va-tim-nguoi-ke-nghiep-6_1710236694045.jpg'
]

const futureFilmsTitle = ['DragonBall', 'Pokemon', 'Panda 4']

const items = (
    <div>
        <h2 className={'font-medium'}>Phim đang chiếu</h2>
        <ul className={'flex'}>
            {presentFilms.map((img, index) => (
                <li key={index}>
                    <ImgHover img={img} imgTitle={presentFilmsTitle[index]}></ImgHover>
                </li>
            ))
            }
        </ul>

        <h2 className={'font-medium'}>Phim sắp chiếu</h2>
        <ul className={'flex'}>
            {futureFilms.map((img, index) => (
                <li key={index}>
                    <ImgHover img={img} imgTitle={futureFilmsTitle[index]}></ImgHover>
                </li>
            ))
            }
        </ul>
    </div>
)


const FilmContainer = () => {
    return (
        <Popover content={items} title={'Danh sach phim dang hoat dong'} trigger='hover'>
            <a className={'p-1'}>Phim <DownOutlined/></a>
        </Popover>
    );
};

export default function ListFilms() {
    return (
        <FilmContainer></FilmContainer>
    )
}