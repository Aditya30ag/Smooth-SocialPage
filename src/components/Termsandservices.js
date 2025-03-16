import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronUp } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const contentRefs = useRef({}); // Store references to each section's content
  const [overflowSections, setOverflowSections] = useState({});

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      const newOverflowSections = {};
      Object.keys(contentRefs.current).forEach((id) => {
        const element = contentRefs.current[id];
        if (element) {
          newOverflowSections[id] = element.scrollHeight > element.clientHeight;
        }
      });
      setOverflowSections(newOverflowSections);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const sections = [
    {
      id: 1,
      title: "INTRODUCTION",
      content: `Welcome to Hirecentive Social, operated by Hirecentive Network Technologies LLP, a company registered in Karnataka, India (hereinafter referred to as "Company," "we," "us," or "our"). These Terms and Conditions ("Terms") govern the use of the Hirecentive Social platform ("Platform") by all users, including job seekers, influencers, recruiters, and businesses ("Users"). By accessing or using the Platform, you expressly agree to be bound by these legally binding Terms. If you do not agree to these Terms, you must immediately discontinue use of the Platform.`
    },
    {
      id: 2,
      title: "SERVICES PROVIDED",
      content: `Hirecentive Social is a job-matching and influencer-based recruitment platform that enables influencers to refer job seekers using a unique referral link. Users understand and acknowledge that the Platform is solely a facilitator of job connections and does not guarantee employment. Influencers who refer candidates may receive incentives based on successful placements, subject to Hirecentive Social's sole discretion and verification processes.
  2.1. The Platform facilitates job matching between employers and candidates through referrals by social media influencers ("Influencers"). Influencers receive unique referral links to share with followers.
  2.2. Disclaimer of Agency: The Company acts solely as an intermediary. We do not guarantee employment, salary outcomes, or the accuracy of job listings. All transactions are between Users, and the Company is not a party to any employment contract.
  2.3. Verification Efforts: While we undertake reasonable efforts to onboard verified businesses, we do not warrant the legitimacy of all job listings or employers. Users engage at their own risk.`
    },
    {
      id: 3,
      title: "ELIGIBILITY & COMPLIANCE",
      content: `Users must be at least 18 years old and legally competent to enter binding contracts under Indian law.
  Users agree to provide only true, complete, and accurate information at all times.
  Employers and recruiters must comply with all applicable employment laws and regulations in their respective jurisdictions.
  Users must adhere to all instructions, policies, and processes dictated by Hirecentive Social without exception.
  Users are solely responsible for maintaining account confidentiality and accuracy of information. The Company disclaims liability for unauthorized account access or fraudulent activity.
  Hirecentive Social reserves the absolute right to deny access, suspend, or terminate any User account found in violation of these Terms.`
    },
    {
      id: 4,
      title: "USER OBLIGATIONS & PROHIBITED CONDUCT",
      content: `Users expressly agree to:
  Refrain from posting, submitting, or endorsing any false, misleading, or fraudulent job listings.
  Not engage in spamming, misrepresentation, deceptive advertising, or unethical marketing tactics.
  Use the Platform responsibly and not engage in any activity that disrupts, damages, or compromises its functionality.
  Strictly follow all payment and incentive terms set forth by Hirecentive Social.
  Immediately notify Hirecentive Social of any unauthorized access, breach, or suspicious activity on their accounts.
  Accept and comply with any platform modifications, updates, and policy changes introduced by Hirecentive Social.
  4.1. Users shall:
  Provide truthful, complete, and updated information.
  Comply with all applicable laws, including the Information Technology Act, 2000, and employment regulations.
  Report suspicious job postings or misconduct immediately.
  4.2. Prohibited Conduct: Users must not:
  Post fake, misleading, or discriminatory job listings.
  Engage in spamming, phishing, data scraping, or unauthorized commercial use of the Platform.
  Reverse engineer, decompile, or disrupt the Platform's functionality.
  Misrepresent affiliation with the Company or third parties.
  Violations may result in termination, legal action, and forfeiture of incentives.
  Failure to comply with these obligations will result in immediate termination of the User's access, forfeiture of any incentives, and potential legal action.`
    },
    {
      id: 5,
      title: "PAYMENT, INCENTIVES & TAX LIABILITY",
      content: `Influencer incentives will be determined exclusively by Hirecentive Social.
  Payments will only be processed after successful job placements and verification by Hirecentive Social.
  Incentives are not guaranteed and may be revoked if fraud, misconduct, or violation of these Terms is suspected.
  Users agree that they are responsible for any applicable taxes, fees, or reporting requirements related to payments received.
  Hirecentive Social reserves the right to modify payment structures and incentive policies at any time without prior notice.
  5.1. Influencers may earn incentives for successful referrals, subject to:
  The candidate's verified employment via the referral link.
  The Company's sole discretion and anti-fraud checks.
  5.2. Tax Compliance: Users bear full responsibility for tax liabilities (e.g., GST, income tax) arising from incentives. The Company may withhold payments pending tax documentation.
  5.3. Modification Rights: The Company reserves the right to alter incentive structures, eligibility, or payment timelines without prior notice.`
    },
    {
      id: 6,
      title: "COMMUNICATION & NOTIFICATIONS",
      content: `Hirecentive Social will communicate via email, WhatsApp, SMS, or other digital platforms.
  Users must ensure that their contact details are up-to-date and acknowledge that Hirecentive Social is not liable for missed communications due to outdated or incorrect information.
  The mode of communication may be updated at any time, and Users must comply with the new communication methods without dispute.
  6.1. Users consent to receive transactional and promotional communications via email, WhatsApp, SMS, or in-app notifications.
  6.2. Opt-out instructions will be provided, but critical service-related communications cannot be disabled.`
    },
    {
      id: 7,
      title: "LIABILITY, DISCLAIMERS & INDEMNIFICATION",
      content: `Hirecentive Social does not guarantee job placement, security, or employment outcomes.
  The Platform is strictly a job-matching facilitator and is not responsible for disputes between employers, candidates, or influencers.
  Users acknowledge that they use the Platform at their own risk and that Hirecentive Social assumes no liability for losses, damages, or claims arising from job connections.
  Hirecentive Social is not responsible for fraudulent job postings but will take reasonable efforts to verify employers.
  Users agree to indemnify and hold harmless Hirecentive Network Technologies LLP, its directors, officers, employees, and affiliates from any claims, damages, liabilities, legal fees, or losses arising from their use of the Platform or violation of these Terms.
  7.1. No Warranties: The Platform is provided "as-is." We disclaim all warranties, express or implied, including fitness for purpose, accuracy, or non-infringement.
  7.2. Liability Cap: To the extent permitted by law, the Company's liability for any claim shall not exceed INR 5,000 or the fees paid by the User in the preceding six months, whichever is lower.
  7.3. Exclusion of Damages: The Company is not liable for indirect, consequential, punitive, or incidental damages (e.g., loss of income, data breaches, or reputational harm) arising from Platform use.`
    },
    {
      id: 8,
      title: "ACCOUNT TERMINATION & ENFORCEMENT",
      content: `Hirecentive Social may immediately suspend or terminate accounts violating these Terms without prior notice.
  Hirecentive Social may report fraudulent activities to law enforcement and take necessary legal action.
  Users whose accounts are terminated forfeit all unpaid incentives and are permanently banned from the Platform.`
    },
    {
      id: 9,
      title: "INTELLECTUAL PROPERTY & RESTRICTIONS",
      content: `All trademarks, content, software, and proprietary information on the Platform exclusively belong to Hirecentive Network Technologies LLP.
  Users must not copy, distribute, modify, or exploit any aspect of the Platform without written authorization from Hirecentive Social.
  Unauthorized use of Platform materials may result in legal prosecution.
  9.1. All Platform content, trademarks, software, and databases are owned by or licensed to the Company. Users grant a non-exclusive, revocable license for the Company to use User-generated content for Platform operations.
  9.2. Unauthorized reproduction, distribution, or creation of derivative works is strictly prohibited.`
    },
    {
      id: 10,
      title: "LEGAL COMPLIANCE & DISPUTE RESOLUTION",
      content: `Users agree that all legal matters related to the Platform shall be governed exclusively by the laws of India.
  Any disputes shall be exclusively resolved in the courts of Karnataka, India.
  Users waive any right to class-action lawsuits and agree to resolve disputes individually.
  10.1. The Company may suspend or terminate accounts for violations, fraud, or unlawful conduct without notice.
  10.2. Clauses on Liability, Indemnification, IP, and Dispute Resolution survive termination.`
    },
    {
      id: 11,
      title: "POLICY UPDATES & USER ACCEPTANCE",
      content: `Hirecentive Social reserves the unilateral right to update, modify, or replace these Terms at any time.
  Users will be notified of significant changes, and continued use of the Platform constitutes acceptance of the updated Terms.
  11.1. These Terms are governed by Indian law, excluding conflict of laws principles.
  11.2. Exclusive Jurisdiction: All disputes shall be adjudicated in courts in Karnataka, India. Users waive objections to venue or forum.
  11.3. Mediation: Parties agree to attempt mediation through the Karnataka Mediation Centre before litigation.`
    },
    {
      id: 12,
      title: "INDEMNIFICATION",
      content: `Users agree to indemnify the Company, its directors, and affiliates against all claims, losses, legal fees, or damages resulting from:
  Breach of these Terms.
  Misuse of the Platform.
  Violation of third-party rights (e.g., intellectual property, privacy).`
    },
    {
      id: 13,
      title: "UPDATES AND SEVERABILITY",
      content: `13.1. The Company may amend these Terms unilaterally. Continued use post-update constitutes acceptance.
  13.2. If any provision is deemed unenforceable, the remainder remains valid.`
    },
    {
      id: 14,
      title: "GRIEVANCE OFFICER",
      content: `For complaints or reporting violations, contact:
  Email: connect@hirecentive.com
  Address: Hirecentive Network Technologies LLP, [Registered Office Address], Mangalore - 575004.`
    },
    {
      id: 15,
      title: "MISCELLANEOUS",
      content: `15.1. Force Majeure: The Company is not liable for delays or failures due to events beyond reasonable control (e.g., natural disasters, cyberattacks).
  15.2. Entire Agreement: These Terms supersede prior agreements. No oral or written modification is binding unless executed by the Company.`
    },
    {
      id: 16,
      title: "DATA PRIVACY, COLLECTION, RETENTION, AND DELETION POLICY",
      content: `16.1. Data Collection:
  We collect personal data—including, but not limited to, your name, contact details, government-issued identification numbers, and other relevant information—solely for the purpose of verifying your identity, ensuring secure transactions, and enhancing your experience on the Platform.
  16.2. User Consent:
  By using the Platform, you expressly consent to the collection, processing, storage, and retention of your personal data in accordance with this Policy. Your continued use of the Platform constitutes acceptance of these practices.
  16.3. Cookie Policy:
  We use cookies and similar technologies to personalize and improve your experience. By accessing the Platform, you agree to our use of cookies as detailed in our Cookie Policy.
  16.4. Data Retention:
  Your personal data will be retained only for as long as necessary to fulfill the purposes for which it was collected, including compliance with legal, regulatory, and reporting obligations. Once your data is no longer required, it will be securely deleted in accordance with our Data Deletion Policy.
  16.5. Data Deletion:
  Users may request the deletion of their personal data by contacting us at [kaushal@hirecentive.com]. We will process such requests in compliance with applicable law. In the event of a data breach, we will notify affected users publicly as per our Standard Operating Procedures (SOP).`
    },
    {
      id: 17,
      title: "USER VERIFICATION AND BACKGROUND CHECKS",
      content: `17.1. All Users are required to undergo a background verification process using valid government-issued identification cards and numbers.
  17.2. This verification is mandatory to ensure the security and integrity of the Platform, and failure to provide accurate and valid information may result in suspension or termination of your account.`
    },
    {
      id: 18,
      title: "PAYMENT COLLECTION (PAYIN) AND PAYOUT COLLECTION POLICIES",
      content: `18.1. Payment Collection:
  All payments (payins) made on the Platform will be processed securely via our designated payment gateway. Users agree to provide accurate payment details and authorize us to process transactions as required.
  18.2. Payout Collection:
  Incentives and other payouts will be processed only after successful job placement verification and in accordance with the Platform's eligibility criteria. Users must provide valid banking or payment information to receive payouts. The Company is not liable for any delays caused by incorrect or incomplete information provided by Users.`
    },
    {
      id: 19,
      title: "THIRD-PARTY SERVICES AND INTEGRATIONS",
      content: `19.1. The Platform may integrate with third-party services for functionalities such as payment processing, background verification, and data analytics.
  19.2. The Company shall not be held responsible for the policies, privacy practices, or terms of use of any third-party service providers. Use of these services is subject to their respective terms and conditions.`
    },
    {
      id: 20,
      title: "ANTI-PHISHING, ANTI-SPAM, AND ANTI-SCAM POLICIES",
      content: `20.1. The Company employs robust measures to detect and prevent phishing, spamming, and scam activities on the Platform.
  20.2. Users are strictly prohibited from engaging in any such activities. Any suspicious behavior will be thoroughly investigated and may result in immediate suspension of the User's account and/or legal action.`
    },
    {
      id: 21,
      title: "Detailed Representations and Warranties",
      content: `Accuracy of Information: Users must ensure all information provided during registration and verification is accurate, current, and complete.
  Indemnification: If false or forged documents are submitted, the user is liable for any damages, losses, or legal actions resulting from such actions.`
    },
    {
      id: 22,
      title: "Document Verification & Compliance",
      content: `Mandatory Document Submission: Users must provide valid government-issued identification, proof of address, and any other documents as required by Hirecentive Social.
  Background Verification: Users consent to Hirecentive Social conducting background checks using the provided documents. If documents are found to be fake or invalid, Hirecentive Social reserves the right to terminate the user account immediately.`
    },
    {
      id: 23,
      title: "Confidentiality Obligations",
      content: `Data Handling: All personal and sensitive data collected will be treated as confidential and will not be shared without explicit consent, except where required by law.
  Data Breach Notification: In the event of a data breach, Hirecentive Social will publicly announce the breach as per the Standard Operating Procedure (SOP).`
    },
    {
      id: 24,
      title: "Indemnity and Liability Clauses",
      content: `Scope of Indemnity: Users shall indemnify Hirecentive Social against all claims, liabilities, damages, and expenses arising from:
  Breach of these Terms & Conditions.
  Violation of applicable laws.
  Fraud, negligence, or misconduct.
  Limitation of Liability: Hirecentive Social's liability will not exceed the amount paid by the user in the six months preceding the claim or a fixed cap, whichever is lower.`
    },

    {
      id: 25,
      title: "Force Majeure Clause",
      content: `Coverage: Neither party will be liable for non-performance due to events beyond reasonable control, such as natural disasters, pandemics, or cyberattacks.
  Termination Right: If the force majeure event persists for more than 21 days, Hirecentive Social reserves the right to terminate user access.`
    },
    {
      id: 26,
      title: "Anti-Corruption and Anti-Fraud Policy",
      content: `Prohibited Activities: Users must not engage in any bribery, corruption, or fraudulent activities on the platform.
  Reporting Obligations: Any suspicious activities, including bribery, fraud, or corruption, must be reported immediately to Hirecentive Social through the designated channels.`
    },
    {
      id: 27,
      title: "Vendor Code of Conduct",
      content: `For Business Users: If businesses use the platform for hiring, they must adhere to a Vendor Code of Conduct, which includes compliance with applicable labor laws, anti-corruption policies, and maintaining ethical business practices.
  Audit Rights: Hirecentive Social reserves the right to audit vendor compliance with the Code of Conduct, including inspection of relevant documents and business practices.`
    },
    {
      id: 28,
      title: "Business Continuity Plan",
      content: `Service Availability: Hirecentive Social will maintain a business continuity plan to ensure platform availability during unforeseen events.
  Commitment to Restore Services: In the event of disruption, services will be restored as soon as reasonably possible.`
    },
    {
      id: 29,
      title: "Exclusivity and Publicity",
      content: `Non-Exclusivity: The platform may engage with multiple businesses and influencers without exclusive agreements.
  Public Announcements: Users must not use Hirecentive Social's brand, logos, or name in any public announcements or marketing materials without written permission.`
    },
    {
      id: 30,
      title: "Intellectual Property Rights",
      content: `Ownership: All platform content, branding, and intellectual property belong exclusively to Hirecentive Social.
  Usage Restrictions: Unauthorized use of Hirecentive Social's intellectual property is strictly prohibited.`
    },
    {
      id: 31,
      title: "Refund Policy",
      content: `31.1. Non-Refundable Services:
  All payments made to Hirecentive Social, including but not limited to commissions, service fees, and subscription charges, are non-refundable except as expressly provided in this policy.
  31.2. Eligible Refund Scenarios:
  Refunds may only be processed if:
  The service was not rendered due to an operational failure by Hirecentive Social.
  There is a duplicate payment made by the user in error.
  31.3. Refund Request Procedure:
  Users must submit a refund request in writing within 7 days of the payment date. Requests must include proof of payment and relevant transaction details.
  31.4. Refund Processing Time:
  Approved refunds will be processed within 30 business days, and the refund will be made to the original payment method only.
  31.5. Exceptions:
  Refunds will not be provided for services partially used, incentives already disbursed, or in cases where account violations have occurred.`
    },
    {
      id: 32,
      title: "Security Deposit and Advance Payment Policy",
      content: `32.1. Advance Payments:
  Hirecentive Social may require an advance payment or security deposit for certain services, including enterprise solutions and custom recruitment services.
  32.2. Deposit Handling:
  Security deposits will be held in a non-interest-bearing account and will only be utilized to cover unpaid invoices, service cancellations, or breach of contract.
  32.3. Refund of Security Deposit:
  Upon successful completion of services, any remaining security deposit will be refunded within 30 days, provided there are no outstanding dues or disputes.
  32.4. Forfeiture of Deposits:
  Deposits will be forfeited in cases of repeated payment defaults, fraudulent activity, or if the user terminates the agreement without prior notice.`
    },
    {
      id: 33,
      title: "Payment Dispute Resolution Policy",
      content: `33.1. Dispute Notification:
  Users must notify Hirecentive Social of any billing disputes or discrepancies within 15 days of invoice receipt.
  33.2. Dispute Resolution Process:
  Disputes will be reviewed within 10 business days of notification.
  During this review, Hirecentive Social may request additional documentation to validate the claim.
  33.3. Interim Measures:
  While a dispute is being resolved, services may be temporarily suspended, but no interest will accrue on disputed amounts.
  33.4. Final Decision:
  Hirecentive Social's decision on the dispute will be final and binding, with the user retaining the right to seek legal recourse if necessary.`
    },
    {
      id: 34,
      title: "Confidentiality of Billing & Financial Data",
      content: `34.1. Data Handling:
  All financial information provided for billing purposes, including bank details, GST numbers, and transaction records, will be stored securely and only used for transaction processing and verification.
  34.2. Limited Disclosure:
  Financial data will not be shared with third parties, except as required by law or for processing payments through authorized payment gateways.
  34.3. Data Breach Protocol:
  In the event of a data breach, affected users will be notified within 72 hours, and all necessary steps will be taken to mitigate risks and secure data.`
    },
    {
      id: 35,
      title: "Audit and Compliance Policy",
      content: `35.1. Right to Audit:
  Hirecentive Social reserves the right to audit financial transactions, user activities, and service usage records to ensure compliance with the Terms & Conditions.
  35.2. Audit Triggers:
  Audits may be initiated in response to suspicious activity, fraud alerts, or recurring payment defaults.
  35.3. Cooperation Requirement:
  Users must provide full cooperation during the audit process, including access to relevant documents and transaction records.
  35.4. Consequences of Non-Compliance:
  Failure to comply with audit requests may result in account suspension, service termination, or legal action.`
    },
    {
      id: 36,
      title: "PAYMENT TERMS & BILLING POLICY",
      content: `36.1. Commission Structure:
  The standard commission fee is 20 days of the hired candidate's work year's salary, plus applicable GST, which will be billed as a separate component.
  36.2. Billing & Payment Cycle:
  Invoices will be generated on the 30th day from the candidate's joining date.
  Payments must be completed within a 30-day payment window from the date of invoice issuance.
  36.3. Consequences of Payment Default:
  If payment is not received within the 30-day payment window, the following measures may be enforced:
  Account Locking/Disabling: Platform access may be temporarily suspended until dues are cleared.
  Interest on Overdue Payments: A penalty interest may be applied to overdue amounts, calculated from the due date until payment is received.
  Recurring Defaults:
  If a user defaults on payments more than twice, the account may be permanently deactivated or denied future services.
  Hirecentive Social reserves the right to claim damages for any losses incurred due to delayed payments.
  36.4. Right to Update Terms:
  Hirecentive Social reserves the right to update payment terms, processes, and conditions at any time, with prior notice provided on the Platform or through official modes of communication such as email, SMS, or WhatsApp.`
    },
    {
      id: "A",
      title: "Annexure A: Data Handling & Privacy Policy",
      content: `Data Collection, Usage, and Retention: Detailed guidelines on how user data is collected, stored, and deleted.
  User Consent: Obtain explicit consent for data processing, including cookies and analytics.`
    },
    {
      id: "B",
      title: "Annexure B: Verification & Onboarding Policy",
      content: `Required Documents: A checklist of all documents required for different user types (job seekers, influencers, businesses).
  Verification Process: Step-by-step process of how verification is conducted and the consequences of non-compliance.`
    },
    {
      id: "C",
      title: "Annexure C: Anti-Fraud, Anti-Phishing, and Anti-Spam Policy",
      content: `Prohibited Activities: Define what constitutes fraud, phishing, and spam on the platform.
  Enforcement: Consequences for violating these policies, including account suspension and legal action.`
    },
    {
      id: "D",
      title: "Annexure D: Payment and Payout Policy",
      content: `Payment Terms: Clear terms for how payments are processed, including fees, incentives, and timelines.
  Refund & Dispute Resolution: A streamlined process for handling refund requests and resolving disputes over payments.`
    },
    {
      id: "E",
      title: "Annexure E: Vendor Code of Conduct (for Businesses)",
      content: `Compliance Requirements: For companies using the platform to hire, this document should outline expected business practices, legal compliance, and ethical standards.`
    },
    {
      id: "F",
      title: "Annexure F: Detailed Payment Terms & Fee Structure",
      content: `Commission Rates: Explanation of the 20-day salary commission model and GST billing as a separate line item.
  Invoice Process: Timeline of invoice generation, expected payment schedule, and late fee policies.
  Accepted Payment Methods: Bank transfer, digital payment gateways, and any preferred transaction methods.
  Interest & Penalty Details: Percentage of interest charged on overdue payments and the calculation method.
  Dispute Resolution: Procedures for addressing billing disputes, including the process for requesting invoice clarifications or adjustments.`
    },
    {
      id: "G",
      title: "Annexure G: Account Suspension & Service Termination Policy",
      content: `Account Locking Procedures: Criteria for temporary account suspensions, including notification timelines.
  Service Denial Conditions: Situations where Hirecentive Social may deny access, including non-payment, fraudulent activity, or repeated violations of payment terms.
  Reactivation Policy: Steps required to reactivate a locked or disabled account, including payment of outstanding dues and potential penalty fees.
  Legal Recourse: In severe cases, Hirecentive Social reserves the right to pursue legal action to recover unpaid fees and damages.`
    },
    {
      id: "H",
      title: "Annexure H: Communication & Notification Policy",
      content: `Official Communication Channels: Email, SMS, WhatsApp, and in-app notifications as recognized methods for official correspondence.
  Notification of Policy Changes: A clause confirming that changes to payment terms or conditions will be communicated at least 15 days in advance, with details shared on the Platform and through official channels.
  Acknowledgment Requirement: Users may need to acknowledge updated terms electronically before continuing to use the Platform.`
    },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900/100 to-black">
      <div className="relative min-h-full w-full">
        <ParticleCanvas />

        {/* Main Content Container */}
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-20">
          {/* Home Link */}
          <div className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50">
            <Link to="/" className="block">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <div className="relative w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center bg-black rounded-full border border-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/9e8806_f802bd961b9a4c20995641de0ba09cf0~mv2.png"
                    alt="Hirecentive Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Hirecentive
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Terms & Conditions
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our platform
            </p>
          </header>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-gray-800/50 border border-gray-700 
                focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder-gray-400
                text-sm sm:text-base transition-all duration-200"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Content Grid */}
          <main className="relative px-2 sm:px-4">
            <div className="relative bg-black/50 backdrop-blur-lg p-3 sm:p-4 rounded-lg border border-gray-800 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {filteredSections.map((section) => {
                  const isExpanded = expandedSections[section.id];
                  return (
                    <article key={section.id} className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative bg-black/50 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-gray-800 shadow-lg h-full flex flex-col">
                        <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text mb-3 sm:mb-4">
                          {typeof section.id === "number" && section.id}{" "}
                          {section.title}
                        </h3>
                        <div
                          ref={(el) => (contentRefs.current[section.id] = el)}
                          className={`text-gray-300 text-sm sm:text-base whitespace-pre-line leading-relaxed ${
                            isExpanded ? "" : "line-clamp-4"
                          }`}
                        >
                          {section.content}
                        </div>
                        {overflowSections[section.id] && (
                          <button
                            onClick={() => toggleSection(section.id)}
                            className="mt-3 sm:mt-4 text-cyan-400 hover:text-cyan-300 transition-colors text-sm sm:text-base flex items-center gap-1"
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                            <ChevronUp
                              className={`w-4 h-4 transition-transform ${
                                isExpanded ? "" : "rotate-180"
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </main>

          {/* Contact Section */}
          <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 rounded-lg shadow-md mt-4">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1 sm:mb-2">
                Contact Us
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Last updated on 27-02-2025 13:01:25
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-cyan-500 text-sm sm:text-base">
                      Registered Address
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base break-words">
                      3-27-2232/7 kaustubha new layout, kadri kambla, bijai s.o,
                      <br />
                      Mangalore, Karnataka, India
                      <br />
                      PIN: 575004
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-cyan-500 text-sm sm:text-base">
                      Telephone
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a
                        href="tel:8762418348"
                        className="hover:text-cyan-600 transition-colors"
                      >
                        8762418348
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6 text-end flex flex-col items-end">
                <div className="flex items-end space-x-3 sm:space-x-4 justify-end">
                  <div className="flex-1 text-end">
                    <h3 className="font-medium text-cyan-500 text-sm sm:text-base flex items-center justify-end space-x-2">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                      <span>Email Us</span>
                    </h3>
                    <div className="text-sm sm:text-base">
                     
                      <p className="mt-1 sm:mt-2">
                        <a
                          href="mailto:connect@hirecentive.com"
                          className="text-cyan-600 hover:text-cyan-700 transition-colors"
                        >
                          connect@hirecentive.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">
                      <span className="text-cyan-500 font-bold">•</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-cyan-500 text-sm sm:text-base">
                      Legal Entity
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base break-words">
                      HIRECENTIVE NETWORK TECHNOLOGIES LLP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Optional */}
            <div className="mt-8 sm:mt-10 text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                For any inquiries, feel free to reach out to us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
