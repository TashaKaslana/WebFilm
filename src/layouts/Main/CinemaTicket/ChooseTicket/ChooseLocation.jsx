import {Button, Col, Row} from "antd";
import {useContext} from "react";
import { UserData } from '../CinemaTicket.jsx';

const ChooseLocation = (props) => {
    const {handleChangeData} = useContext(UserData)
    const location = [
        "TP.Hồ Chí Minh",
        "Hà Nội",
        "Đà Nẵng",
        "Huế",
        "Nha Trang",
        "Phú Yên",
        "Cần Thơ",
        "Bình Định",
    ];

    return (
        <Row gutter={[24, 24]}>
            {location.map((currentLocation, index) => (
                <Col span={6} key={index}>
                    <Button className={'w-32'} onClick={() => handleChangeData('location', currentLocation)}>
                        {currentLocation}
                    </Button>
                </Col>
            ))}
        </Row>
    )
}

export default ChooseLocation