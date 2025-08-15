import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const TermsConditions = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Terms & <span className=\"mil-thin\">Conditions</span>"} breadTitle={"Terms & Conditions"} anchorLabel={"Legal Terms"} anchorLink={"#terms"} />
      
        {/* terms */}
        <section id="terms">
            <div className="container mil-p-120-90">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        
                        <div className="mil-text mil-up mil-mb-60">
                            <p className="mil-up mil-mb-30">Last updated: December 15, 2024</p>
                            
                            <h4 className="mil-up mil-mb-30">1. Services</h4>
                            <p className="mil-up mil-mb-30">
                                Duco İstanbul provides creative and technology services including brand identity design, web application development, advertising campaigns, influencer marketing, and social media management. All services are provided in accordance with agreed project specifications and timelines.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">2. Client Responsibilities</h4>
                            <p className="mil-up mil-mb-30">
                                Clients are responsible for:
                            </p>
                            <ul className="mil-up mil-mb-30">
                                <li>Providing accurate project requirements and necessary materials</li>
                                <li>Timely feedback and approvals</li>
                                <li>Payment according to agreed terms</li>
                                <li>Ensuring content provided does not infringe third-party rights</li>
                            </ul>
                            
                            <h4 className="mil-up mil-mb-30">3. Intellectual Property</h4>
                            <p className="mil-up mil-mb-30">
                                Upon full payment, clients receive ownership of final deliverables created specifically for their project. Duco İstanbul retains the right to showcase completed work in our portfolio and marketing materials unless otherwise agreed in writing.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">4. Payment Terms</h4>
                            <p className="mil-up mil-mb-30">
                                Payment terms vary by project and are specified in individual project agreements. Generally, projects require a deposit before work begins, with remaining payments due upon completion of project milestones.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">5. Project Revisions</h4>
                            <p className="mil-up mil-mb-30">
                                Each project includes a specified number of revision rounds. Additional revisions beyond the agreed scope may incur additional charges.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">6. Limitation of Liability</h4>
                            <p className="mil-up mil-mb-30">
                                Duco İstanbul's liability is limited to the total amount paid for the specific project. We are not liable for indirect, consequential, or punitive damages.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">7. Cancellation</h4>
                            <p className="mil-up mil-mb-30">
                                Either party may terminate a project with written notice. Clients are responsible for payment of work completed up to the cancellation date.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">8. Governing Law</h4>
                            <p className="mil-up mil-mb-30">
                                These terms are governed by Turkish law. Any disputes will be resolved in Istanbul courts.
                            </p>
                            
                            <h4 className="mil-up mil-mb-30">9. Contact Information</h4>
                            <p className="mil-up mil-mb-30">
                                For questions about these terms, please contact us at:
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
        {/* terms end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default TermsConditions;