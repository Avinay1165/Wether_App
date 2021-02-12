import React from "react";
import {  Container} from "react-bootstrap";
const CityWeather=(props) =>{
    return(
        <Container>
        <br/>
        {props.CityWeather.cod===200 ?
        <div>
        <p><strong>{ props.CityWeather.name}</strong></p>
        <p> It is currently <strong>{Math.round(props.CityWeather.main.temp)}</strong> degrees out with {props.CityWeather.weather[0].description}
        </p>
        </div>:null
        }
        </Container>
    );
};

export default CityWeather;