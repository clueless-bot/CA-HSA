import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../App.css"
import "../about/about.css"
import "../header/header.css"
import "./services.css"
const Services = () => {
  const [toggleState,setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);    
  }
  
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">
        HSA (Chartered Accountancy Firm) through its individualistic advisory services helps clients create long-term value for all stakeholders. Our services and solutions provide trust through assurance and help clients transform, grow and operate.
        </span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-bill service__icon"></i>
                <h3 className="services__title">Direct Tax</h3>
            </div>

            <span className="services__button" onClick={()=> toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Direct Tax</h3>
                <p className="services__modal-description">
                Attitudes to tax are changing. Tax decisions are under scrutiny like never before. Organizations, from middle markets to multinationals, are ever more exposed to changing trends in tax regulations. Business groups need specialist advice and services to manage their tax obligations. We deliver a holistic and coordinated approach to all your Income Tax issues which includes advisory, compliances, and representation before tax authorities for various matters related to tax litigations.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Advisory related to Indian and International taxation including tax planning
                    </p>
                  </li>

            
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in tax compliances and return fillings
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in obtaining tax registrations (PAN, TAN)
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in assessments and Representation before appellate authorities for tax litigation related matters
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Advisory and compliances related to Expats / Impats
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Attestation and various certifications (viz. 15 CA/CB)
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Advisory and compliances related to Transfer Pricing regulations under Income Tax Act
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-rupee-sign service__icon"></i>
                <h3 className="services__title">Indirect Tax</h3>
            </div>

            <span onClick={()=> toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Indirect Tax</h3>
                <p className="services__modal-description">
                Goods and Services Tax (GST) is among the biggest tax reforms introduced in the history of Indian Fiscal Evolution. It has an exceptional impact on the economic growth of the country. GST Law is broadly based on transactions and liability will arise regardless of profitability.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in business modeling and transactions advisory taking into consideration implications under GST law.
                    </p>
                  </li>

            
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Registration under GST
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Help in GST compliances, returns filling and audits
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in refunds
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Transactions and periodic internal audits to monitor the compliances
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in documentation and procedural aspects related compliances
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Representation before tax authorities for various matters including litigation support
                    </p>

                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-analytics service__icon"></i>

                <h3 className="services__title">Auditing & Assurance</h3>
            </div>

            <span className="services__button" onClick={()=> toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Auditing & Assurance</h3>
                <p className="services__modal-description">
                Our Audit and Assurance services are aimed at assisting stakeholders by providing updated insights into business and insights that could identify potential threats/opportunities that can factor into your plans.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Statutory Audit
                    </p>
                  </li>

            
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Tax Audit
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Internal Audit
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Concurrent Audit
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Certification
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Management Audit
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Compliance Audit
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Inspection/ Investigation
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Operations Audit
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Forensic Audit
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Information Systems Audit
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-angle-double-up service__icon"></i>
                <h3 className="services__title">Accounting & Business</h3>
            </div>

            <span className="services__button" onClick={()=> toggleTab(4)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Accounting & Business</h3>
                <p className="services__modal-description">
                It is challenging to make sound business decisions in today’s global economy without having timely, reliable, and meaningful financial data. We at YGCO provide a complete line of efficient accounting solutions that can help our clients in the effective and efficient management of their financial and accounting functions.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Bookkeeping services
                    </p>
                  </li>

            
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Standard Operating Processes
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    MIS Reports
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-expand-arrows service__icon"></i>
                <h3 className="services__title">Corporate & Allied Laws</h3>
            </div>

            <span className="services__button" onClick={()=> toggleTab(5)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Corporate & Allied Laws</h3>
                <p className="services__modal-description">
                As part of Corporate Laws and Allied Services, we assist clients in deciding the best possible corporate and legal structure to meet their business requirements.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Incorporation of all types of entities including Companies, LLP, firms, Trusts, Section 8 Companies, Society etc.
                    </p>
                  </li>

            
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in registration of companies as recognized start-up
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Advisory related to Labour and Industrial Laws
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Advisory related to FEMA and Foreign Investments

                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in legal documentation, contracts and agreements including vetting of the same
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    DIN and DSC registration
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Issue of compliance certificate as per the specific requirements under various laws                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in filling of returns with RBI related to foreign investments                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Legal due diligence</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-compress-arrows service__icon"></i>
                <h3 className="services__title">Startup Advisory</h3>
            </div>

            <span className="services__button" onClick={()=> toggleTab(6)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>``

                <h3 className="services__modal-title">Startup Advisory</h3>
                <p className="services__modal-description">
                We have extensive experience and exposure in providing end to end solutions related to start-up businesses including registration of start-ups, incorporation of company, mentoring of start-ups for business growth, incubation support and support related to infrastructure.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Advisory related to Indian and International taxation including tax planning
                    </p>
                  </li>

            
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in feasibility studies, preparing project reports and financial projects
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Registration of start-ups with government of India so as to be eligible to avail all the benefits available as start-up entities
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Mentoring the start-up entities and facilitate them in business growth

                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Provide end to end solution related to tax compliances and financials management
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Start-up incubation
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Advise on sourcing of finance

                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in set-up of office infrastructure

                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Assistance in set-up of systems, processes and controls

                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Services
