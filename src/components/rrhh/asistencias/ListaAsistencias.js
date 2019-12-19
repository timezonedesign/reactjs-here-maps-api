import React, { Component } from 'react';
import Asistencia from './Asistencia'

//Redux
import { connect } from 'react-redux';
import { mostrarAsistencias } from '../../../actions/asistenciasAction';

class ListaAsistencias extends Component {

    componentDidMount(){
        this.props.mostrarAsistencias();
    }

    mostrarAsistencias = () => {
        const asistencias = this.props.asistencias;

        if(asistencias.length === 0){
            return (
                <React.Fragment>
                    <tr style={{textAlign: 'center'}}><td><h2>No hay datos para mostrar</h2></td></tr>
                </React.Fragment>
            ) 
        }else{
            return (

                <React.Fragment>
                    {asistencias.map(asistencia => (
    
                        <Asistencia
                            key = {asistencia.id}
                            info = {asistencia}
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
                        <th style={{textAlign: 'center'}} scope="col">Nombre</th>
                        <th style={{textAlign: 'center'}} scope="col">Apellido</th>
                        <th style={{textAlign: 'center'}} scope="col">Cant. Asistencias</th>
                        <th style={{textAlign: 'center'}} scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarAsistencias()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    asistencias : state.asistencias.asistencias
});

export default connect(mapStateToProps, {mostrarAsistencias}) (ListaAsistencias);