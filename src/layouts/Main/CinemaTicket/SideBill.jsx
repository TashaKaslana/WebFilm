import {Card, Layout, Image, Button, Typography, message, Flex} from "antd";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import placeholderIMG from "/src/assets/imgs/placeholder-image.png";
import {useContext} from "react";
import {UserData} from "./CinemaTicket.jsx";

const {Title, Text} = Typography;

function SideBill({activeTab, setActiveTab, bill}) {
    const {currentImg} = useContext(UserData);
    const navigate = useNavigate();

    const handlePrevClick = () => {
        if (activeTab > 1) {
            setActiveTab((prevTab) => (parseInt(prevTab) - 1).toString());
        }
    };

    const handleNextClick = () => {
        if (activeTab < 5) {
            setActiveTab((prevTab) => (parseInt(prevTab) + 1).toString());
        } else {
            message.info('Bạn đang ở bước cuối cùng!');
            message.info('Chuyển tiếp tới trang chính trong 5s');
            setTimeout(() => navigate('/'), 5000)
        }
    };

    return (
        <Layout className="bg-amber-50 p-2">
            <Card
                className=" m-1 rounded-xl"
                cover={
                    bill && (
                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={currentImg ? currentImg : placeholderIMG}
                                alt="Movie Poster"
                                width={150}
                                className="rounded-xl"
                            />
                            <Title level={4} className="mt-2">
                                {bill.film}
                            </Title>
                        </div>
                    )
                }
            >
                {bill && (
                    <div className="p-2">
                        {(bill.location || bill.agency) && (
                            <p className="font-bold">Galaxy {bill.location} - {bill.agency}</p>
                        )}
                        {(bill.agency || bill.date) && (
                            <p className="font-bold mb-0">Suất {bill.time} - {bill.date}</p>
                        )}
                        <br />
                        {bill.seat && (
                            <p>Ghế {bill.seat}</p>
                        )}
                        {bill.foods.length > 0 ? (
                            <p>Đồ ăn:{" "} {bill.foods.map((food, index) => (
                                    <span key={index}>x{food.quantity} {food.name}{index < bill.foods.length - 1 && ", "}</span>
                                ))}
                            </p>) : ("")}
                        {bill.price > 0 ? ( <p>Tổng cộng: {bill.price} VND</p>) : ('')}
                    </div>
                )}

            </Card>

            <Flex className="justify-between mt-4 gap-2">
                <Button type="default" className="w-44" onClick={handlePrevClick}>
                    Quay lại
                </Button>
                <Button type="primary" className="w-44" onClick={handleNextClick}>
                    Tiếp tục
                </Button>
            </Flex>
        </Layout>
    );
}

SideBill.propTypes = {
    activeTab: PropTypes.string,
    setActiveTab: PropTypes.func,
    bill: PropTypes.shape({
        location: PropTypes.string,
        agency: PropTypes.string,
        date: PropTypes.string,
        film: PropTypes.string,
        foods: PropTypes.array,
        seat: PropTypes.string,
        time: PropTypes.string,
        price: PropTypes.number,
    }),
    img: PropTypes.string,
};

export default SideBill;
