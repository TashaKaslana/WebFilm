import {Button, Col, DatePicker, Form, Row} from "antd";
import PropTypes from "prop-types";
import {useContext, useState} from "react";
import {UserData} from "../CinemaTicket.jsx";

const CinemaSection = ({cinema, times, className}) => {
    const {handleChangeDataMulti} = useContext(UserData)

    return (
        <div className={className}>
            <h1 className={'font-bold'}>{cinema}</h1>
            <Row gutter={20}>
                {times.map((time, index) => (
                    <Col span={6} key={index}>
                        <Button onClick={() => {
                            handleChangeDataMulti({
                                time: time,
                                agency: cinema,
                            })
                        }}>
                            {time}
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

CinemaSection.propTypes = {
    cinema: PropTypes.string,
    times: PropTypes.array,
    className: PropTypes.string,
}

const ChooseDate = () => {
    const {handleChangeData} = useContext(UserData)

    return (
        <>
            <Form.Item label={'Ngày chiếu'}>
                <DatePicker onChange={
                    (date) => handleChangeData('date', date.format("YYYY-MM-DD"))
                }></DatePicker>
            </Form.Item>
            <CinemaSection cinema={'Galaxy Quang Trung'}
                           times={["18:00", "19:00", "20:00", "20:30"]}
                           className={'py-4'}
            />

            <CinemaSection cinema={'Galaxy Hùng Vương'}
                           times={["14:00", "16:00"]}
                           className={'py-4'}
            />

            <CinemaSection cinema={'Galaxy Trần Quốc Toản'}
                           times={["9:00", "12:00", "15:30"]}
                           className={'py-4'}
            />
        </>
    )
}

export default ChooseDate