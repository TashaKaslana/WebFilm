import {getCurrentUser} from "../../../utils/useLocalStorage.jsx";
import {Avatar, Card, Space, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import img2 from "../../../assets/img/30fa9ef5364248fe386f0d8ff83363d0.gif";
const { Title, Text, Paragraph } = Typography;

const AccountDisplay = () => {
    const currentUser = getCurrentUser()

    return (
        <div>
            <Card title={'Thông tin tài khoản'} className={'bg-amber-50'}>
                <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                    <div className="flex items-center">
                        <Avatar size={64} icon={<UserOutlined />} />
                        <div className="ml-4">
                            <Title level={5}>{currentUser.userName}</Title>
                            <Text type="secondary">{currentUser.email}</Text>
                        </div>
                    </div>

                    <div>
                        <Paragraph>
                            <Text strong>CẢM ƠN BẠN</Text><br/>
                            Chúng tôi đã thêm bạn vào danh sách nhận tin của chúng tôi.<br/>
                            Bạn sẽ là một trong những người đầu tiên nhận được tất cả các ưu đãi đặc biệt, cập nhật mới nhất và thông báo từ chúng tôi.
                            Chúng tôi sẽ cố gắng hết sức để không làm phiền bạn với những email tiếp thị!<br/>
                            Như một lời cảm ơn thêm, hãy nhấn vào nút dưới đây hoặc sử dụng mã <Text strong>[First123]</Text>  để nhận 30% giảm giá cho lần mua hàng tiếp theo của bạn.
                        </Paragraph>
                        <img src={img2} alt={'gif'} className={'size-1/2'}/>
                    </div>
                </Space>
            </Card>
        </div>
    )
}

const AccountSection = () => {
    return <AccountDisplay />
}

export default AccountSection;
