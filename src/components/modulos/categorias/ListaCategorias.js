import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Categoria from './Categoria';
import SortableTbl from "react-sort-search-table";

//Redux

import { connect } from 'react-redux';
import { mostrarCategorias } from '../../../actions/categoriasAction';
import { eliminarCategoria } from '../../../actions/categoriasAction'

const columnButtonStyle = {
    maxWidth: "100%",
    minWidth: "100%",
    paddingTop: 3
};

const buttonStyle = {
    marginLeft: 10,
    width: 80
};


let col = ["Name", "Description", "Actions"];
let tHead = [
    "Nombre",
    "Descripcion",
    "Acciones",
];

class ActionCategoriasComponent extends React.Component {

  eliminarCategoria = () =>{
        const {id} = this.props.rowData;

        this.props.eliminarCategoria(id);
    }

  render() {
    const { id } = this.props.rowData;
    return (
      <td style={columnButtonStyle}>
        <Link style={buttonStyle} to={{
            pathname : `/producto/${id}`,
            state : this.props.rowData,
            nameCat : this.props.rowData.Name
            }} className="btn btn-primary">
            Ver
        </Link>
            
        <Link style={buttonStyle} to={{
            pathname : `/modulo/editar-categoria/${id}`,
            state : this.props.rowData
            }} className="btn btn-warning">
            Editar
        </Link>

        <button style={buttonStyle} onClick={ this.eliminarCategoria } type="button" className="btn btn-danger">Borrar</button>
      </td>
    );
  }
}

class ListadoCategorias extends Component {

    componentDidMount(){
        this.props.mostrarCategorias();
    }

    render() {
        const categorias = this.props.categorias;

        return (
            <SortableTbl tblData={categorias}
                tHead={tHead}
                customTd={[
                            {custd: (ActionCategoriasComponent), keyItem: "Actions"},
                            ]}
                dKey={col}
                search={true}
                defaultCSS={true}
                eliminarCategoria = {this.props.eliminarCategoria}
            />
        );
    }
}

const mapStateToProps = state => ({
    categorias : state.categorias.categorias
});

export default connect(mapStateToProps, {
    mostrarCategorias,
    eliminarCategoria
})(ListadoCategorias);