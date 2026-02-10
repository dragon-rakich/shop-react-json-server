import './_no-results.scss';

function NoResults({title, subtitle}) {
    return (
        <div className='no-results'>
            <p className='results__title'>{title}</p>
            <p className='results__subtitle'>{subtitle}</p>
        </div>
    )
}

export default NoResults;