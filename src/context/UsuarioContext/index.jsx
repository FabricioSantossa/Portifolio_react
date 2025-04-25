import React, { createContext, useEffect, useState } from 'react';

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
    const [usuarioLogado, setUsuarioLogado] = useState(false);

    const handleLogin = () => {
        setUsuarioLogado(prev => true);
        sessionStorage.setItem('usuarioLogado', true);
    };
    
    const handleLogout = () => {
        setUsuarioLogado(prev => false);
        sessionStorage.removeItem('usuarioLogado');
        sessionStorage.removeItem('idusuario');
        sessionStorage.removeItem('userInfo');
    };

    useEffect(() => {
        const usuarioLogado = sessionStorage.getItem('usuarioLogado');
        if (usuarioLogado) {
            setUsuarioLogado(true);
        }
    }, []);
    

    return (
        <UsuarioContext.Provider value={{ usuarioLogado, handleLogin, handleLogout }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioContext, UsuarioProvider };