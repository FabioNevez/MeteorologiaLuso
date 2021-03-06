import React from 'react';
import LayoutHeader from './LayoutHeader';
import Meteorology from './Meteorology';
import '../layout.css';

function Layout() {
    return (
        <div className="layout">
            <LayoutHeader />
            <div className="content">
                <Meteorology />
            </div>
        </div>
    )
}
export default Layout;