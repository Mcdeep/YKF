import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchEvents} from '../actions'
import Current from '../components/current';
import Drawer from 'material-ui/Drawer';
import ListEvents from '../components/listEvents';
import calendar from './calendar-icon.svg';
import Paper from 'material-ui/Paper';
import Map from '../components/g-map'
import  './container.css';
const style = {
    height: 75,
    width: 75,
    padding: 10,
    margin: 20,
    backgroundColor:'red',
    textAlign: 'center',
    display: 'inline-block',
    position: 'fixed',
    top: 50,
    right: 50
}
class HomeEvents extends Component {

    constructor (props){
        super(props);
        this.state = {
            open: false
        }
    }
    componentWillMount() {
        this
            .props
            .fetchEvents()
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    selectEvent(month) {}

    render() {
        
        if (this.props.events.length < 0) {
            return <div>Loading</div>
        } else {
            const event = this.props.events[0];
            return (
                <div className="container fullSize">
                    <Current event={event}/>
                    <Map />
                     <Paper onClick={this.handleToggle} style={style} zDepth={5} circle={true}> <img className="event_button" src={calendar} /> </Paper>
                    <Drawer
                        docked={false}
                        width={350}
                        open={this.state.open}
                        openSecondary={true}
                        onRequestChange={(open) => this.setState({open})}
                        >
                        <ListEvents list={this.props.events} />
                    </Drawer>
                </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {events: state.events.all}
}

export default connect(mapStateToProps, {fetchEvents})(HomeEvents)
