import React, { Component } from 'react';
import Turno from './Turno'

//Redux
import { connect } from 'react-redux';
import { mostrarTurnos } from '../../../actions/turnosAction';

class ListaTurnos extends Component {

    componentDidMount(){
        this.props.mostrarTurnos();
    }

    mostrarTurnos = () => {
        
        const turnos = this.props.turnos;

        // console.log(turnos)

        if(turnos.length === 0){
            return (
                <React.Fragment>
                    <tr style={{textAlign: 'center'}}><td><h2>No hay datos para mostrar</h2></td></tr>
                </React.Fragment>
            ) 
        }else{
            return (
                <React.Fragment>
                    {turnos.map(turno => (

                        <Turno
                            key = {turno.id}
                            info = {turno}
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
                        <th style={{textAlign: 'center'}} scope="col">Turno</th>
                        <th style={{textAlign: 'center'}} scope="col">Hora de Entrada</th>
                        <th style={{textAlign: 'center'}} scope="col">Hora de Salida</th>
                        <th style={{textAlign: 'center'}} scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarTurnos()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    turnos : state.turnos.turnos
});

export default connect(mapStateToProps, {mostrarTurnos}) (ListaTurnos);