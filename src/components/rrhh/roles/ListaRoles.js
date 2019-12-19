import React, { Component } from 'react';
import Rol from './Rol'

//Redux
import { connect } from 'react-redux';
import { mostrarRoles } from '../../../actions/rolesAction';

class ListaRoles extends Component {

    componentDidMount(){
        this.props.mostrarRoles();
    }

    mostrarRoles = () => {
        const roles = this.props.roles;

        if(roles.length === 0){
            return (
                <React.Fragment>
                    <tr style={{textAlign: 'center'}}><td><h2>No hay datos para mostrar</h2></td></tr>
                </React.Fragment>
            ) 
        }else{
            return (
                <React.Fragment>
                    {roles.map(rol => (

                        <Rol
                            key = {rol.id}
                            info = {rol}
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
                        <th style={{textAlign: 'center'}} scope="col">Detalle</th>
                        <th style={{textAlign: 'center'}} scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    {this.mostrarRoles()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    roles : state.roles.roles
});

export default connect(mapStateToProps, {mostrarRoles}) (ListaRoles);