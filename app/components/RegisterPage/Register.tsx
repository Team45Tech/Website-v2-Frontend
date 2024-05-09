import React from 'react';
import axios from 'axios';
import './register.css'

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault(); // 防止表单自动提交

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // API 请求注册用户
        axios.post('https://api.example.com/register', {
            username,
            email,
            password
        })
        .then(response => {
            console.log('Registration successful', response);
            // 可以在这里处理一些成功注册后的逻辑，比如跳转到登录页面
        })
        .catch(error => {
            console.error('Error registering', error);
            // 处理错误，可能是显示错误信息给用户
        });
    };

    
export default function RegisterPage() {
    return (
        <div className='Register'>
            <div className="register-container">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirm your password" />
                </div>
                
                <button type="submit">Sign Up</button>
                
            </div>
        </div>
    );
}
