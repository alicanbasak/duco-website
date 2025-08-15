import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const PrivacyPolicy = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Privacy <span className=\"mil-thin\">Policy</span>"} breadTitle={"Privacy Policy"} anchorLabel={"Privacy Information"} anchorLink={"#privacy"} />
      
        {/* privacy policy */}
        <section id="privacy">
            <div className="container mil-p-120-90">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        
                        <div className="mil-text mil-up mil-mb-60">
                            <p className="mil-up mil-mb-30">Last updated: December 15, 2024</p>
                            
                            <h4 className="mil-up mil-mb-30">1. Information We Collect</h4>
                            <p className="mil-up mil-mb-30">
                                At Duco İstanbul, we collect information you provide directly to us, such as when you contact us through our website forms, email, or phone. This may include your name, email address, phone number, company information, and project details.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">2. How We Use Your Information</h4>
                            <p className="mil-up mil-mb-30">
                                We use the information we collect to:
                            </p>
                            <ul className="mil-up mil-mb-30">
                                <li>Respond to your inquiries and provide our services</li>
                                <li>Send you marketing communications (with your consent)</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                            
                            <h4 className="mil-up mil-mb-30">3. Data Protection & KVKK Compliance</h4>
                            <p className="mil-up mil-mb-30">
                                As a Turkish company, we comply with the Personal Data Protection Law (KVKK - Kişisel Verilerin Korunması Kanunu) and GDPR requirements. We implement appropriate technical and organizational measures to protect your personal data.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">4. Your Rights</h4>
                            <p className="mil-up mil-mb-30">
                                Under KVKK and GDPR, you have the right to:
                            </p>
                            <ul className="mil-up mil-mb-30">
                                <li>Access your personal data</li>
                                <li>Rectify inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing</li>
                                <li>Data portability</li>
                            </ul>
                            
                            <h4 className="mil-up mil-mb-30">5. Cookies</h4>
                            <p className="mil-up mil-mb-30">
                                Our website uses cookies to improve your browsing experience. Please see our Cookie Policy for detailed information about our use of cookies.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">6. Third-Party Services</h4>
                            <p className="mil-up mil-mb-30">
                                We may use third-party services such as Google Analytics to analyze website usage. These services have their own privacy policies governing their use of information.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">7. Data Retention</h4>
                            <p className="mil-up mil-mb-30">
                                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">8. Contact Us</h4>
                            <p className="mil-up mil-mb-30">
                                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                            </p>
                            <p className="mil-up mil-mb-30">
                                <strong>Duco İstanbul</strong><br />
                                Dap Vadisi Bumerang Ofis No:72 Kağıthane/İSTANBUL<br />
                                Email: hello@ducoistanbul.com<br />
                                Phone: +90 212 295 22 52
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {/* privacy policy end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default PrivacyPolicy;