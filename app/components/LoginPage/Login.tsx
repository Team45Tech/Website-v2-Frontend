// Home components

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './login.css'


const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
    };

    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/register');
    };

    return (
        <div className='Login'>
            <div className="login-container">
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="submit-group">
                        <button type="submit">Login</button>
                        <button onClick={handleButtonClick}>Sign Up</button>;
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
