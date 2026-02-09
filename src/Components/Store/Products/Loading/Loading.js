import './_loading.scss';

function Loading(title, subtitle) {
    return (
        <div className='loading'>
            <p className='loading__title'>{title}</p>
            <p className='loading__subtitle'>{subtitle}</p>
        </div>
    )
}

export default Loading;