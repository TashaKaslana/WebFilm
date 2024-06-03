import {Card, Space} from "antd";
import {GiftOutlined, CheckCircleOutlined, CalendarOutlined } from "@ant-design/icons";

const ConfirmationPage = () => {
    const date = new Date();

    return (
        <div className={'bg-amber-50 p-2 w-full'}>
            <Card
                title={
                    <h1 className={'font-bold'}>Cảm ơn bạn đã dụng sử trang web này!</h1>
                }
                className={'text-center bg-white h-full'}
            >
                <GiftOutlined className={'text-8xl text-blue-400'}/>
                <h1>
                    <Space>
                        <CheckCircleOutlined className={'text-cyan-500'}/>Bạn đã thanh toán thành công!
                    </Space>
                </h1>

                <h1>
                    <Space>
                        <CalendarOutlined className={'text-amber-600'}/>Vào lúc {date.toUTCString()}
                    </Space>
                </h1>
            </Card>
        </div>
    )
}

const Confirmation = () => {
    return (
        <ConfirmationPage></ConfirmationPage>
    )
}

export default Confirmation;