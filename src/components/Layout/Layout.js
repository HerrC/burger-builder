import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;

{
    /*
    Am Anfang haben wir folgenden Fehler:
    * JSX expressions must have one parent element.ts(2657)

    2 Möglichkeiten:
        * return an array and give each one a key.
        * Auxiliary Component
        * wrapping everything in a div
    */
}