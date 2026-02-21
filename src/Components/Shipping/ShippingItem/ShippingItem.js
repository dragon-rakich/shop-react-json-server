import './_shipping-item.scss';

const icons = {
    options: new URL("../../../assets/icons/shipping.png", import.meta.url),
    tracking : new URL("../../../assets/icons/tracking.png", import.meta.url),
    returns : new URL("../../../assets/icons/returns.png", import.meta.url),
}

function ShippingItem({title, description, list, tag}) {
    return (
        <div className='shipping-item'>
            <img className='shipping-item__icon' src={icons[tag]}/>
            <div className='shipping-item__data'>
                <h2 className='shipping-item__title'>{title}</h2>
                <p className='shipping-item__description'>{description}</p>
                {(list) &&
                    <ul className='shipping-item__list'>
                        {list.map((listItem) => <li key={listItem} className='shipping-item__list-item'>{listItem}</li>)}
                    </ul>
                }
            </div>
        </div>
    )
}

export default ShippingItem;