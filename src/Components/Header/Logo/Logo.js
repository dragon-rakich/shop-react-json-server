import './_logo.scss';
import { Link } from 'react-router-dom';

function Logo({brandname, url}) {
    const logo = new URL("../../../assets/icons/store.png", import.meta.url);
    return (
        <Link className="logo" to="/">
            <img className="logo__image" src={logo} alt='logo'/>
            <p className="logo__brandname">{brandname}</p>
        </Link>
    )
}

export default Logo;