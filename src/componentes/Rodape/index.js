import React from 'react';
import './style.css';

export default function Rodape() {
    return (
        <footer>
            <div className='limitar-secao container-contact'>
                <img src="assets/logo.png" alt="logo" />
                <div className='box-info'>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className='box-info'>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className='box-info'>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className='final'>
                <p>Gelateria. Orgulhosamente desenvolvido por Johnny Santos</p>
            </div>
        </footer>
    );
};