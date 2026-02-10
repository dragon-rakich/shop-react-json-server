import './_no-results.scss';

function NoResults({title, subtitle}) {
    return (
        <div className='no-results'>
            <p className='no-results__title'>{title}</p>
            <p className='no-results__subtitle'>{subtitle}</p>
        </div>
    )
}

export default NoResults;