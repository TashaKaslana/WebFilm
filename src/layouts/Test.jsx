import {useLocalStorage} from "../utils/useLocalStorage.jsx";
import {Button, Card, Col, Collapse, DatePicker, Divider, Form, Image, Layout, Popover, Row} from "antd";
import PropTypes from "prop-types";
import React from "react";
import {DownCircleTwoTone, UpCircleTwoTone} from "@ant-design/icons"
const { Content } = Layout;


function ListButton({ content, size, type, secondTypeValue, styleCss, handleButtonClick}) {
    return (
        <ul className={`grid grid-cols-4 gap-3 text-center transition-transform duration-700`}>
            {content.map((currentText, currentIndex) => (
                <li key={currentIndex}>
                    <Button
                        size={size}
                        onClick={() => {
                            if (secondTypeValue) {
                                handleButtonClick(secondTypeValue.type, secondTypeValue.value);
                            }
                            handleButtonClick(type, currentText)
                        }}
                        className={styleCss ? styleCss : ""}
                    >
                        {currentText}
                    </Button>
                </li>
            ))}
        </ul>
    );
}

ListButton.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.string,
    type: PropTypes.string.isRequired,
    secondTypeValue: PropTypes.object,
    styleCss: PropTypes.string,
    handleButtonClick: PropTypes.func.isRequired,
};

function CinemaSection({ name, times, handleButtonClick }) {
    return (
        <div>
            <h2>{name}</h2>
            <ListButton
                content={times}
                size="large"
                type="time"
                secondTypeValue={{ type: 'agency', value: name }}
                styleCss={'w-60'}
                handleButtonClick={handleButtonClick}
            />
            <Divider dashed />
        </div>
    );
}

CinemaSection.propTypes = {
    name: PropTypes.string.isRequired,
    times: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleButtonClick: PropTypes.func.isRequired,
};

function ChooseTicket() {
    const imgContent = [
        "src/assets/img/112186074_p0_master1200.jpg",
        "src/assets/img/112186074_p0_master1200.jpg",
        "src/assets/img/112186074_p0_master1200.jpg",
        "src/assets/img/112186074_p0_master1200.jpg",
        "src/assets/img/112186074_p0_master1200.jpg",
        "src/assets/img/112186074_p0_master1200.jpg",
        "src/assets/img/112186074_p0_master1200.jpg",
        "src/assets/img/112186074_p0_master1200.jpg",
    ];

    const content = ["1", "2", "3", "4", "5", "6", "7", "8"];
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

    const [bills, setBills] = useLocalStorage("bills", {
        location: "",
        film: "",
        date: "",
        agency: {}, // Agency should be an object
        time: "",
        seat: "",
        foods: "",
        price: 0,
    });

    const handleButtonClick = (type, value, agencyValue = null) => { // Optional agencyValue argument
        if (type === "agency") {
            setBills((prevBills) => ({
                ...prevBills,
                agency: agencyValue, // Set agency directly
            }));
        } else {
            setBills((prevBills) => ({...prevBills, [type]: value}));
        }
    }

    const panelItems = [
        {
            key: "1",
            label: "Chọn vị trí",
            children: (
                <ListButton
                    content={location}
                    size="large"
                    type="location"
                    styleCss={'w-60'}
                    handleButtonClick={handleButtonClick}
                />
            ),
            style: {
                marginBottom: 50,
                background: 'white',
                borderRadius: '10px',
            },
        },
        {
            key: "2",
            label: "Chọn phim",
            children: (
                <Row gutter={[24, 24]}>
                    {imgContent.map((image, index) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            <Popover
                                content={
                                    <div className={'w-64'}>
                                        <Card.Meta
                                            title={`Phim ${content[index]}`}
                                            description={
                                                <Button
                                                    type="primary"
                                                    block
                                                    onClick={() =>
                                                        handleButtonClick("film", content[index])
                                                    }
                                                >
                                                    Chọn phim
                                                </Button>
                                            }
                                        />
                                    </div>
                                }
                                placement="bottom"
                            >
                                <Image src={image} alt={`Phim ${content[index]}`} width={250} />
                            </Popover>
                        </Col>
                    ))}
                </Row>
            ),
            style: {
                marginBottom: 50,
                background: 'white',
                borderRadius: '10px',
            },
        },
        {
            key: "3",
            label: "Chọn suất",
            children: (
                <div>
                    <Form.Item label="Ngày chiếu">
                        <DatePicker
                            onChange={(date) =>
                                handleButtonClick(
                                    "date",
                                    date.format("YYYY-MM-DD")
                                )
                            }
                        />
                    </Form.Item>
                    <div className="my-4 border-t border-dashed"></div>

                    <CinemaSection
                        name="Galaxy Quang Trung"
                        times={["18:00", "19:00", "20:00", "20:30"]}
                        handleButtonClick={handleButtonClick}
                    />
                    <CinemaSection
                        name="Galaxy Hùng Vương"
                        times={["14:00", "16:00"]}
                        handleButtonClick={handleButtonClick}
                    />
                    <CinemaSection
                        name="Galaxy Trần Quốc Toản"
                        times={["9:00", "12:00", "15:30"]}
                        handleButtonClick={handleButtonClick}
                    />
                </div>
            ),
            style: {
                marginBottom: 50,
                background: 'white',
                borderRadius: '10px',
            },
        },
    ];

    return (
        <Content className="p-3">
            <Collapse
                items={panelItems}
                expandIcon={({ isActive }) =>
                    isActive ? <DownCircleTwoTone /> : <UpCircleTwoTone />
                }
                expandIconPosition="end"
                bordered={false}
            />
        </Content>
    );
}



export default function Test() {
    return <ChooseTicket></ChooseTicket>
}