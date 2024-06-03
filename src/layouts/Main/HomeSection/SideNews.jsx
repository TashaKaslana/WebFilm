import React, {useState} from 'react';
import {Tabs, Card, Button, Space} from 'antd';
import {LikeOutlined, EyeOutlined} from '@ant-design/icons'
import img from '/src/assets/img/112186074_p0_master1200.jpg';

const FlexLayout = () => (
    <div className={'flex gap-10 justify-center'}>
        <div className={'container flex justify-end'}>
            <div className={'hover:bg-gray-100'}>
                <img src={'src/assets/img/kung-fu-panda-4-gau-truc-po-vat-va-tim-nguoi-ke-nghiep-6_1710236694045.jpg'} alt="" className={'h-96'}/>
                <h1 className={'font-bold'}>[Review] Kung Fu Panda 4: Gấu Trúc Po "Vật Vã" Tìm Người Kế Nghiệp!</h1>
                <div className={'flex gap-3'}>
                    <Button>
                        <Space><LikeOutlined/>Like</Space>
                    </Button>
                    <Space>
                        <EyeOutlined /> 999
                    </Space>
                </div>
            </div>
        </div>
        <div className={'container flex flex-col gap-5 justify-center *:gap-2'}>
            <div className={'flex hover:bg-gray-100'}>
                <img src={'src/assets/img/750_1708503841673.jpg'} alt="" className={'h-24'}/>
                <div>
                    <h1 className={'font-medium'}>[Preview] Godzilla x Kong: Phản Diện Mới Còn Mạnh Hơn Godzilla?</h1>
                    <Space>
                        <div className={'flex gap-3'}>
                            <Button>
                                <Space><LikeOutlined/>Like</Space>
                            </Button>
                            <Space size='medium'>
                                <EyeOutlined/> 999
                            </Space>
                        </div>
                    </Space>
                </div>
            </div>
            <div className={'flex hover:bg-gray-100'}>
                <img src={'src/assets/img/download.jpeg'} alt="" className={'h-24'}/>
                <div>
                    <h1 className={'font-medium'}>Homelander - Siêu Nhân bản lỗi hay ác nhân hoàn hảo của nước Mỹ?</h1>
                    <Space>
                        <div className={'flex gap-3'}>
                            <Button>
                                <Space><LikeOutlined/>Like</Space>
                            </Button>
                            <Space size='medium'>
                                <EyeOutlined/> 999
                            </Space>
                        </div>
                    </Space>
                </div>
            </div>
            <div className={'flex hover:bg-gray-100'}>
                <img src={'src/assets/img/3_190.jpg'} alt="" className={'h-24'}/>
                <div>
                    <h1 className={'font-medium'}>[Review] Kong: Vũ Trụ Quái Vật Khởi Nguồn Từ Việt Nam?</h1>
                    <Space>
                        <div className={'flex gap-3'}>
                            <Button>
                                <Space><LikeOutlined/>Like</Space>
                            </Button>
                            <Space size='medium'>
                                <EyeOutlined/> 999
                            </Space>
                        </div>
                    </Space>
                </div>
            </div>
        </div>
    </div>
);

const SideNews = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const items = [
        {label: 'Tin mới nhất', key: '1', children: <FlexLayout/>},
        {label: 'Tin nổi bật', key: '2', children: <FlexLayout/>},
    ];

    const onChange = (key) => {
        setCurrentTab(key);
    };

    return (
        <Card>
            <Tabs activeKey={currentTab} items={items} onChange={onChange}/>
        </Card>
    );
};

export default SideNews;
