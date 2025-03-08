import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authActions'; // ✅ Correct import

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser({ username: 'testUser' })); // ✅ Correct function call
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
