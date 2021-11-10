import { useState } from "react"
import axios from "axios";
import { WindowsFilled } from "@ant-design/icons";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': 'eed935e9-5dd9-4973-986d-afaabf811ef8',
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            // Funcionó
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Credenciales inválidas');
        }
        
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username"
                        required
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password"
                        required
                    />
                    <div className="align-center">
                        <button type="submit" className="button">
                            <span>Star chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;