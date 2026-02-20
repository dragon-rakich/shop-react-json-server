import './_footer-column.scss';

import FooterItem from './FooterItem/FooterItem';

function FooterColumn({title, items}) {
    return (
        <div className='footer-column'>
            <h2 className='footer-column__title'>{title}</h2>
            <nav>
                <ul className='footer-column__items'>
                    {items.map((item, i) => <li key={i}>
                        <FooterItem item={item}/>
                    </li>)}
                </ul>
            </nav>
        </div>
    )
}

export default FooterColumn;