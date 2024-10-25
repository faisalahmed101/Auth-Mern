import React from 'react'
import { Button, Menu } from 'antd'
import { DashboardOutlined, MenuFoldOutlined, OrderedListOutlined, PhoneOutlined, SettingOutlined, ShopOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


export default function Home() {

    const items = [

        {
            label: 'Dashboard',
            key: 'Dashboard',
            icon: <DashboardOutlined />
        },
        {
            label: 'Orders',
            key: 'Orders',
            icon: <OrderedListOutlined />
        },
        {
            label: 'Products',
            key: 'Products',
            icon: <ShopOutlined />
        },
        {
            label: 'Contact',
            key: 'contact',
            icon: <PhoneOutlined />
        },

    ]
    return (
        <div style={{ boxSizing: 'border-box' }}>

            <div style={{ height: '100vh', display: 'flex', flexDirection: 'row', }}>
                <div style={{ borderRight: '1px solid #1111', }}>

                    <Menu items={items} mode='vertical' style={{ width: '190px', border: 'none', marginTop: '20px', }} defaultSelectedKeys={[window.location.pathname]} > </Menu>

                    <div style={{ position: 'fixed', bottom: '0', alignItems: 'center', marginBottom: '20px', marginLeft: '10px', borderTop: '1px solid #1111', width: '180px' }}> <Button type='text'><SettingOutlined /> Settings</Button> </div>

                </div>

                <div style={{ marginTop: '20px' }}>content</div>
            </div>


        </div>
    )
}
