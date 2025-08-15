import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import AppData from "@data/app.json";

import ArrowIcon from "@layouts/svg-icons/Arrow";

const Contact = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Let's Start Something Great!"} breadTitle={"Contact"} anchorLabel={"Get in touch"} anchorLink={"#contact"} paddingBottom={1} align={"center"} />

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46095.4620984244!2d28.941544119303682!3d41.0591651497257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7eb31e10fe7%3A0x4859cd79d2c8cc87!2sDuco%20Istanbul!5e0!3m2!1str!2str!4v1755218790328!5m2!1str!2str" 
                style={{"border": "0"}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                />
            </div>
        </div>
        {/* map end */}

        {/* contact form */}
        <section id="contact">
            <div className="container mil-p-120-90">
                <h3 className="mil-center mil-up mil-mb-120">Let's <span className="mil-thin">Talk</span></h3>

                <Formik
                initialValues = {{ email: '', name: '', message: '' }}
                validate = { values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit = {( values, { setSubmitting } ) => {
                    const form = document.getElementById("contactForm");
                    const status = document.getElementById("contactFormStatus");
                    const data = new FormData();

                    data.append('name', values.name);
                    data.append('email', values.email);
                    data.append('message', values.message);

                    fetch(form.action, {
                        method: 'POST',
                        body: data,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        if (response.ok) {
                            status.innerHTML = "Thanks for your submission!";
                            form.reset()
                        } else {
                            response.json().then(data => {
                                if (Object.hasOwn(data, 'errors')) {
                                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                } else {
                                    status.innerHTML = "Oops! There was a problem submitting your form"
                                }
                            })
                        }
                    }).catch(error => {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    });

                    setSubmitting(false);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                <form onSubmit={handleSubmit} id="contactForm" action={AppData.settings.formspreeURL} className="row align-items-center">
                    <div className="col-lg-6 mil-up">
                        <input 
                            type="text" 
                            placeholder="What's your name"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                        />
                    </div>
                    <div className="col-lg-6 mil-up">
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                        />
                    </div>
                    <div className="col-lg-12 mil-up">
                        <textarea 
                            placeholder="Tell us about our project"
                            name="message" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message} 
                        />
                    </div>
                    <div className="col-lg-8">
                        <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="mil-adaptive-right mil-up mil-mb-30">
                            <button type="submit" className="mil-button mil-arrow-place">
                                <span>Send message</span>
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                    <div className="form-status" id="contactFormStatus" />
                </form>
                )}
                </Formik>
            </div>
        </section>
        {/* contact form end */}    
    </Layouts>
  );
};
export default Contact;
