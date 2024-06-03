import React from 'react';
import img from '/src/assets/react.svg'
import {Dropdown, Row, Space, Col, Button, Flex} from "antd";
import {Card, Tooltip, Popover} from 'antd';
import ListFilms from "./ListFilms.jsx";
import {DownOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Phim = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href={'/category'}>
                Thể loại phim
            </a>
        )
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href={'/category'}>
                Diễn viên
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href={'/category'}>
                Đạo diễn
            </a>
        )
    }
]

const Rap = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer">
                TP. Hồ Chí Minh
            </a>
        )
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer">
                Hà Nội
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer">
                Huế
            </a>
        )
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer">
                Phú Yên
            </a>
        )
    }
]

export default function Nav() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/ticket')
    }

    return (
        <nav className="flex items-center px-4 py-4 ">
            <div className="container mx-auto">
                <Flex justify="space-between" align="middle" gap={100} >
                    <Flex>
                        <Button type={'primary'} onClick={handleNavigate}>Đặt vé ngay</Button>
                    </Flex>
                    <Flex>
                        <ListFilms />
                    </Flex>
                    <Flex>
                        <Dropdown menu={{ items: Phim }} placement={'bottom'}>
                            <a className={'p-1'} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Góc Điện Ảnh <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </Flex>
                    <Flex>
                        <Dropdown menu={{ items: Rap }} placement={'bottom'}>
                            <a className={'p-1'} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Rạp <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </Flex>
                </Flex>
            </div>
        </nav>
    );
}