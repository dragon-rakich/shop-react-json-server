import './_shipping.scss';

import ShippingItem from './ShippingItem/ShippingItem';

function Shipping() {
    return (
        <section className='container shipping'>
            <h1 className='shipping__title'>Shipping & Returns</h1>

            <ShippingItem 
                title="Shipping Options"
                description="We offer free standard shipping on orders over $50"
                list={["• Standard Shipping: 5-7 business days", "• Express Shipping: 2-3 business days", "• Overnight Shipping: 1 business day"]}
                tag="options"
            />
            <ShippingItem 
                title="Order Tracking"
                description="Once your order ships, you'll receive a tracking number via email. Track your package in real-time through our website or carrier's site."
                tag="tracking"
            />
            <ShippingItem 
                title="Returns Policy"
                description="We accept returns within 30 days of delivery."
                list={["• Items must be unused and in original packaging", "• Free return shipping for defective items", "• Refunds processed within 5-7 business days"]}
                tag="returns"
            />

        </section>
    )
}

export default Shipping;