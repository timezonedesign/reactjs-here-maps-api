import React, { Component } from 'react';
import Clientes from './Clientes'

//Redux
import { connect } from 'react-redux';
import { mostrarClientes } from '../../actions/clientesAction';

//CSS
import { css } from "@emotion/core";
// Another way to import. This is recommended to reduce bundle size
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ListaClientes extends Component {

    state = {
        loading: true
    };

    componentDidMount(){
        this.props.mostrarClientes();
    }

    mostrarClientes = () => {
        const clientes = this.props.clientes;

        if(clientes.length === 0) return (
            <tr>
                <td align="center">
                </td>
                <td>
                </td>
                <td>
                <DotLoader
                css={override}
                size={50} // or 150px
                color={"#4D4D4D"}
                loading={this.state.loading}
                />
                </td>
            </tr>
        )

        console.log(clientes);

        return (
            <React.Fragment>
                {clientes.map(cliente => (

                    <Clientes
                        key = {cliente.id}
                        info = {cliente}
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
                        <th style={{textAlign: "center"}}>Nombre</th>
                        <th style={{textAlign: "center"}}>Apellido</th>
                        <th style={{textAlign: "center"}}>Email</th>
                        <th style={{textAlign: "center"}}>Telefono</th>
                        <th style={{textAlign: 'center'}}>Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarClientes()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    clientes : state.clientes.clientes
});

export default connect(mapStateToProps, {mostrarClientes}) (ListaClientes);