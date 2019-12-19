import React, { Component } from 'react';
import Combo from './Combo'

//Redux
import { connect } from 'react-redux';
import { mostrarCombos } from '../../actions/combosAction';

class ListaCombos extends Component {

    componentDidMount(){
        this.props.mostrarCombos();
    }

    mostrarCombos = () => {
        const combos = this.props.combos;

        if(combos.length === 0) return null

        // console.log(combos);

        return (
            <React.Fragment>
                {combos.map(combo => (

                    <Combo
                        key = {combo.id}
                        info = {combo}
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
                        <th style={{textAlign: "center"}}>Nombre Combo</th>
                        <th style={{textAlign: "center"}}>Descripcion</th>
                        <th style={{textAlign: "center"}}>Monto</th>
                        <th style={{textAlign: 'center'}}>Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarCombos()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    combos : state.combos.combos
});

export default connect(mapStateToProps, {mostrarCombos}) (ListaCombos);