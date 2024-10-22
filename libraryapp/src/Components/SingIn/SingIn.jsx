import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './SingIn.css'
import React, { useState, useRef } from 'react';
function SignIn() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isErrorUserName, setIsErrorUserName] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [isErrorBoth, setIsErrorBoth] = useState(false);
    const inputUsername = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        setIsErrorUserName(!userName);
        setIsErrorPassword(!password);
        setIsErrorBoth(!userName && !password);

        if (userName && password) {
            console.log('Form submitted:', { userName, password });
           
            setUserName('');
            setPassword('');
        }
    };

    return (
        <>
            <h1 className='title'>INICIA SESIÓN CON NOSOTROS</h1>
            <p className="description">“Descubre mundos entre páginas: ¡Bienvenido a nuestra comunidad literaria!”</p>
            <div className="input-container">
                <form className="form-container" onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name='userName' 
                        placeholder='Nombre' 
                        value={userName}
                        className={`form-control ${isErrorUserName ? 'error' : ''}`}
                        onChange={(event) => setUserName(event.target.value)}
                        ref={inputUsername}
                        autoFocus
                    />
                    {isErrorUserName && <label style={{ color: 'red' }}>Ingrese el nombre de usuario</label>}
                    
                    <input 
                        type="password" 
                        placeholder='Contraseña' 
                        value={password}
                        className={`form-control ${isErrorPassword ? 'error' : ''}`}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isErrorPassword && <label style={{ color: 'red' }}>Ingrese la contraseña</label>}
                    
                    {isErrorBoth && <label style={{ color: 'red' }}>Faltó llenar los campos</label>}

                    <button type='submit'>INICIAR</button>
                </form>
            </div>
        </>
    );
}

export default SignIn;