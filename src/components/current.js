import React, {Component} from 'react';
import Countdown from './countdown';
import phoneImage from './phone-contact.svg';
import './current.css';

const style = {
    textAlign: 'center',
    position: 'relative',
    height: '100%'
}
const span = {
    padding: 2,
    background: 'rgba(255,255,255,0.5)',
    borderBottom: '1px solid red',
    borderTop: '1px solid red',
    fontSize: 'small'
}
export default class extends Component {
    constructor(props) {
        super(props)
    }

    showLeaders (leaders) {
        return leaders.map((leader, index)=>{
            return (
                <li key={index}>
                    <div className="row">
                        <div className="col-2 contact">
                           <span className="align-middle"> <img  src={phoneImage} /></span>
                        </div>
                        <div className="col-10">
                            <p><strong>{leader.name}</strong></p>
                            <p><phone>{leader.contact}</phone></p>
                        </div>
                    </div>
                </li>
            )
        })
    }

    render() {
        if (this.props.event == undefined) {
            return <div>Loading</div>
        }
        const {event} = this.props
        return (
            <div style={style}>
                <h1>YKF</h1>
                <p style={{margin:0}}><span style={span}>is</span></p>
                <p className="tagline">Sold out for Jesus</p>
                <p style={{margin:0}}><span style={span}>in</span></p>
                <Countdown options={{endDate: event.date._d}} />
                <p style={{margin:0}}><span style={span}>where</span></p>
                <h2>{event.church}</h2>
                <p style={{margin:0}}><span style={span}>for Information</span></p>
                <ul className="leaders_list">
                    {(event.leaders !== null) ? this.showLeaders(event.leaders) : <li>Snap! Contacts coming soon</li>}
                </ul>
            </div>
        )
    }
}