import React from 'react'
import styles from './App.module.css'
import DigitalClock from './Components/Clock/DigitalClock'
import Analog from './Components/Clock/Analog'
import TimeZoneSelect from './Components/TimeZoneSelect/TimeZoneSelect'
import Switch from 'react-switch' 

class App extends React.Component{
    constructor(){
        super();
        this.state={
            darkTheme:false,
            analogClock:false,
            selectedTZ:"Asia/Kolkata",
            currentTime:" "
        }
        this.themeHandler = this.themeHandler.bind(this)
        this.clockHandler =this.clockHandler.bind(this)
        this.handleTZSelect = this.handleTZSelect.bind(this)
    }

    themeHandler(e){
        this.setState({darkTheme:e});
        console.log("Theme Changed..Bingo..!!")
    }

    clockHandler(e){
        this.setState({analogClock:e})
        console.log("Clock has been changed..!!")
    }

    async handleTZSelect(timezone){
        await this.setState({selectedTZ:timezone})
        var moment = require('moment-timezone')
        var offset = ((moment.tz(this.state.selectedTZ).utcOffset())/60.0) 
        var d = new Date()
        var utc = d.getTime()+((d.getTimezoneOffset())*60000)
        var nd = new Date(utc+(3600000*offset))
        await this.setState({currentTime:nd.toLocaleTimeString()})
        console.log(this.state.selectedTZ, this.state.currentTime)    
    }

    render(){
        return(
            <div className={this.state.darkTheme? styles.containerDark : styles.containerLight}>
                <div className={styles.title}>
                    <h1>
                        Cloked
                    </h1>
                </div>
                <div className={styles.body}>

                    <div className={styles.clock}>
                        {this.state.analogClock? <Analog Timezone={this.state.selectedTZ}/> : <DigitalClock Timezone={this.state.selectedTZ}/>}         
                    </div>

                    <div className={styles.timezoneSelect}>
                    <TimeZoneSelect handleTZSelect={this.handleTZSelect}/>
                    <h4>Give Continent followed by name of City</h4>
                    </div>

                    <div className={styles.selectionPanel}>
                        <div className={styles.modeSelection}>
                            <h3>Dark Mode</h3>
                            <Switch
                                onChange={this.themeHandler} 
                                checked={this.state.darkTheme} 
                                uncheckedIcon={false} 
                                checkedIcon={false}
                            />
                        </div>
                        
                        <div className={styles.modeSelection}>
                            <h3>Analog Mode</h3>
                            <Switch
                                onChange={this.clockHandler} 
                                checked={this.state.analogClock} 
                                uncheckedIcon={false} 
                                checkedIcon={false}
                            />
                        </div>

                    </div>
                </div>
                <div className={styles.credits}>
                    <h5><a href="https://github.com/riteshzd/react-clock">designed by riteshzd</a></h5>
                </div>
            </div>
        )
    }
}

export default App;