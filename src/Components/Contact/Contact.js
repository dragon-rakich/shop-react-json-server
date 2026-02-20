import './_contact.scss';

import ContactItem from './ContactItem/ContactItem';

function Contact() {
    const email = ["support@techstore.com"];
    const phone = ["1-800-TECH-STORE", "Mon-Fri 9am-6pm EST"];
    const address = ["123 Tech Street", "San Francisco, CA 94102"];

    return (
        <section className='container contact'>
            <h1 className='contact__title'>Contact Us</h1>
            <ContactItem title="Email" data={email}/>
            <ContactItem title="Phone" data={phone}/>
            <ContactItem title="Address" data={address}/>
        </section>
    )
}

export default Contact;