import React from 'react';
import { Divider, Space, Typography } from 'antd';
import {
    FacebookFilled,
    TwitterSquareFilled,
    YoutubeFilled,
    InstagramFilled,
    LinkedinFilled,
} from '@ant-design/icons';

function FooterSocial() {
    return (
        <Space
            className="flex items-center p-6 dark:border-neutral-500 lg:justify-between"
            split={<Divider type="vertical" className="lg:hidden" />}
        >
            {/* Conditional "Get connected with us:" text */}
            {window.innerWidth >= 1024 && (
                <Typography.Text className="mr-12">Get connected with us:</Typography.Text>
            )}

            <Space className="justify-center">
                <a href="#" className="text-neutral-600 dark:text-neutral-200">
                    <FacebookFilled className="anticon" />
                </a>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">
                    <TwitterSquareFilled className="anticon" />
                </a>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">
                    <YoutubeFilled className="anticon" />
                </a>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">
                    <InstagramFilled className="anticon" />
                </a>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">
                    <LinkedinFilled className="anticon" />
                </a>
            </Space>
        </Space>
    );
}

export default FooterSocial;
