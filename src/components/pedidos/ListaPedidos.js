import React, { Component } from 'react';
import Pedido from './Pedido';

//Redux

import { connect } from 'react-redux';
import { mostrarPedidos } from '../../actions/pedidosAction';

class ListadoPedidos extends Component {

    componentDidMount(){
        this.props.mostrarPedidos();
    }

    mostrarPedidos = () => {
        const pedidos = this.props.pedidos;

        if(pedidos.length === 0) return null

        return (
            <React.Fragment>
                {pedidos.map(pedido => (

                    // console.log(pedido)
                    <Pedido
                        key = {pedido.id}
                        info = {pedido}
                        // borrarEmpleado = {this.props.borrarEmpleado}
                    />

                ))}
                
            </React.Fragment>
        )
    }

    render() {
        return (
            <table style={{marginTop: '10px'}} className="table">
                <thead>
                    <tr>
                        <th style={{textAlign: 'center'}} scope="col">Fecha</th>
                        <th style={{textAlign: 'center'}} scope="col">Estado</th>
                        <th style={{textAlign: 'center'}} scope="col">Empleado</th>
                        <th style={{textAlign: 'center'}} scope="col">Cliente</th>
                        <th style={{textAlign: 'center'}} scope="col">Direccion</th>
                        <th style={{textAlign: 'center'}} scope="col">Monto</th>
                        <th style={{textAlign: 'center'}} scope="col">Delivery</th>
                        <th style={{textAlign: 'center'}} scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarPedidos()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    pedidos : state.pedidos.pedidos
});

export default connect(mapStateToProps, {mostrarPedidos}) (ListadoPedidos);