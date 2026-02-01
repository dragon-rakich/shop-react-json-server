import './_copyright.scss';

function Copyright({company}) {
    return (
        <div className='copyright'>
            <p className="copyright__text">&copy; {(new Date).getFullYear()} {company}. All rights reserved.</p>
        </div>
    )
}

export default Copyright;