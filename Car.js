import React from "react";
class Car extends React.Component{

    constructor(props) {
         super(props);
         console.log('I am constructor' + props.car_info.color);

    }


    render() {
        console.log('I am render');
        return (<h1>Car type is {this.props.car_info.car_type} ,
            color is  {this.props.car_info.color} , production year is {this.props.car_info.prod_year} </h1>)
    }

}

export default Car;