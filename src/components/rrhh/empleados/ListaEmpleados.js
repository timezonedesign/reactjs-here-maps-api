import React, { Component } from 'react';
import Empleado from './Empleado';

//Redux

import { connect } from 'react-redux';
import { mostrarEmpleados } from '../../../actions/empleadosAction';

class ListadoEmpleados extends Component {

    componentWillMount(){
        this.props.mostrarEmpleados();
    }

    mostrarEmpleados = () => {

        console.log(this.props);

        const empleados = this.props.empleados;


        if(empleados.length === 0){
            return (
                <React.Fragment>
                    <tr style={{textAlign: 'center'}}><td><h2>No hay datos para mostrar</h2></td></tr>
                </React.Fragment>
            ) 
        }else{
            return (
                <React.Fragment>
                {empleados.map(empleado => (

                    <Empleado
                        key = {empleado.id}
                        info = {empleado}
                        borrarEmpleado = {this.props.borrarEmpleado}
                    />

                ))}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <table style={{marginTop: '10px'}} className="table">
                <thead>
                    <tr>
                        <th style={{textAlign: 'center'}} scope="col">DNI</th>
                        <th style={{textAlign: 'center'}} scope="col">Nombre</th>
                        <th style={{textAlign: 'center'}} scope="col">Apellido</th>
                        <th style={{textAlign: 'center'}} scope="col">Email</th>
                        <th style={{textAlign: 'center'}} scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarEmpleados()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    empleados : state.empleados.empleados
});

export default connect(mapStateToProps, {mostrarEmpleados}) (ListadoEmpleados);