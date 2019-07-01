import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap'
import {slide as Menu} from 'react-burger-menu'

export default class SidebarNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    handleOpen = () => {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render() {
        return (
            <div>
                <Menu outerContainerId={this.props.outerContainerId} state={this.state.menuOpen}>
                    <ListGroup>
                        <ListGroup.Item action variant={this.props.theme}>News</ListGroup.Item>
                        <ListGroup.Item action variant={this.props.theme}>DOTA 2 Chat Scan</ListGroup.Item>
                        <ListGroup.Item action variant={this.props.theme}>Achievement Analysis</ListGroup.Item>
                    </ListGroup>
                </Menu>
            </div>
        );
    }
}