import React, {useContext, useState} from "react";
import {Card, Row, Col, Button, Image, Typography} from "antd";
import img from "/src/assets/img/1000_F_547600797_xINrHJDKwNF2drYX8PUoEcAeNgx11MzZ.jpg";
import {UserData} from "../CinemaTicket.jsx";
import PropTypes from "prop-types";

const {Meta} = Card;
const {Text} = Typography;

const ControlQuantity = (props) => {
    const [quantity, setQuantity] = useState(0);

    const {billData, handleChangeDataMulti, handleChangeData} = useContext(UserData);

    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decreaseQuantity = () => quantity > 0 && setQuantity(prevQuantity => prevQuantity - 1);

    const handleClick = (action) => {
        if (action === 'increase') {
            increaseQuantity();
            const foodObject = {name: props.name, quantity: quantity + 1};
            handleChangeDataMulti(
                {
                    foods: foodObject,
                    price: billData.price + props.price,
                }
            );
        } else if (action === 'decrease' && quantity > 0) {
            decreaseQuantity();
            const updatedQuantity = quantity - 1;
            if (updatedQuantity === 0) {
                handleChangeData('foods', []);
            } else {
                const foodObject = {name: props.name, quantity: updatedQuantity};
                handleChangeDataMulti(
                    {
                        foods: foodObject,
                        price: billData.price - props.price,
                    }
                );
            }
        }
    }

    return (
        <div className="flex justify-end">
            <Button.Group>
                <Button onClick={() => handleClick('decrease')} disabled={quantity === 0}>-</Button>
                <Button type="dashed" className="w-12">{quantity}</Button>
                <Button onClick={() => handleClick('increase')}>+</Button>
            </Button.Group>
        </div>
    );
};

ControlQuantity.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
}

const FoodComponent = () => {
    const foods = [
        {
            foodImage: img,
            foodName: "Combo Big Extra LHS",
            description: "1 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack",
            price: 109000
        },
        {
            foodImage: img,
            foodName: "Combo 1 Big LS",
            description: "1 Ly nước ngọt size L + 01 Hộp Bắp",
            price: 89000
        },
        {
            foodImage: img,
            foodName: "Combo 2 Big LS",
            description: "2 Ly nước ngọt size L + 01 Hộp Bắp",
            price: 109000
        },
        {
            foodImage: img,
            foodName: "Fried Chicken",
            description: "Gà Rán",
            price: 36000
        },
        {
            foodImage: img,
            foodName: "Pepsi",
            description: "1 Chai Pepsi",
            price: 12000
        }
    ]

    return (
        <Row gutter={[16, 16]}>
            {foods.map((food) => (
                <Col xs={24} sm={12} md={8} lg={6} key={food.foodName}>
                    <Card
                        hoverable
                        cover={<Image alt={food.foodName} src={food.foodImage}/>}
                    >
                        <Meta
                            title={food.foodName}
                            Description={food.description}
                        />
                        <div className="mt-2 flex justify-between items-center">
                            <Text strong>
                                Giá {food.price} đ
                            </Text><ControlQuantity name={food.foodName} price={food.price}/>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

const Food = () => {
    return (
        <div className="p-2">
            <FoodComponent/>
        </div>
    );
};

export default Food;
