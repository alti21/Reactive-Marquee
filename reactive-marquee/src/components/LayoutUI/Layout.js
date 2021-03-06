import React from 'react';
import Menu from './Menu';
import logo from '../../logo/abc.svg';
import Link from '../Misc/Link';

const Layout = ({data, style, handleClick}) => (
    <div className="layout" style={style}>
        <img src={logo} className="App-logo" alt="logo"/>
        <Link text="Contact Us" className="link__menu link__contact"/>
        <Menu data={data} handleClick={handleClick} />
    </div>
)

export default Layout;