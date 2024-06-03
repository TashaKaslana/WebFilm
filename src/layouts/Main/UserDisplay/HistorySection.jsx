import {useState} from "react";
import {getCurrentUser, useLocalStorage} from "../../../utils/useLocalStorage.jsx";
import {Button, Card, Descriptions, Typography} from "antd";

const {Paragraph} = Typography;

const HistoryDisplay = () => {
    const [bill, setBill] = useLocalStorage('bills', '');
    const date = new Date();

    const handleClear = () => {
        setBill(() => ({ // Update localStorage with an empty object
            location: '',
            date: '',
            film: '',
            foods: [],
            seat: '',
            price: 0,
            time: '',
            agency: '',
        }));
    }

    const items = [
        {
            key: '1',
            label: 'Người dùng',
            children: getCurrentUser().userName,
        },
        {
            key: '2',
            label: 'Email',
            children: getCurrentUser().email,
        },
        {
            key: '3',
            label: 'Ngày tạo giao dịch',
            children: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
        },

        {
            key: '4',
            label: 'Địa điểm',
            children: bill.location,
        },
        {
            key: '5',
            label: 'Rạp',
            children: bill.agency,
        },
        {
            key: '6',
            label: 'Suất',
            children: bill.time,
        },
        {
            key: '7',
            label: 'Phim',
            children: bill.film,
            span: 2,
        },
        {
            key: '8',
            label: 'Ghế',
            children: bill.seat
        },
        {
            key: '9',
            label: 'Đồ dùng bổ sung',
            children: bill.foods.map((food, index) => (
                <h1 key={index}>x{food.quantity} {food.name}</h1>
            )),
            span: 2,
        },
        {
            key: '10',
            label: 'Tổng cộng',
            children: bill.price,
        }
    ]

    return (
        <Card>
            <Descriptions items={items} title={'Lịch sử giao dịch'} bordered/>
            <div className={'flex justify-center p-2'}>
                <Button type={"primary"} onClick={handleClear}>Xoá lịch sử</Button>
            </div>
        </Card>
    )
}


const ThankMessage = () => {
    return (
        <Paragraph className="text-center text-yellow-700 border-b">
            {getCurrentUser().userName}, cảm ơn bạn đã đặt hàng và là một khách hàng thân thiết của chúng tôi!<br/>
            Chúng tôi thực sự cảm kích sự ủng hộ của bạn và cam kết mang đến cho bạn trải nghiệm tốt nhất có thể.
            Chúng tôi biết bạn có nhiều sự lựa chọn, vì vậy chúng tôi đặc biệt biết ơn vì bạn đã tin tưởng chúng tôi.<br/>
            Chúng tôi rất mong chờ được thấy bạn sử dụng dịch vụ của chúng tôi như thế nào trong cuộc sống của mình.
        </Paragraph>
    )

}


const HistorySection = () => {
    return (
        <>
            <HistoryDisplay/>
            <ThankMessage/>
        </>
    )
}

export default HistorySection