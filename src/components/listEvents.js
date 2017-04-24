import React, {Component} from 'react'
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment';

export default class ListEvent extends Component{

  listOfEvents (){
    return this.props.list.map((item, index)=>{
        return (
          <li className="list-group-item list-group-item-action flex-column align-items-start" key={index} onTouchTap={this.handleClose}>
            <div className="d-flex w-100 justify-content-between">
               <h5 className="mb-1">{item.church} </h5>
               <small>{moment(item.date).format('MMM')}-{moment(item.date).year()}</small>
            </div>
        </li>
        )
    })
  }
  render() {
    if(this.props.list.length <= 0){
      return null
    }
    return (
      <div className="list-group">
        <h3>CALENDAR</h3>
        {this.listOfEvents()}
      </div>
    )
  }
}