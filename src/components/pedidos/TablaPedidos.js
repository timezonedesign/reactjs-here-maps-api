import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/IndexHeader';
import ListaPedidos from './ListaPedidos';

class Pedidos extends Component {
    render() {
        return (
            <div>
                <Header 
                    titulo = 'Lista de Pedidos'
                />
                <div className="col-12 col-md-12">
                    <ListaPedidos/>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <Link to={`/pedidos/alta-pedido`} className="btn btn-success">Nuevo Pedido</Link>

                        <Link to={`/pedido/estados`} className="btn btn-warning" style={{marginLeft: '20px'}}>Nuevo Estado</Link> 
                    </div>          
                </div>
            </div>
        );
    }
}

export default Pedidos;