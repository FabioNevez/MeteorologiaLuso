import React from 'react';
import LayoutHeader from './LayoutHeader';
import Meteorology from './Meteorology';
import '../layout.css';

function Layout(props) {
    return (
        <div className="layout">
            <LayoutHeader LayoutName={props.Cname} />
            <div className="content">
                <Meteorology />
            </div>
        </div>
    )
}
export default Layout;