import { Button, Menu } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const navItems = [
        {
            label: 'Home'
        },
        {
            label: 'About'
        },
        {
            label: 'Contact'
        }
    ]

    return (
        <div>
            <div style={{ borderBottom: '1px solid #1111', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 10px', position: 'fixed', width: '100%', zIndex: '1000', backgroundColor: 'white', }}>
                <div style={{ display: 'flex', gap: '20px', }}> <MenuFoldOutlined /> <span>AUTH MERN</span></div>
                <div>

                    <Menu style={{ border: 'none', }} items={navItems} mode='horizontal' />

                </div>
                <div style={{ display: 'flex', gap: '5px' }}>

                    <Link to={'/login'}><Button>Login</Button></Link>
                    <Button type='primary'>Signup</Button>

                </div>
            </div>

            <div style={{ height: '50px' }}>

            </div>

        </div>
    )
}
