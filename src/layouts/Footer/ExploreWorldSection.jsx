import React from 'react';
import {Row, Col, Typography, Image, Input, Button, Form, Space} from 'antd';
import {MailOutlined} from '@ant-design/icons';

function ExploreWorldSection() {
    const exploreCategories = [
        {
            title: "Tìm hiểu hơn về chúng tôi",
            links: ["Facebook", "TikTok", "Instagram", "Youtube"]
        },
        {
            title: "Thông tin về nhiều movie mới",
            links: ["Hoạt hình", "Trinh thám", "Kinh dị", "Hành động"]
        },
        {
            title: "Đăng ký ngay",
            links: ["Tham gia hội viên", "Quyền lợi của hội viên", "Hợp đồng hội viên", "Diễn đàn"]
        }
    ];

    const imageUrls = [
        "https://mdbootstrap.com/img/new/standard/city/091.webp",
        "https://mdbootstrap.com/img/new/standard/city/084.webp",
        "https://mdbootstrap.com/img/new/standard/city/086.webp",
        "https://mdbootstrap.com/img/new/standard/city/074.webp",
    ];

    return (
        <div className="mx-6 pt-8 pb-4 text-center">
            <Typography.Title level={5} className="mb-2 font-bold uppercase">KHÁM PHÁ THẾ GIỚI CỦA CHÚNG TÔI</Typography.Title>
            <Typography.Paragraph className="mb-4">
                Bắt tay vào một cuộc phiêu lưu của cuộc đời và khám phá những điều kỳ diệu ẩn giấu. Cuộc hành trình của bạn bắt đầu ngay bây giờ!
            </Typography.Paragraph>

            <Row gutter={[16, 16]} className="mb-4">
                {exploreCategories.map((category, index) => (
                    <Col key={index} xs={24} md={8}>
                        <Typography.Title level={5}
                                          className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
                            {category.title}
                        </Typography.Title>
                        <ul className="list-none p-0">
                            {category.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href="#"
                                       className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                ))}
            </Row>

            {/* Dang ky mail */}
            <div className="relative mb-7">
                <Form>
                    <Row justify="center" align="middle" className="mb-6">
                        <Col span={24}>
                            <Space direction="vertical" size="middle" style={{width: '100%'}}>
                                <Typography.Text strong>Đăng ký nhận bản tin của chúng tôi</Typography.Text>
                                <Input.Group compact>
                                    <Input
                                        placeholder="Your email address"
                                        prefix={<MailOutlined/>}
                                        className="dark:bg-neutral-700 w-1/2"
                                    />
                                    <Button type="primary" htmlType="submit">
                                        Subscribe
                                    </Button>
                                </Input.Group>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </div>

            {/* Ảnh trên dòng này*/}
            <Row gutter={[16, 16]}>
                {imageUrls.map((url, index) => (
                    <Col
                        key={index}
                        xs={24}
                        sm={12}
                        md={6}
                        span={6}
                        className={`${index > 2 ? 'hidden sm:block' : ''}`}
                    >
                        <Image
                            src={url}
                            alt={`Image ${index + 1}`}
                            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ExploreWorldSection;
