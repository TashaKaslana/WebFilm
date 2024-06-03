import React from 'react';
import { Typography, Space, Image } from 'antd';

function CopyrightFooter() {
    return (
        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex justify-center items-center">
            <Space>
                <Typography.Text className={'font-bold text-red-500'}>© 2024 Copyright: 39 Cinema</Typography.Text>
            </Space>
        </div>
    );
}

export default CopyrightFooter;
