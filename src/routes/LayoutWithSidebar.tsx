// LayoutWithSidebar.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutWithSidebar = () => {
    return (
        <div style={{ display: 'flex' }}>
            <aside style={{ width: '200px', padding: '10px' }}>
                <h3>Sidebar</h3>
                <nav>{/* Sidebar links */}</nav>
                {/* <Outlet /> //This can be used for sidebar-specific content */}
            </aside>

            <main style={{ flex: 1, padding: '10px' }}>
                <h1>Main Content</h1>
                <Outlet /> {/* Main content will be rendered here */}
            </main>
        </div>
    );
};

export default LayoutWithSidebar;
