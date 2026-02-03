import './_store-heading.scss';

function StoreHeading({main, sub}) {
    return (
        <div className='store-heading'>
            <h1 className='store-heading__main'>{main}</h1>
            <h2 className='store-heading__sub'>{sub}</h2>
        </div>
    )
}

export default StoreHeading;