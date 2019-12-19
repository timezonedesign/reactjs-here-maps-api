import React, { Component } from 'react';
import Categoria from './Categoria';

//Redux

import { connect } from 'react-redux';
import { mostrarCategorias } from '../../../actions/categoriasAction';

class ListadoCategorias extends Component {

    componentDidMount(){
        this.props.mostrarCategorias();
    }

    mostrarCategorias = () => {
        const categorias = this.props.categorias;

        if(categorias.length === 0) return null

        return (
            <React.Fragment>
                {categorias.map(categoria => (

                    <Categoria
                        key = {categoria.id}
                        info = {categoria}
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
                        <th style={{textAlign: 'center'}} scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarCategorias()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    categorias : state.categorias.categorias
});

export default connect(mapStateToProps, {mostrarCategorias}) (ListadoCategorias);