import React from 'react'
import Select from 'react-select'

class TimeZoneSelect extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedTZ:" "
        }
        this.selectionHandler = this.selectionHandler.bind(this)
    }

    async selectionHandler(e){
        await this.setState({selectedTZ:e.value})
        this.props.handleTZSelect(this.state.selectedTZ);
    }

    render(){
        var moment = require('moment-timezone')
        let fetchedTZ = moment.tz.names()
        let timeZoneList = []
        let singleTZ = {} 
        timeZoneList = fetchedTZ.map(function(tz){
            singleTZ = {value:tz, label:tz}
            return singleTZ;
        })
        return(
            <div>
                <Select
                    options={timeZoneList}
                    onChange={this.selectionHandler}
                />
            </div>
        )
    }
}

export default TimeZoneSelect;