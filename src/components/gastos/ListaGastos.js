import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Gasto from './Gasto'
import SortableTbl from "react-sort-search-table";

//Redux
import { connect } from 'react-redux';
import { mostrarGastos } from '../../actions/gastosAction';
import { eliminarGasto } from '../../actions/gastosAction';

const columnButtonStyle = {
    maxWidth: "100%",
    minWidth: "100%",
    paddingTop: 3
};

const buttonStyle = {
    marginLeft: 10,
    width: 80
};


let col = ["Detail", "Amount", "Date", "Actions"];
let tHead = [
    "Tipo Gasto",
    "Monto",
    "Fecha",
    "Acciones",
];

class ActionGastoComponent extends React.Component {

  eliminarGasto = () => {
      this.props.eliminarGasto(this.props.rowData.id);
  }

  render() {
    const { id } = this.props.rowData;
    return (
      <td style={columnButtonStyle}>
        <Link style={buttonStyle} to={{
            pathname : `/gastos/${id}`,
            state : this.props.rowData
            }} className="btn btn-primary">
            Ver
        </Link>

        <Link style={buttonStyle} to={{
            pathname : `/gastos/editar-gasto/${id}`,
            state : this.props.rowData
            }} className="btn btn-warning">
            Editar
        </Link>

        <button style={buttonStyle} onClick={ this.eliminarGasto } type="button" className="btn btn-danger">Borrar</button>
    </td> 
    );
  }
}

class ListaGastos extends Component {

    componentDidMount(){
        this.props.mostrarGastos();
    }

    render() {
        console.log("token", localStorage.getItem('access-token'));
        const gastos = this.props.gastos;

        return (
            <SortableTbl tblData={gastos}
                tHead={tHead}
                customTd={[
                            {custd: (ActionGastoComponent), keyItem: "Actions"},
                            ]}
                dKey={col}
                search={true}
                defaultCSS={true}
                eliminarGasto = {this.props.eliminarGasto}
            />
        );
    }
}

const mapStateToProps = state => ({
    gastos : state.gastos.gastos
});

export default connect(mapStateToProps, {
    mostrarGastos,
    eliminarGasto
})(ListaGastos);