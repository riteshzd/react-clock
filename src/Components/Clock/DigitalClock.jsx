import React, { useState } from 'react'
import styles from './DigitalClock.module.css'


const DigitalClock = ()=>{

    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time)
    const updateTime=()=>{
        time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }
    setInterval(updateTime,1000)
    return(
        <div className={styles.DigitalClock}>
            <h3>{currentTime}</h3>
        </div>
    )
}

export default DigitalClock;