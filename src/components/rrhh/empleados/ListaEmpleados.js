import React, { Component } from 'react';
import Empleado from './Empleado';
import { Link } from 'react-router-dom';

import SortableTbl from "react-sort-search-table";

//Redux

import { connect } from 'react-redux';
import { mostrarEmpleados } from '../../../actions/empleadosAction';
import { eliminarEmpleado } from '../../../actions/empleadosAction'

const columnButtonStyle = {
    maxWidth: '100%',
    minWidth: '100%',
    paddingTop: 3,
};

const buttonStyle = {
    marginLeft: 10,
    width: 80,
};

let col = ["Dni", "Name", "LastName", "Email", "Actions"];
let tHead = [
    "DNI",
    "Nombre",
    "Apellido",
    "Email",
    "Acciones",
];

class ActionEmpleadoComponent extends React.Component {

    eliminarEmpleado = () =>{
        const {id} = this.props.rowData;

        this.props.eliminarEmpleado(id);
    }

  render() {
    const { id } = this.props.rowData;
    return (
        <td style={columnButtonStyle}>
            <Link style={buttonStyle} to={{
                pathname : `/rrhh/empleados/${id}`,
                state : this.props.rowData
                }} className="btn btn-primary">
                Ver
            </Link>

            <Link style={buttonStyle} to={{
                pathname : `/rrhh/editar-empleados/${id}`,
                state : this.props.rowData
                }} className="btn btn-warning">
                Editar
            </Link>

            <button style={buttonStyle} onClick={ this.eliminarEmpleado } type="button" className="btn btn-danger">Borrar</button>
        </td> 
    );
  }
}

class ListadoEmpleados extends Component {

    componentWillMount(){
        this.props.mostrarEmpleados();
    }

    render() {

        const empleados = this.props.empleados;

        return (
            <SortableTbl tblData={empleados}
                tHead={tHead}
                customTd={[
                            {custd: (ActionEmpleadoComponent), keyItem: "Actions"},
                            ]}
                dKey={col}
                search={true}
                defaultCSS={true}
                eliminarEmpleado = {this.props.eliminarEmpleado}
            />
        );
    }
}

const mapStateToProps = state => ({
    empleados : state.empleados.empleados
});

export default connect(mapStateToProps, {
    mostrarEmpleados,
    eliminarEmpleado
})(ListadoEmpleados);