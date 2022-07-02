import Image from "next/image";
import * as React from "react";
import KarigarLogo from '../assets/images/logo.png';
import Footer from "../components/Footer";
import Header from "../components/Header";

// markup
const Shipping = () => {
    return (
        <div>
            <main>
                <>
                    <Header />
                    <section style={{ marginBottom: '150px', padding: '200px' }} id="contact-us" className="about-area pt-70">
                        <>
                            <h2>
                                <strong>Shipping & Delivery Policy</strong>
                            </h2>
                            <p>Welcome to http://www.karigarbabu.com/!</p>
                            <p>
                                1. SHIPPING POLICY
                                https://karigarbabu.com/ is committed to excellence, and the full satisfaction of our customers.
                                https://karigarbabu.com/ proudly offers shipping services. Be assured we are doing everything in our
                                power to get your order to you as soon as possible. Please consider any holidays that might impact
                                delivery times. https://karigarbabu.com/ also offers same day dispatch.
                            </p>
                            <p>
                                2. SHIPPING
                                All orders for our products are processed and shipped out in 4-10 business days. Orders are not
                                shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders,
                                shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there
                                will be a significant delay in the shipment of your order, we will contact you via email.
                            </p>
                            <p>
                                3. WRONG ADDRESS DISCLAIMER
                                It is the responsibility of the customers to make sure that the shipping address entered is correct.
                                We do our best to speed up processing and shipping time, so there is always a small window to
                                correct an incorrect shipping address. Please contact us immediately if you believe you have
                                provided an incorrect shipping address.
                            </p>
                            <p>
                                4. UNDELIVERABLE ORDERS
                                Orders that are returned to us as undeliverable because of incorrect shipping information are
                                subject to a restocking fee to be determined by us.
                            </p>

                            <p>
                                5. LOST/STOLEN PACKAGES
                                https://karigarbabu.com/ is not responsible for lost or stolen packages. If your tracking information
                                states that your package was delivered to your address and you have not received it, please report to
                                the local authorities.
                            </p>
                            <p>
                                6. RETURN REQUEST DAYS
                                https://karigarbabu.com/ allows you to return its item (s) within a period of 7 days. Kindly be advised
                                that the item (s) should be returned unopened and unused.
                            </p>
                            <p>
                                7. OUT OF STOCK ITEM PROCESS
                                https://karigarbabu.com/ has the following options in the event there are items which are out of
                                stock https://karigarbabu.com/ Wait for all items to be in stock before dispatching.
                            </p>
                            <p>
                                8. IMPORT DUTY AND TAXES
                                When dealing with https://karigarbabu.com/ you have the following options when it comes to taxes
                                as well as import duties:You will be required to settle the requisite fees when the items are arriving
                                in the destination country.
                            </p>
                            <p>
                                9. ACCEPTANCE
                                By accessing our site and placing an order you have willingly accepted the terms of this Shipping
                                Policy.
                            </p>
                            <p>
                                9. CONTACT INFORMATION
                                In the event you have any questions or comments please reach us via the following contacts:
                                Email - karigar.babu.4@gmail.com
                            </p>
                        </>

                    </section>
                    <Footer />
                    {/*====== FOOTER PART ENDS ======*/}
                    {/*====== BACK TOP TOP PART START ======*/}
                    <a href="#" className="back-to-top">
                        <i className="lni-chevron-up" />
                    </a>
                </>
            </main>
        </div>
    );
};

export default Shipping;
