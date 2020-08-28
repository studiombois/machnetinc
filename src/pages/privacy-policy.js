import React from 'react';
import styled from 'styled-components';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';

export default () => (
  <Layout>
    <SEO />
    <PageHeader />
    <PrivacyPolicy as={Container}>
      <h1>Privacy Policy</h1>
      <ol type="1">
        <li>
          Background
          <p>
            Machnet Technologies Inc. (MACHNET) provides Unified Software
            Platform for domestic and cross border payments solutions. Our
            privacy policy describes how we collect, store, use and disclose
            your user’s Personal Data and protect their privacy when they use
            the platform. Our platform and our services (hereinafter referred to
            as the “Services”), as well as our Agreements describes our roles as
            a “Data Controller” of such data. By visiting, interacting with our
            Platform, and/or accessing or using any of our Services, you agree
            that MACHNET can use such data in accordance with our privacy
            policy. If our practices and policies change, we will update this
            Privacy Policy and notify you via email.{' '}
          </p>
          <p>
            MACHNET applies the highest standards of guidelines and protocols in
            relation to Personal Data collected or processed or dealt with in
            any manner by MACHNET. MACHNET processes Personal Data if you have
            given your consent for the processing of such data. The processing
            is necessary to perform a contract with you or perform a legal
            obligation, and there is a legitimate interest in the collection of
            Personal Data. As such, you will be asked to provide consent for
            your data to be used accordingly.
          </p>
        </li>
        <li>
          Information Collect
          <p>
            Our Platform collects personal information about your users from a
            variety of sources in the course of providing money transfer and
            payment services and related products and services we provide.
            Personal information we collect and the sources of such personal
            information include the following:
          </p>
          <ol type="1">
            <li>
              We collect personal information when your users request to send or
              receive money or to provide other goods or services, provided by
              telephone, online at your Website, through paper-based forms or at
              your agent locations. These personal information may include
              identities and contact information of senders and recipients
              (collectively also referred to as “users”) of money transfers or
              payments, credit card, banking or other billing information, birth
              dates and other personal identifiers, “out of wallet” questions
              used to verify your identity for security and fraud prevention
              purposes, identification number and amounts paid or transferred.
            </li>
            <li>
              We collect personal information when your users submit personal
              information on applications or other forms to us or our
              affiliates, including in connection with sending and receiving
              money transfers, through your enrolment and participation in
              loyalty programs and when you provide additional information we
              may reasonably request for fraud prevention purposes.
            </li>
            <li>
              In case the user’s mode of payment is ACH Pull, we collect
              information relating to the user’s bank account such as account
              number and routing number which are obtained during the process of
              user’s bank account verification. Such bank account verification
              is completed by the services such as, but not limited to, Plaid
              Inc in accordance with Plaid Inc’s end user Privacy Policy
              (Available at www.plaid.com/legal ). However, in case of the
              user’s mode of payment is Debit Card, we do not collect any
              information regarding the user’s debit card and such information
              are directly collected and held by third party service providers.
            </li>
            <li>
              We collect information about your user’s transactions, including
              transaction history, such as frequency of use and amounts
              transferred.
            </li>
            <li>
              In connection with identity verification, fraud prevention and
              similar security purposes, we collect and/or confirm certain
              identity-related information, financial background and similar
              information through third parties sources such as our service
              providers, government agencies and consumer reporting agencies;
            </li>
          </ol>
        </li>
        <li>
          Information Use
          <ol type="1">
            <li>
              Authorizing and processing transactions, including effecting and
              administering money transfers and payments.
            </li>
            <li>
              Meeting legal, regulatory, risk management, fraud prevention and
              security requirements, which may include (among other measures)
              verifying the identity of the sender and recipient of funds and
              checking identities against money laundering, terrorist financing
              or similar watch lists established by regulatory agencies or
              similar bodies in the United States or in other countries. For
              identity verification purposes, senders and recipients of money
              transfers or payments may be required to produce valid
              identification [or consent to verification by other means] before
              processing the funds.
            </li>
            <li>
              For marketing and promotional purposes, unless the user “opt out”
              or withdraw consent to this purpose, as described in the section
              entitled “Offers, Promotions and Opting Out” below.
            </li>
            <li>
              Maintaining business and transaction records for reasonable
              periods, and generally managing and administering our business.
            </li>
            <li>
              In connection with certain business transactions relating to you,
              your business or assets, as further described in the section
              entitled “Information Disclose” below.
            </li>
            <li>Meeting insurance, audit and processing requirements.</li>
            <li>
              Otherwise with your consent or as permitted or required by law and
              our third party service providers.
            </li>
            <li>
              Using user and transaction information as input mechanism to
              strengthen our user verification and risk mitigation services to
              adapt to the dynamic nature of account takeover and fraud
              transaction attempts in future.
            </li>
          </ol>
        </li>
        <li>
          Offers, Promotions and Opting Out
          <ol type="1">
            <li>
              In order to process and complete requested money transfers and
              payments, we may disclose user’s personal information to the
              recipient of a money transfer or payment, to our local affiliates
              at the sender’s or receiver’s location, as applicable, to
              authorized agents (both at the sender’s and the recipient’s
              location), and, if applicable, the recipient and any intermediary
              banks or other financial institutions or financial services
              companies involved in the transaction or our services.
            </li>
            <li>
              Some of our services or programs that you participate in are
              provided jointly with other third party business partners, and
              certain personal information may be disclosed to these third party
              businesses for the purpose of administering the service or
              program.
            </li>
            <li>
              We may disclose user’s personal information to third parties for
              marketing and promotional purposes, unless the user “opt out” or
              withdraw consent to this disclosure, as described in the section
              entitled “Offers, Promotions and Opting Out” below.
            </li>
            <li>
              Our Platform may transfer personal information to outside agents
              or service providers (including affiliates) that perform services
              on your behalf, for example marketing, information technology
              and/or data hosting, user verification and risk assessment or
              processing services. Some of these service providers or affiliates
              may be located outside of the United States, and user’s personal
              information may be collected, used, disclosed, stored and
              processed in the United States or elsewhere outside of The United
              States for the purposes described in this Privacy Statement. We
              take reasonable measures to ensure that personal information that
              may be processed by these service providers on our behalf is
              protected and not used or disclosed for purposes other than as
              directed by us, subject to legal requirements in the United States
              and other foreign countries applicable to us, affiliates, agents
              and service providers, for example lawful requirements to disclose
              personal information to government authorities in those countries.
            </li>
            <li>
              User’s personal information may be used by our Platform and
              disclosed to parties connected with the contemplated or actual
              financing, securitization, insuring, sale, assignment or other
              disposal of all or part of our business or assets (including, for
              example, your service account with us), for purposes related to
              the evaluation and performance of these transactions, including:
              <ol type="a">
                <li>
                  permitting such parties to evaluate and determine whether to
                  proceed or continue with the transaction, and
                </li>
                <li>
                  fulfilling reporting, inspection or audit requirements or
                  obligations to such parties.
                </li>
              </ol>
            </li>
            <li>
              Successors and assigns of our Platform and/or our business or
              assets may use and disclose user's personal information for
              similar purposes as described in this Privacy Statement.
            </li>
            <li>
              Our Platform may disclose user’s personal information as necessary
              to meet legal, regulatory, insurance, audit, and security
              requirements, and as otherwise with your consent or as permitted
              or required by law (including as required by applicable the United
              States and foreign laws). This may include lawful requirements to
              disclose user’s personal information to government authorities in
              the United States and in foreign countries, for example
              disclosures in compliance with suspicious activity reporting
              requirements under anti-terrorism, anti-money laundering and
              similar laws and regulations in the United States or in foreign
              countries.
            </li>
          </ol>
        </li>
        <li>
          Confidentiality and Security
          <p>
            We endeavor to maintain physical, electronic and procedural
            safeguards to protect personal information against loss or theft, as
            well as unauthorized access, disclosure, copying, use or
            modification. Authorized employees, agents, representatives and
            mandataries that require access to user’s personal information in
            order to fulfill their job requirements will have access to your
            personal information. No data transmission over the Internet or the
            telephone can be guaranteed to be perfectly secure, and any personal
            information users submit or access electronically or over the
            telephone is done at your own risk, and our Platform does not
            guarantee or warrant the security of information transmitted in
            these manners. You should be aware that third parties may unlawfully
            intercept your transmissions or may wrongly instruct you to disclose
            personal information to them while posing as this our Platform and
            you should exercise caution when providing user’s personal
            information to any person. Our Platform’s record retention policies
            dictate that we maintain information about you, users, including
            user’s opt-out choices, for a fixed time period. If users do not
            perform another transaction during the fixed time period, user’s
            Information, as well as their opt-out choice will be removed. If
            users perform another transaction or otherwise provide us with
            personal information thereafter, users will be afforded another
            opportunity to opt out.
          </p>
        </li>
        <li>
          Changes
          <p>
            Our Platform reserves the right to modify this Privacy Statement
            from time to time. You can get updated Privacy Statements by
            emailing us at help@machnetinc.com. We urge you to review this
            Privacy Statement frequently to obtain the current version. Your
            continued provision of personal information or use of our services
            following any changes to this Privacy Statement constitutes your
            acceptance of any such changes.
          </p>
        </li>
      </ol>
    </PrivacyPolicy>
  </Layout>
);

const PrivacyPolicy = styled.div`
  h1 {
    font-weight: 100;
    width: max-content;
  }

  ol {
    li {
      font-weight: bold;
      margin-top: 40px;

      &:last-child {
        margin-bottom: 80px;
      }

      p {
        font-weight: normal;
      }

      ol {
        li {
          font-weight: normal;
          margin-top: 0;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
