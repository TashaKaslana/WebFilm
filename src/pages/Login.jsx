import React, { useState } from 'react';
import { Form, Input, Button, Card, Alert } from 'antd';
import img from '/src/assets/img/1000_F_547600797_xINrHJDKwNF2drYX8PUoEcAeNgx11MzZ.jpg';
import {loginValidation} from "../utils/loginValidation.jsx";
import {setCurrentUser} from "../utils/useLocalStorage.jsx";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [form] = Form.useForm();
    const [loginStatus, setLoginStatus] = useState(null);

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            const loginSuccess = loginValidation(values);
            if (loginSuccess) {
                setCurrentUser(values.email);
                setLoginStatus('success');
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            } else {
                setLoginStatus('error');
            }
        } catch (error) {
            console.log('Validation failed:', error);
        }
    };

    return (
        <div className="flex bg-amber-50 items-center justify-center h-screen">
            <img src={img} alt="background" className="w-2/3 h-screen" />
            <Card className="w-1/3 m-3">
                <h2 className="text-blue-500 text-center mb-4">Chào mừng quý khách trở lại!</h2>

                {loginStatus === 'error' && (
                    <Alert message="Đăng nhập thất bại" type="error" showIcon />
                )}
                {loginStatus === 'success' && (
                    <Alert message="Đăng nhập thành công" type="success" showIcon />
                )}

                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Email:"
                        name="email"
                        rules={[
                            { required: true, message: 'Vui lòng nhập email của bạn!' },
                            { type: 'email', message: 'Email không hợp lệ!' }
                        ]}
                    >
                        <Input onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Password:"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                    >
                        <Input.Password onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
                <p className="text-center mt-4">
                    Bạn chưa có tài khoản?{' '}
                    <a className="text-cyan-500 hover:text-cyan-700" href="/Register">
                        Tạo tài khoản
                    </a>
                </p>
            </Card>
        </div>
    );
}

export default Login;
