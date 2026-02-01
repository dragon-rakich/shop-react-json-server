import './_logo.scss';

function Logo({brandname, url}) {
    const logo = new URL("../../../assets/icons/store.png", import.meta.url);
    return (
        <div className="logo">
            <img className="logo__image" src={logo} alt='logo'/>
            <p className="logo__brandname">{brandname}</p>
        </div>
    )
}

export default Logo;