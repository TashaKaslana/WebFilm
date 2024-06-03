import React, {useState} from 'react';
import {Button, Dropdown, Space} from 'antd';
import {
    DownOutlined,
    UserOutlined,
    HistoryOutlined,
    LogoutOutlined,
    LoginOutlined,
    GiftOutlined,
    StarOutlined
} from '@ant-design/icons';
import {getCurrentUser, setCurrentUser} from "/src/utils/useLocalStorage.jsx";
import PropTypes from "prop-types";

function LoginButton() {
    return (
        <Button className="w-32 h-12 flex items-center" href="/login">
            {/* Replace with your login icon */}
            <span className="ml-2"><Space><LoginOutlined />Đăng nhập</Space></span>
        </Button>
    );
}

function UserInformation({userName, setUser}) {
    const logOut = () => {
        setCurrentUser(null);
        setUser(null);
        console.log('Logged Out!');
    };

    const menuItems = [
        {
            key: '1',
            label:
                <a href="/account"><Space><UserOutlined />Tài khoản</Space></a>
        },
        {
            key: '2',
            label: <a href="/history"><Space><HistoryOutlined />Lịch sử</Space></a>
        },
        {
            key: '3',
            label: <a onClick={logOut}><Space><LogoutOutlined />Đăng xuất</Space></a>
        }
    ];


    return (
        <div className="flex items-center relative">
            <Space>
                {/* Replace with your user icon */}
                <Dropdown menu={{items: menuItems}} trigger={['hover']}>
                    <a className="ant-dropdown-link flex items-center" onClick={e => e.preventDefault()}>
                        <span className="ml-2 text-lg hover:text-blue-500">
                            <UserOutlined/>{userName}<DownOutlined/>
                        </span>
                    </a>
                </Dropdown>
            </Space>
            <div className="flex items-center ml-4">
                <span className="ml-2 text-red-500">
                    <Space><GiftOutlined />99 Stars<StarOutlined /></Space>
                </span>
            </div>
        </div>
    );
}

UserInformation.propTypes = {
    userName: PropTypes.string,
    setUser: PropTypes.func,
}

const UserProfile = () => {
    const [user, setUser] = useState(getCurrentUser());


    return (
        <div className={'flex place-items-center'}>
            {user ? UserInformation({userName: user.userName, setUser}) : <LoginButton/>}
        </div>
    );
};

export default UserProfile;
