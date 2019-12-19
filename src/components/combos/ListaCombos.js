import React, { Component } from 'react';
import Combo from './Combo'

//Redux
import { connect } from 'react-redux';
import { mostrarCombos } from '../../actions/combosAction';

import SortableTbl from "react-sort-search-table";
import { Divider } from 'material-ui';
import { Link } from "react-router-dom";

import { eliminarCombo } from "../../actions/combosAction";

const columnButtonStyle = {
  maxWidth: "100%",
  minWidth: "100%",
  paddingTop: 3
};

const buttonStyle = {
  marginLeft: 10,
  width: 80
};


let col = ["Name", "Description", "Amount", "Actions"];
let tHead = [
  "Nombre Combo",
  "Descripcion",
  "Monto",
  "Acciones",
];

class ActionButtonComponent extends React.Component {

  eliminarCombo = () => {
    const { id } = this.props.rowData;

    this.props.eliminarCombo(id);
  };

  render() {
    console.log("action", this.props);
    const { id } = this.props.rowData;
    return (
      <td style={columnButtonStyle}>
        <Link
          style={buttonStyle}
          to={{
            pathname: `/combos/${id}`,
            state: this.props.rowData
          }}
          className="btn btn-primary"
        >
          Ver
        </Link>

        <Link
          style={buttonStyle}
          to={{
            pathname: `/combos/editar-combo/${id}`,
            state: this.props.rowData
          }}
          className="btn btn-warning"
        >
          Editar
        </Link>

        <button
          style={buttonStyle}
          onClick={this.eliminarCombo}
          type="button"
          className="btn btn-danger"
        >
          Borrar
        </button>
      </td>
    );
  }
}

class ListaCombos extends Component { 

    componentDidMount(){
        this.props.mostrarCombos();
    }


    render() {
        const combos = this.props.combos;

        return (
            <SortableTbl tblData={combos}
                tHead={tHead}
                customTd={[
                            {custd: (ActionButtonComponent), keyItem: "Actions"},
                            ]}
                dKey={col}
                search={true}
                defaultCSS={true}
                eliminarCombo = {this.props.eliminarCombo}
            />
        );
    }
}

const mapStateToProps = state => ({
    combos : state.combos.combos
});

export default connect(mapStateToProps, {
        mostrarCombos,
        eliminarCombo
    })(
  ListaCombos
);