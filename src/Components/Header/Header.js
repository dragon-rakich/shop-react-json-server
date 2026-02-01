import './_header.scss';

import Cart from './Cart/Cart';
import Logo from './Logo/Logo';

function Header({children}) {
    return (
        <header className='header'>
            <div className='container'>
                {children}
            </div>
        </header>
    )
}

export default Header;
