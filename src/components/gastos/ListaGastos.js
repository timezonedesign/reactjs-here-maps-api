import React, { Component } from 'react';
import Gasto from './Gasto'

//Redux
import { connect } from 'react-redux';
import { mostrarGastos } from '../../actions/gastosAction';

class ListaGastos extends Component {

    componentDidMount(){
        this.props.mostrarGastos();
    }

    mostrarGastos = () => {
        const gastos = this.props.gastos;

        if(gastos.length === 0) return null

        return (
            <React.Fragment>
                {gastos.map(gasto => (

                    <Gasto
                        key = {gasto.id}
                        info = {gasto}
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
                        <th style={{textAlign: "center"}}>Tipo Gasto</th>
                        <th style={{textAlign: "center"}}>Monto</th>
                        <th style={{textAlign: "center"}}>Fecha</th>
                        <th style={{textAlign: 'center'}}>Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarGastos()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    gastos : state.gastos.gastos
});

export default connect(mapStateToProps, {mostrarGastos}) (ListaGastos);