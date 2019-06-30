import React, {Component} from 'react';
import {Navbar, Dropdown} from 'react-bootstrap'

export default class Navigation extends Component {
    render() {
        return(
            <Navbar bg={this.props.defaultTheme} variant={this.props.defaultTheme} expand={'lg'}>
                <Navbar.Brand>
                    {this.props.headerBrand}
                </Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle>Themes</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.props.themes.map((theme) => <Dropdown.Item>{theme}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        );
    }
}