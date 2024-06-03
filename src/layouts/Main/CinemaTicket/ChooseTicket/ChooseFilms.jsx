import {Button, Card, Col, Image, Popover, Row} from "antd";
import PropTypes from "prop-types";
import {useContext} from "react";
import {UserData} from "../CinemaTicket.jsx";

const imgContent = [
    "src/assets/img/MV5BZjlmYWUwYzMtNjA4NS00MTRiLTlhMjctZDQ2YjNmZjA1M2MzXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    "src/assets/img/PokeMovie21.jpg",
    "src/assets/img/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "src/assets/lamnhom/fate_stay_night_heaven_s_feel_ii_lost_butterfly_5719.webp",
    "src/assets/img/ĐRM_đao_giau_vang.jpg",
    "src/assets/img/Doraemon_Vien_bao_tang_bao_boi.jpg.webp",
    "src/assets/lamnhom/112957.jpg",
    "src/assets/img/MV5BNWIwNjI2ZDMtNTJmNy00YTkxLTg0MmUtMTMyMmZmNDYzMmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
];

const filmsContent = ["Your Name", "Pokemon", "DragonBall", "Fate stay night heaven", "Doraemon: Đảo Giấu Vàng",
    "Doraemon: Viện Bảo tàng bảo bối", "Fate stay night", "Gintama"];

const LowerImg = (props) => {
    const {handleChangeData, setCurrentImg}  = useContext(UserData);

    return (
        <Card.Meta
            title={
                <h1 className={'font-bold'}>{props.title}</h1>
            }
            description={
                <Button type={'primary'} block onClick={() => {
                    handleChangeData('film', props.title);
                    setCurrentImg(props.path);
                }}>
                    Đặt vé ngay
                </Button>
            }
            className={'w-40'}
        />
    )
}


LowerImg.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
}

const ChooseFilms = () => {
    return (
        <Row gutter={[24, 24]}>
            {imgContent.map((img, index) => (
                <Col xs={12} sm={12} md={6} lg={6} key={index}>
                    <Popover content={<LowerImg title={filmsContent[index]} path={img}/>}
                             key={index} placement={"bottom"}
                    >
                        <Image src={img} alt={filmsContent[index]} className={'size-1/6'}></Image>
                    </Popover>
                </Col>
            ))}
        </Row>
    )
}

export default ChooseFilms;