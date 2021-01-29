import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
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