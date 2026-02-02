import './_footerColumn.scss';

function FooterColumn({title, items}) {
    return (
        <div className='footerColumn'>
            <h2 className='footerColumn__title'>{title}</h2>
            <nav>
                <ul className='footerColumn__items'>
                    {items.map((item, i) => {<li key={i} className='footerColumn__item'>{item}</li>})}
                </ul>
            </nav>
        </div>
    )
}

export default FooterColumn;