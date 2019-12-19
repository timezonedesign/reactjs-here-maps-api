import React, { Component } from 'react';
import axios from 'axios';

//Componentes
import Paper from '@material-ui/core/Paper';
import Header from '../../header/IndexHeader';

//Redux
import { connect } from 'react-redux';
import { agregarGasto } from '../../../actions/gastosAction';

//Map

// const APP_ID_HERE = 'N0fRlxF32W9uEEuH5ZSv';
// const APP_CODE_HERE = '0eDtrgamyvY1fxPeA8m0OQ';
var locations = [
  ["loan 1", 33.890542, 151.274856, "address 1"],
  ["loan 2", 33.923036, 151.259052, "address 2"],
  ["loan 3", 34.028249, 151.157507, "address 3"],
  ["loan 4", 33.80010128657071, 151.28747820854187, "address 4"],
  ["loan 5", 33.950198, 151.259302, "address 5"]
];

class AsignarPedido extends Component {

    

    componentDidMount(){
        var platform = new window.H.service.Platform({
          apikey: "SjrlBpFRW1Pv024lspKZ40wpc0KTwDynySLGaLVk_JY"
        });
        var defaultLayers = platform.createDefaultLayers();
        
        //Step 2: initialize a map - this map is centered over Europe
        var map = new window.H.Map(
          document.getElementById("map"),
          defaultLayers.vector.normal.map,
          {
            center: { lat: locations[1][1], lng: locations[1][2] },
            zoom: 4,
            pixelRatio: window.devicePixelRatio || 1
          }
        );
        // add a resize listener to make sure that the map occupies the whole container
        window.addEventListener("resize", () => map.getViewPort().resize());

        //Step 3: make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

        // Create the default UI components
        var ui = window.H.ui.UI.createDefault(map, defaultLayers);

        this.addMarkersToMap(map);
    }

    addMarkersToMap(map) {
        var marker, i;
        for (i = 0; i < locations.length; i++) {

            var loan = locations[i][0];
            var lat = locations[i][1];
            var long = locations[i][2];
            var add = locations[i][3];
            
            marker = new window.H.map.Marker({lat: lat, lng: long});
            map.addObject(marker);
        }
    }











    // state = {
    //     empleados : []
    // }

    // empleadosRef = React.createRef();

    // componentWillMount(){

    //     axios.get('https://roraso.herokuapp.com/User/Users',
    //     { headers: { 'access-token': localStorage.getItem('access-token')}})
    //         .then(res => {
    //             if(res.data.length === 0){
    //                 return null;
    //             }else{
    //                 this.setState({
    //                     empleados : res.data
    //                 })
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    // asignarDelivery = (e) => {
    //     e.preventDefault();

    //     let fechaArr = this.fechaRef.current.value.split('-');

    //     const fecha = fechaArr[2] + "/" + fechaArr[1] + "/" + fechaArr[0];

    //     if(fechaArr[0].length == 5 || fechaArr[0].length === 5){
    //         Swal.fire({
    //             title: 'Error!',
    //             text: 'La fecha esta mal ingresada, favor de chequearla',
    //             type: 'error',
    //             confirmButtonText: 'Reintentar'
    //         })
    //         return;
    //     }else{
    //         const gasto = {
    //         details : this.detalleRef.current.value,
    //         amount : this.montoRef.current.value,
    //         date : fecha,
    //         user : this.state.currentUser,
    //         }

    //         // console.log(gasto);
    //         this.props.agregarGasto(gasto);
    //     }

    // }
    
    render() {
        return (
          <React.Fragment>
            <Header titulo="Asignar Delivery" />
            <div className="table-empleados">
              <div id="mapCanvas">
                {/* <HEREMap
                  appId="7G2qFGteTl4YG6sCCJiE"
                  appCode="SjrlBpFRW1Pv024lspKZ40wpc0KTwDynySLGaLVk_JY"
                  center={{ lat: 10.998666, lng: -63.79841 }}
                  zoom={12}
                ></HEREMap> */}
                {/* <HEREMap
                  apiId="N0fRlxF32W9uEEuH5ZSv"
                  apiCode="0eDtrgamyvY1fxPeA8m0OQ"
                  center={{ lat: 10.998666, lng: -63.79841 }}
                  zoom={12}
                /> */}
              </div>
              <div
                id="map"
                style={{ width:"95%", height: "450px", background:"grey" }}
              ></div>
            </div>
          </React.Fragment>
        );
    }
}


export default connect(null, { agregarGasto })(AsignarPedido);