import './_contact.scss';

import ContactItem from './ContactItem/ContactItem';

function Contact() {
    const email = {}
    return (
        <section className='container contact'>
            <ContactItem title="Email" data={email}/>
            <ContactItem title="Phone" data={email}/>
            <ContactItem title="Address" data={email}/>
        </section>
    )
}

export default Contact;