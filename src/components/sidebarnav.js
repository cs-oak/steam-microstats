import React, {Component} from 'react';
import {Button, Nav} from 'react-bootstrap';
import Sidebar from 'react-bootstrap-sidebar';

export default class SidebarNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };

    }
    update = ()=>{
        this.setState({isVisible: !this.state.isVisible});
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Button variant={'secondary'} onClick={this.update()}>
                    B
                </Button>
                <Sidebar side={'left'} isVisible={this.state.isVisible} onHide={()=>this.update()}>
                    <Nav>
                        <Nav.Item href={'#'}>News Crawler</Nav.Item>
                        <Nav.Item href={'#'}>Dota 2 Chat Log Scanner</Nav.Item>
                        <Nav.Item href={'#'}>Achievement Details</Nav.Item>
                    </Nav>
                </Sidebar>
            </div>
        );
    }
}