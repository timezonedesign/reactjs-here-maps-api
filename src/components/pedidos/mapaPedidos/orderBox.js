import React, { Component } from 'react';
import LineTo from "react-lineto";

//Redux

var line = [];

class OrderBox extends React.Component {

    setOrder(id) {
        if (line.length === 0) line.push(id);
        else line[0] = id;
        // console.log(line);
    };

    setDelivery(id) {
        if (line.length === 1) {
            line[1] = id;
            this.props.handleLine(line);
            line = [];
            this.forceUpdate();
        }
    };

    render() {
        const pedidos = this.props.pedidos;
        const empleados = this.props.empleados;

        var orders = pedidos.map((order, key) => (
            <div 
                className={ "order" + order.id } 
                style={{ width: "50%", margin: "10px auto", fontSize: "18px", borderLeft: "5px solid #e69a57", padding: "10px", boxShadow: "1px 1px 1px 1px grey" }} 
                key={key}
                onClick={() => this.setOrder(order.id)} 
            >
                { "Order " + order.id }
            </div>
        ));

        var deliveries = empleados.map((delivery, key) => (
            <div 
                className={ "delivery" + delivery.id } 
                style={{ width: "50%", margin: "10px auto", textAlign: "right", fontSize: "18px", borderRight: "5px solid #e69a57", padding: "10px", boxShadow: "1px 1px 1px 1px grey" }} 
                key={key}
                onClick={() => this.setDelivery(delivery.id)} 
            >
                { delivery.Name + " " + delivery.LastName }
            </div>
        ));

        var lines = [];
        for (var i = 0; i < pedidos.length; i++) {
            // console.log(pedidos[i].id);
            lines.push({
                order: pedidos[i].id,
                delivery: pedidos[i].Delivery.id
            });
        }

        var lineTag = lines.map((line, key) => (
            <LineTo from={ "order" + line.order } to={ "delivery" + line.delivery } key={key} fromAnchor="middle left"
                toAnchor="middle right" borderColor="#e69a57"/>
        ));

        return (
            <React.Fragment>
                <h3 style={{ margin: "30px 0", textAlign: "center" }} >Order</h3>
                <div id="order">
                    <div style={{ width: "40%", margin: "0 10% 0 5%" }}>{deliveries}</div>
                    <div style={{ width: "40%", margin: "0 5% 0 10%" }}>{orders}</div>
                    {lineTag}
                </div>
            </React.Fragment>
        );
    };
}

export default OrderBox;