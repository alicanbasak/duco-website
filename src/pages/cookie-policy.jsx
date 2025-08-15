import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const CookiePolicy = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Cookie <span className=\"mil-thin\">Policy</span>"} breadTitle={"Cookie Policy"} anchorLabel={"Cookie Information"} anchorLink={"#cookies"} />
      
        {/* cookie policy */}
        <section id="cookies">
            <div className="container mil-p-120-90">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        
                        <div className="mil-text mil-up mil-mb-60">
                            <p className="mil-up mil-mb-30">Last updated: December 15, 2024</p>
                            
                            <h4 className="mil-up mil-mb-30">What Are Cookies?</h4>
                            <p className="mil-up mil-mb-30">
                                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow certain website features to function properly.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">Types of Cookies We Use</h4>
                            
                            <h5 className="mil-up mil-mb-20">Essential Cookies</h5>
                            <p className="mil-up mil-mb-30">
                                These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.
                            </p>
                            
                            <h5 className="mil-up mil-mb-20">Analytics Cookies</h5>
                            <p className="mil-up mil-mb-30">
                                We use Google Analytics to understand how visitors interact with our website. These cookies help us improve our website's performance and user experience.
                            </p>
                            
                            <h5 className="mil-up mil-mb-20">Marketing Cookies</h5>
                            <p className="mil-up mil-mb-30">
                                These cookies track your browsing habits to help us deliver more relevant content and advertisements. They may be set by us or third-party providers.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">Third-Party Cookies</h4>
                            <p className="mil-up mil-mb-30">
                                Our website may contain cookies from third-party services such as:
                            </p>
                            <ul className="mil-up mil-mb-30">
                                <li>Google Analytics (for website analytics)</li>
                                <li>Social media platforms (for embedded content)</li>
                                <li>Other marketing and advertising partners</li>
                            </ul>
                            
                            <h4 className="mil-up mil-mb-30">Managing Your Cookie Preferences</h4>
                            <p className="mil-up mil-mb-30">
                                Most web browsers allow you to control cookies through their settings. You can:
                            </p>
                            <ul className="mil-up mil-mb-30">
                                <li>View what cookies are stored on your device</li>
                                <li>Delete cookies</li>
                                <li>Block cookies from specific websites</li>
                                <li>Block all cookies</li>
                            </ul>
                            
                            <h4 className="mil-up mil-mb-30">Impact of Disabling Cookies</h4>
                            <p className="mil-up mil-mb-30">
                                While you can browse our website with cookies disabled, some features may not function properly. Disabling cookies may affect your user experience.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">Updates to This Policy</h4>
                            <p className="mil-up mil-mb-30">
                                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">Contact Us</h4>
                            <p className="mil-up mil-mb-30">
                                If you have questions about our use of cookies, please contact us at:
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
        {/* cookie policy end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default CookiePolicy;