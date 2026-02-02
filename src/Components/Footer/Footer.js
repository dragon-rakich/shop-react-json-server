import './_footer.scss';

import FooterColumn from './FooterColumn/FooterColumn';
import Copyright from './Copyright/Copyright';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__columns'>
                <div className='container'>
                    <FooterColumn
                        title="About TechStore"
                        items={["Your one-stop shop for the latest tech products from top brands worldwide."]}
                    />
                    <FooterColumn 
                        title="Customer Service"
                        items={["Contact Us", "Shipping & Returns", "FAQ"]}
                    />
                    <FooterColumn
                        title="Follow Us"
                        items={["Facebook", "Twitter", "Instagram"]}
                    />
                </div>
            </div>
            <div>
                <Copyright company="TechStore" />
            </div>
        </footer>
    )
}

export default Footer;