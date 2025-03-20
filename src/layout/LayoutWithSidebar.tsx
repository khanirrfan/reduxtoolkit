// LayoutWithSidebar.tsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Tab } from '../types/NavTab';

const LayoutWithSidebar: React.FC = () => {
    const navigate = useNavigate();
    const navItems: Tab[] = [
        { tabName: 'Products', tabUrl: '/product', parent: 'Products' },
        { tabName: 'Cart', tabUrl: '/cart', parent: 'Cart' }
    ];
    function handleRoute(item: Tab) {
        console.log(item, 'item');
        navigate(`${item.tabUrl}`);
    }
    return (
        <div>
            <div style={{ width: '100%', height: '40px', display: 'flex', backgroundColor: 'red' }}>
                header
            </div>
            <div style={{ display: 'flex' }}>
                <aside
                    style={{
                        width: '200px',
                        padding: '10px',
                        border: '1px solid',
                        borderRight: '0px' // Keep a border on the right to separate sidebar from content
                    }}
                >
                    <h3>Sidebar</h3>
                    <nav>
                        <ul>
                            {navItems.map((item: Tab) => {
                                return (
                                    <li
                                        key={item.parent}
                                        onClick={() => handleRoute(item)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item.tabName}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </aside>

                <main
                    style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid'
                        //borderLeft: '1px solid' // Keep a border on the left to separate content from sidebar
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default LayoutWithSidebar;
