import React from 'react';
import Top_header from './Top_header';
import Mid_header from './Mid_header';
import Main_menu from './Main_menu';

const Header = (props) => {
    return (
        <div>
            <Top_header/>
            <Mid_header/>
            <Main_menu/>
        </div>
    )
}
export default Header;

