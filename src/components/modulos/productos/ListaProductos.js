import React, { Component } from 'react';
import Producto from './Producto';

//Redux

import { connect } from 'react-redux';
import { mostrarProducto } from '../../../actions/productosAction';

class ListadoProductos extends Component {

    constructor(...args) {
        super(...args);
    }

    componentDidMount(){
        var URLactual = window.location.pathname.split('/');

        this.props.mostrarProducto(URLactual[2]);
    }

    mostrarProducto = () => {

        if(this.props.productos == undefined || this.props.productos == "undefined") return null;
        
        const productos = this.props.productos;

        // console.log(productos);

        return (
            <React.Fragment>
                {productos.map(producto => (
                    <Producto
                        nameCat = {this.props.nameCat}
                        key = {producto.id}
                        info = {producto.Products}
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
                        <th style={{textAlign: 'center'}} scope="col">Nombre</th>
                        <th style={{textAlign: 'center'}} scope="col">Descripcion</th>
                        <th style={{textAlign: 'center'}} scope="col">Precio</th>
                        <th style={{textAlign: 'center'}} scope="col">Categoria</th>
                        <th style={{textAlign: 'center'}} scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarProducto()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    productos : state.productos.producto,
});

export default connect(mapStateToProps, {mostrarProducto}) (ListadoProductos);