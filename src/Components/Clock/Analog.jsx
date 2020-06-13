import React from 'react'
import AnalogClock from 'analog-clock-react'

class Analog extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            options:{
                useCustomTime: true,
                width:"200px",
                border: true,
                borderColor: "#2e2e2e",
                baseColor: "#17a2b8",
                centerColor: "#459cff",
                handColors: {
                second: "#d81c7a",
                minute: "#fff",
                hour: "#fff"
                },
                hours:0,
                minutes:0,
                seconds:0
            }
        };
        this.updateClock = this.updateClock.bind(this)
    }

    async updateClock(){
        console.log("Analog clock will get updated for",this.props.Timezone);
        let newTime = new Date().toLocaleString("en-US",{timeZone:this.props.Timezone});
        let newDate = new Date(newTime)
        //console.log(newDate.getHours()+":"+newDate.getMinutes()+":"+newDate.getSeconds());
        await this.setState({
            'options': {
                ...this.state.options,
                useCustomTime:true,
                seconds: newDate.getSeconds(),
                minutes: newDate.getMinutes(),
                hours: newDate.getHours()
              }
        })
    }

    componentDidMount(){
        setInterval(this.updateClock,1000)
    }

    render(){
        console.log(this.state.options.hours+":"+this.state.options.minutes+":"+this.state.options.seconds);
        return(
            <AnalogClock {...this.state.options}/>
        )
    }
}

export default Analog;