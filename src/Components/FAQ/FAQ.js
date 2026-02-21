import './_faq.scss';

const faqs = [
    {
        q: "How do I track my order?",
        a: "Once your order ships, you'll receive an email with a tracking number."
    },
    {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of delivery. Items must be unused and in their original packaging. Refunds are processed within 5-7 business days of receiving the returned item."
    },
    {
        q: "Do you ship internationally?",
        a: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by destination. Additional customs fees may apply depending on your country's regulations."
    },
    {
        q: "How can I change or cancel my order?",
        a: "Orders can be modified or cancelled within 2 hours of placement. After this window, please contact our customer service team and we'll do our best to accommodate your request."
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are securely processed."
    },
    {
        q: "Do you offer warranty on products?",
        a: "Most products come with a manufacturer's warranty. The warranty period varies by product and brand. Extended warranty options are available at checkout for select items."
    },

];

function FAQ() {
    return (
        <section className='container faq'>
            <h1 className='faq__title'>Frequently Asked Questions</h1>
            <ul className='faq__items'>
                {faqs.map((faqItem, i) => <li className='faq__item' key={faqItem.q}>
                    <p className='faq__question'>{faqItem.q}</p>
                    <p className='faq__answer'>{faqItem.a}</p>
                </li>)}
            </ul>
        </section>
    )
}

export default FAQ;