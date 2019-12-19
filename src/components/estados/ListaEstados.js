import React, { Component } from 'react';
import Estado from './Estado'

//Redux
import { connect } from 'react-redux';
import { mostrarEstados } from '../../actions/estadosAction';

class ListaEstados extends Component {

    componentDidMount(){
        this.props.mostrarEstados();
    }

    mostrarEstados = () => {

        // console.log(this.props)
        const estados = this.props.estados;

        if(estados.length === 0) return null

        console.log(estados);

        return (
            <React.Fragment>
                {estados.map(estado => (

                    <Estado
                        key = {estado.id}
                        info = {estado}
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
                        <th style={{textAlign: "center"}}>Descripcion</th>
                        <th style={{textAlign: "center"}}>Abreviatura</th>
                        <th style={{textAlign: 'center'}}>Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarEstados()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    estados : state.estados.estados
});

export default connect(mapStateToProps, {mostrarEstados}) (ListaEstados);