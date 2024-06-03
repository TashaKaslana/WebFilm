import React, { useState } from 'react';
import { Form, Input, Button, Card, Alert } from 'antd';
import background from '../assets/img/wallpaperflare.com_wallpaper.jpg';
import {setCurrentUser, useLocalStorage} from "../utils/useLocalStorage.jsx";

function Register() {
    const [form] = Form.useForm();
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const [storedData, setStoredData] = useLocalStorage('userData', {});

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();

            if (values.password !== values.passwordAgain) {
                setRegistrationStatus('passwordMismatch');
            } else {

                const updatedStoredData = { ...storedData, [values.email]: values, bill: {}};
                setStoredData(updatedStoredData);

                setCurrentUser(values.email);
                setRegistrationStatus('success');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1000);
            }
        } catch (error) {
            console.log('Validation failed:', error);
        }
    };

    return (
        <div className="flex bg-amber-50 items-center justify-center h-screen">
            <img src={background} alt="background" className="w-2/3 h-screen" />
            <Card className="w-1/3 m-3">
                <h2 className="text-blue-500 text-center mb-4">Welcome to my page :))))</h2>

                {registrationStatus === 'success' && (
                    <Alert message="Đăng ký thành công!" type="success" showIcon />
                )}
                {registrationStatus === 'passwordMismatch' && (
                    <Alert message="Mật khẩu không khớp" type="error" showIcon />
                )}

                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="User Name:"
                        name="userName"
                        rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Email:" name="email" rules={[
                        { required: true, message: 'Vui lòng nhập email của bạn!' },
                        { type: 'email', message: 'Email không hợp lệ!' }
                    ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Password:" name="password" rules={[
                        { required: true, message: 'Vui lòng nhập mật khẩu của bạn!' },
                        { min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự!' }
                    ]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label="Password Again:" name="passwordAgain" rules={[
                        { required: true, message: 'Vui lòng nhập lại mật khẩu!' }
                    ]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Register
                        </Button>
                    </Form.Item>
                </Form>

                <p className="text-center mt-4">
                    Bạn đã có tài khoản rồi?{' '}
                    <a className="text-emerald-500 hover:text-emerald-700" href="/login">
                        Đăng nhập
                    </a>
                </p>
            </Card>
        </div>
    );
}

export default Register;
