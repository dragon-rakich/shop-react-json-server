import '_contact-item.scss';

const icons = {
    email : new URL("../../../../assets/icons/email.png", import.meta.url),
    phone : new URL("../../../../assets/icons/phone.png", import.meta.url),
    address : new URL("../../../../assets/icons/address.png", import.meta.url),
}
function ContactItem({title, data}) {
    return (
        <section className='contact-item'>
            <img className='contact-item__icon' src={icons[title.toLowerCase()]}/>
            <div className='contact-item__data'>
                <h2 className='contact-item__title'>{title}</h2>
                {data.map((dataItem, i) => {<p className='contact-item__data-item' key={i}>{dataItem}</p>})}
            </div>
        </section>
    )
}

export default ContactItem;