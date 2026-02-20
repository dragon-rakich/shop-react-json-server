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
                        items={[
                            {
                                content: "Your one-stop shop for the latest tech products from top brands worldwide."
                            }
                        ]}
                    />
                    <FooterColumn 
                        title="Customer Service"
                        items={[
                            {
                                content: "Contact Us",
                                isLink: true,
                                typeOfLink: "internal",
                                href: "/contact"
                            }, 
                            {
                                content: "Shipping & Returns",
                                isLink: true,
                                typeOfLink: "internal",
                                href: "/shipping"
                            },
                            {
                                content: "FAQ",
                                isLink: true,
                                typeOfLink: "internal",
                                href: "/faq"
                            }
                        ]}
                    />
                    <FooterColumn
                        title="Follow Us"
                        items={[
                            {
                                content: "Facebook",
                                isLink: true,
                                typeOfLink: "external",
                                href: "https://www.facebook.com/"
                            }, 
                            {
                                content: "Twitter",
                                isLink: true,
                                typeOfLink: "external",
                                href: "https://www.twitter.com/"
                            },
                            {
                                content: "Instagram",
                                isLink: true,
                                typeOfLink: "external",
                                href: "https://www.instagram.com/"
                            }
                        ]}
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