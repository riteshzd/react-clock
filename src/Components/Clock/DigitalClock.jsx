import React, { useState } from 'react'
import styles from './DigitalClock.module.css'


const DigitalClock = (props)=>{
    var moment = require('moment-timezone')
    var offset = ((moment.tz(props.Timezone).utcOffset())/60.0) 
    var d = new Date()
    var utc = d.getTime()+((d.getTimezoneOffset())*60000)
    var nd = new Date(utc+(3600000*offset))
    var time = nd.toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)
    const updateTime=()=>{
        var moment = require('moment-timezone')
        var offset = ((moment.tz(props.Timezone).utcOffset())/60.0) 
        var d = new Date()
        var utc = d.getTime()+((d.getTimezoneOffset())*60000)
        var nd = new Date(utc+(3600000*offset))
        var time = nd.toLocaleTimeString()
        setCurrentTime(time)
    }
    setInterval(updateTime,1000)
    return(
        <div className={styles.DigitalClock}>
            <h3>{time}</h3>
        </div>
    )
}

export default DigitalClock;