import {
  Link
}
from 'react-router-dom';


import './_footer-item.scss';

function FooterItem({item}) {
    if (!item.isLink) {
        return <p className='footer-item'>{item.content}</p>
    }
    else {
        if (item.typeOfLink === "internal") {
            return <Link className='footer-item' to={item.href}>{item.content}</Link>
        }
        else if (item.typeOfLink === "external") {
            return <a className='footer-item' href={item.href} target='_blank'>{item.content}</a>
        }
    }
}

export default FooterItem;