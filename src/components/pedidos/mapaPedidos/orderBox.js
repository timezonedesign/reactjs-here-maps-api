import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SortableTbl from "react-sort-search-table";


//Redux

const columnButtonStyle = {
    maxWidth: '100%',
    minWidth: '100%',
    paddingTop: 3,
};

const buttonStyle = {
    marginLeft: 10,
    width: 80,
};

let col = ["Order", "Delivery", "Actions"];
let tHead = [
    "Order",
    "Delivery",
    "Acciones",
];

class ActionOrderComponent extends React.Component {

  render() {
    const { id } = this.props.rowData;
    return (
        <td style={columnButtonStyle}>

            <Link style={buttonStyle} to={{
                pathname : `/order/editar-orders/${id}`,
                state : this.props.rowData
                }} className="btn btn-warning">
                Editar
            </Link>

        </td> 
    );
  }
}

class OrderBox extends React.Component {

    render() {

        const pedidos = this.props.pedidos;

        var orders = [];
        for(var i = 0; i < pedidos.length; i++) {
            orders.push({
                id: pedidos[i].id,
                Order: "Order " + pedidos[i].id,
                Delivery: pedidos[i].Delivery.Name + " " + pedidos[i].Delivery.LastName,
                DeliveryId: pedidos[i].Delivery.id,
            });
        }

        return (
            <div style={{ width: "95%", margin: "30px auto" }}>

                <SortableTbl tblData = {orders}
                    tHead={tHead}
                    customTd={[
                                {custd: (ActionOrderComponent), keyItem: "Actions"},
                                ]}
                    dKey={col}
                    search={true}
                    defaultCSS={true}
                />
            </div>
        );
    }
    
}

export default OrderBox;