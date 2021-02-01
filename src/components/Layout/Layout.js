import React, { Component } from 'react';

import classes from './Layout.css';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {

        // not so: this.setState({ showSideDrawer: !this.state.showSideDrawer });
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }

}

export default Layout;

{
    /*
    Am Anfang haben wir folgenden Fehler:
    * JSX expressions must have one parent element.ts(2657)

    2 Möglichkeiten:
        * return an array and give each one a key.
        * Auxiliary Component
        * wrapping everything in a div
    
    Layout wird eine Statefull component = container -> 
    weil wir hier den state für die toolbar bzw. die Sidedrawer halten.
    
    
    */
}