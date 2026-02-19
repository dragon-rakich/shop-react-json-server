import '_contact-item.scss';

function ContactItem({title, data}) {
    return (
        <section className='contact-item'>
            <img className='contact-item__icon'/>
            <div className='contact-item__data'>
                <h2 className='contact-item__title'>{title}</h2>
                {data.map((dataItem, i) => {<p className='contact-item__data-item' key={i}>{dataItem}</p>})}
            </div>
        </section>
    )
}

export default ContactItem;