import {Button, Card, Col, Flex, Row, Space} from "antd";
import {useContext, useState} from "react";
import PropTypes from "prop-types";
import {UserData} from "../CinemaTicket.jsx";

const SeatButton = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClicked = () => {
        if (!isClicked) {
            setIsClicked(true);
            return true;
        } else {
            setIsClicked(false);
            return false;
        }
    }

    const {billData, handleChangeData} = useContext(UserData);

    return (
        <Button
            onClick={() => {
                const currentSeat = billData.seat;
                if(!handleClicked()) {
                    handleChangeData('seat', currentSeat.replaceAll(', ' + props.char + props.seatId, ''))
                } else {
                    handleChangeData('seat', currentSeat + ', ' + props.char + props.seatId );
                }
            }}
            type={isClicked ? "primary" : "default"}
        >
            {props.seatId}
        </Button>
    )
}

SeatButton.propTypes = {
    seatId: PropTypes.string,
    char: PropTypes.string,
    seat: PropTypes.string
}

const LineSeat = (props) => {
    const numberOfSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            <Row gutter={[16, 16]}>
                {numberOfSeats.map((seatNumber, index) => (
                    <Col span={2} key={index}>
                        <SeatButton seatId={seatNumber} char={props.char}></SeatButton>
                    </Col>
                ))
                }
            </Row>
        </>
    )
}

LineSeat.propTypes = {
    seatId: PropTypes.string,
    char: PropTypes.string,
}

const LinePlaceSeat = (props) => {

    return (
        <div className={'my-2'}>
            <Row gutter={[24, 24]}>
                <Col span={5}>
                    <h1>{props.char}</h1>
                </Col>
                <Col span={14}>
                    <LineSeat char={props.char} />
                </Col>
                <Col span={5}>
                    <h1 className={'text-end'}>{props.char}</h1>
                </Col>
            </Row>
        </div>
    )
}

LinePlaceSeat.propTypes = {
    char: PropTypes.string.isRequired,
}

const Seat = () => {
    const sideChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

    return (
        <>
            {
                sideChars.map((char, index) => (
                    <LinePlaceSeat char={char} key={index}/>
                ))
            }
        </>
    )
}


const ChooseSeat = () => {
    return (
        <Card className={'w-full'}>
            <Seat></Seat>
        </Card>
    )
}

export default ChooseSeat;