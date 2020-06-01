import React, {UseState} from 'react'
import styles from './App.module.css'
import DigitalClock from './Components/Clock/DigitalClock'
import Analog from './Components/Clock/Analog'
import Switch from 'react-switch'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            darkTheme:false,
            analogClock:false
        }
        this.themeHandler = this.themeHandler.bind(this)
        this.clockHandler =this.clockHandler.bind(this)
    }

    themeHandler(e){
        this.setState({darkTheme:e});
        console.log("Theme Changed..Bingo..!!")
    }

    clockHandler(e){
        this.setState({analogClock:e})
        console.log("Clock has been changed..!!")
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
                        {this.state.analogClock? <Analog/> : <DigitalClock/>}         
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
            </div>
        )
    }
}

export default App;