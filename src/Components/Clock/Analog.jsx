import React from 'react'
import AnalogClock from 'analog-clock-react'

class Analog extends React.Component{
    constructor(){
        super();
        this.state = {
            options:{
                width:"200px",
                border: true,
                borderColor: "#2e2e2e",
                baseColor: "#17a2b8",
                centerColor: "#459cff",
                handColors: {
                second: "#d81c7a",
                minute: "#fff",
                hour: "#fff"
                } 
            }
        };
    }

    render(){
        return(
            <AnalogClock {...this.state.options}/>
        )
    }
}

export default Analog;