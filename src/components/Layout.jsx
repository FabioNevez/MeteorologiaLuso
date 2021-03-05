import React from 'react';
import LayoutHeader from './LayoutHeader';

function Layout() {
    return (
        <div className="layout">
            <LayoutHeader />
            <div className="content"></div>
        </div>
    )
}
export default Layout;