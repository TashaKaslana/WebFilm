import {Alert, Button, Form, Input,notification, Select, Space} from "antd";
import {UserOutlined, BankOutlined, CheckOutlined} from "@ant-design/icons";
import React, {useState} from "react";

const PaymentPage = () => {
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const [payStatus, setPayStatus] = useState(null);
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            message: 'Sai thông tin số tài khoản',
            description:
                'Số tài khoản của bạn phải trên 8 ký tự',
            duration: 0,
        });
    };

    const onFinish = (values) => {
        console.log(values);
        if (values.accountPaymentNumber.length < 8) {
            setPayStatus('error');
            openNotification()
        } else {
            setPayStatus('success')
        }

        console.log(values);
    }
    return (
        <Form
            name={'Payment'}
            autoComplete={'off'}
            className={'w-full p-10'}
            onFinish={onFinish}
        >
            <Form.Item>
                {contextHolder}
                {payStatus === 'error' ? (
                    <Alert message="Thanh toán thất bại!" type="error" showIcon />
                ) : ''}
                {payStatus === 'success' ? (
                    <Alert message="Thanh toán thành công" type="success" showIcon />
                ) : ''}
            </Form.Item>
            <Form.Item>
                <h1>Kênh thanh toán</h1>
            </Form.Item>

            <Form.Item
                label={'Ngân hàng'}
                name={'bank'}
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn ngân hàng!'
                    }
                ]}>
                <Select
                    showSearch
                    placeholder={"Chọn ngân hàng"}
                    options={[
                        {
                            value: 'Sacombank',
                            label: 'Sacombank',
                        },
                        {
                            value: 'BIDV',
                            label: 'BIDV',
                        },
                        {
                            value: 'Techcombank',
                            label: 'Techcombank',
                        },
                        {
                            value: 'Vietcombank',
                            label: 'Vietcombank'
                        },
                        {
                            value: 'Argibank',
                            label: 'Argibank'
                        }
                    ]}
                    filterOption={filterOption}
                />
            </Form.Item>

            <Form.Item
                label={"Tên tài khoản thanh toán"}
                name={"accountPayment"}
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập tên tài khoản thanh toán!'
                    }
                ]}>
                <Input prefix={<UserOutlined/>}></Input>
            </Form.Item>

            <Form.Item
                label={"Số tài khoản thanh toán"}
                name={"accountPaymentNumber"}
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập số tài khoản thanh toán!'
                    }
                ]}
            >
                <Input prefix={<BankOutlined />}></Input>
            </Form.Item>

            <Form.Item className={'flex justify-center'}>
                <Button type={'primary'} htmlType={'submit'}>
                    <Space>
                        <CheckOutlined />Thanh toán
                    </Space>
                </Button>
            </Form.Item>
        </Form>
    )
}

const Payment = () => {
    return (<PaymentPage/>)
}

export default Payment
