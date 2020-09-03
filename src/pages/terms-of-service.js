import React from 'react';
import styled from 'styled-components';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';

export default () => (
  <Layout>
    <SEO />
    <PageHeader />
    <Container>
      <TOS>
        <h1>Terms of Service</h1>
        <small>Last updated: February 1, 2020</small>
        <p>
          This Agreement is a legal binding agreement between you and Machnet
          Technologies Inc., and shall apply to your use of the service provided
          through Machnet Technologies Inc.’s (MACHNET) Platform.
        </p>
        <ol style={{ marginBottom: '50px' }}>
          <li style={{ marginBottom: '0' }}>
            "you" or "your" means any person ("Users") using the Service;
          </li>
          <li style={{ marginBottom: '0' }}>
            "we" or "us" or "our" means Machnet Technologies Inc and its
            partners;
          </li>
          <li style={{ marginBottom: '0' }}>
            "partner" or "partners" means any third party service providers
            engaged by MACHNET for facilitating the provision of the service/s;
          </li>
          <li style={{ marginBottom: '0' }}>
            Any term otherwise not defined in this Agreement shall have a
            meaning generally applied to such terms in the particular context
            wherein they are used.
          </li>
        </ol>

        <ol>
          <li>
            <b>DEFINITIONS</b>
            <p>
              In this Terms of Service, unless otherwise stated, the following
              words shall have the following meanings:
            </p>
            <ol type="a">
              <li>
                <b>"Customer"</b> means an individual or entity who is eligible
                to use your money transfer services, and has submitted
                transaction information required by PARTNER to effectuate the
                money transfer;
              </li>
              <li>
                <b>"Beneficiary"</b> or <b>"Beneficiaries"</b> means an
                individual or entity to whom a Customer intends to transfer
                funds using your Money Transfer Services.
              </li>
              <li>
                <b> "Money Transfer"</b> or <b>"Money Transfer Services"</b> or{' '}
                <b>"Services"</b>
                means the money transfer services which you provide to your
                Customers via the Platform;
              </li>
              <li>
                <b>"Customer Funds</b>" means funds paid by customers in order
                to effectuate a money transfer or payments from the Platform,
                including the amount to be transferred to a Beneficiary, and any
                transaction fees or any other service fees;
              </li>
              <li>
                <b>"Platform"</b> means the online technology platform designed
                and developed by MACHNET, including API stacks for front-end
                user interfaces, back-end transaction management and reporting
                systems. The Platform shall also enable you to operate online
                money transfer service including <b>"Marketing Program"</b>.
              </li>
            </ol>
            <p>
              Any term otherwise not defined in this Agreement shall have a
              meaning generally applied to such terms in the particular context
              wherein they are used.
            </p>
          </li>
          <li>
            <b>PLATFORM LICENSING</b>
            <ol type="1">
              <li>
                MACHNET grants you a non-exclusive, non-transferable license to
                use the Platform as follows: 1) to use the Platform solely for
                your operations 2) to use the Documentation in support of your
                use of the Platform as authorized under this Agreement.
              </li>
              <li>
                You shall not copy or use the Platform or Documentation except
                as specified in this Agreement. You agree not to cause or permit
                any actions that may alter, merge, adapt or translate the
                Platform, or de-compile, reverse engineer, disassemble, or
                otherwise reduce the Platform to a human-perceivable form. You
                may not transfer, distribute, re-license, sell, rent or lease
                the Platform.
              </li>
              <li>
                You may not modify the Platform or create derivative works based
                upon the Platform. The license granted herein does not entitle
                you to use the Platform, or any technology or intellectual
                property contained within it, as reference or inspiration for
                developing or creating another product in any way based upon the
                Application.
              </li>
              <li>
                You shall retain all title, copyright and other proprietary
                rights in the Platform. You do not acquire any rights, express
                or implied, in the Platform, other than those specified in this
                Agreement.
              </li>
              <li>
                You shall have full rights to all your data and files which are
                produced through the use of the Platform.
              </li>
              <li>
                You shall allow MACHNET to audit the system as and when required
                by MACHNET.
              </li>
              <li>
                MACHNET will provide Support Services to you in the manner
                described in this Terms of Service.
              </li>
              <li>
                MACHNET may issue modified or enhanced versions of the Platform,
                and will generally deploy updates for you who have a current
                Agreement in effect. If you provide reports of bugs or errors in
                the Platform or suggests any changes or modifications to the
                Platform in connection with use of the Platform, MACHNET shall
                have all rights to use all such feedback at its discretion
                including but not limited to the incorporation of such suggested
                changes or modifications into MACHNET's Platform and the right
                to assign, license or to otherwise transfer to third parties the
                software so changed or modified without obligation to PARTNER.
              </li>
              <li>
                The Platform is being delivered to PARTNER "AS IS" and MACHNET
                makes no warranty as to its use or performance. MACHNET DOES NOT
                AND CANNOT WARRANT THE PERFORMANCE OR RESULTS PARTNER MAY OBTAIN
                BY USING THE PLATFORM. MACHNET MAKES NO WARRANTIES CONDITIONS,
                REPRESENTATIONS, OR TERMS (EXPRESS OR IMPLIED WHETHER BY
                STATUTE, COMMON LAW, CUSTOM, USAGE OR OTHERWISE) AS TO ANY
                MATTER INCLUDING WITHOUT LIMITATION NON INFRINGEMENT OF THIRD
                PARTY RIGHTS, MERCHANTABILITY, INTEGRATION, SATISFACTORY
                QUALITY, OR FITNESS FOR ANY PARTICULAR PURPOSE.
              </li>
            </ol>
          </li>
          <li>
            <b>THIRD PARTY SERVICES</b>
            <ol type="0">
              <li>
                MACHNET, at its sole discretion, may enter into agreements with
                third party service providers for one or more of the following
                services, which in MACHNET’s best efforts, may be integrated in
                the Platform.
              </li>
              <ol type="a">
                <li>
                  <b>Payment Service/s</b>
                  <ol type="i">
                    <li>
                      These may consist of applications, tools, and other
                      services, as required for PARTNER to receive and send
                      payments via Automated Clearing House (ACH), Debit Card,
                      FEDwire services, and any other payment instruments as may
                      be notified by MACHNET.
                    </li>
                    <li>
                      These services generally allow you to create its account
                      with MACHNET’s third party service provider to send and
                      receive customer funds. PARTNER shall be solely
                      responsible for the funds which are received and sent from
                      this account.
                    </li>
                    <li>
                      These services generally allow you to create Customer
                      Accounts with MACHNET’s third party service providers on
                      behalf of the customer. To create a Customer Account,
                      PARTNER must collect and provide with the information
                      pertaining to the identity of the Customer and the
                      information of the Customer’s bank account. Prior to
                      creating a User Account, you must obtain authorization to
                      debit and credit from the prospective Customer’s Customer
                      Account and bank account on behalf of you, MACHNET and its
                      third party service provider. Your agreement with the
                      Customer should clearly provide this authorization and
                      explain the services the Platform will provide.
                    </li>
                    <li>
                      You shall be solely liable on account of any returns,
                      reversals and chargebacks occurring during the use of the
                      payment service/s. The nature and extent of the liability
                      shall be as per the Terms and Conditions of the third
                      party service provider providing such payment service/s.
                      Such liability of you under this clause shall survive the
                      termination of this Agreement.
                    </li>
                  </ol>
                  <li>
                    <b>KYC/AML</b>
                    <ol type="i">
                      <li>
                        MACHNET may provide you with know your customer ("KYC")
                        and anti-money laundering ("AML") services for the
                        customer accounts created on the Platform to help you
                        with its regulatory and compliance requirements ("the
                        KYC Application").
                      </li>
                      <li>
                        You may use the KYC Application in the normal course of
                        business to (i) verify the accuracy of information
                        submitted by Customer or Customer Accounts and (ii)
                        identify potential money laundering activity. you
                        understand that (a) the KYC Application is not intended
                        to generate any KYC verification reports, and (b) the
                        KYC Application is not intended to replace the KYC
                        verification reports required by you for its internal or
                        any external purposes.
                      </li>
                      <li>
                        The KYC Application is not intended to replace a credit
                        report or "consumer report." You assure and warrant that
                        it will not use the KYC Application in a way that
                        violates: (a) the Fair Credit Reporting Act, 15 U.S.C. §
                        1681, et seq. ("FCRA"); (b) the Gramm-Leach-Bliley Act,
                        15 U.S.C. § 6801, et seq. ("GLBA"), (c) the Driver's
                        Privacy Protection Act, 18 U.S.C. § 2721, et. seq.
                        ("DPPA") and similar and/or associated state laws and
                        regulations governing the use and disclosure of drivers’
                        license information; or (d) any other federal, state or
                        local statute, regulation, rule or other governmental
                        mandate (collectively, the "KYC Applicable Laws").
                      </li>
                      <li>
                        You understand that MACHNET and any of its third party
                        service providers are not a consumer reporting agency
                        ("Consumer Reporting Agency") as defined by the FCRA.
                        Further, you agree that you will not use the KYC
                        Application for any purposes enumerated in the FCRA in
                        lieu of obtaining a "Consumer Report" (as that term is
                        defined in the FCRA) or for any other purpose which
                        violates this Agreement.
                      </li>
                      <li>
                        You assures and warrants (1) its use of the KYC
                        Application does not violate any agreement or obligation
                        between customer and any third party or Applicable Law
                        and (2) neither any information delivered by customer to
                        MACHNET and its third party service providers nor your
                        Use of this KYC Application will infringe on any
                        proprietary rights held by any third party or constitute
                        a violation of any KYC Applicable Laws.
                      </li>
                    </ol>
                  </li>
                </li>
                <li>
                  No license or right to use, reproduce, translate, rearrange,
                  modify, enhance, display, resell, lease, sublicense or
                  otherwise distribute, transfer or dispose of the third party
                  services, in whole or in part, is granted except as expressly
                  provided by this Section.
                </li>
                <li>
                  Wherever applicable, your and Customers shall agree to the
                  terms and conditions of MACHNET’s third party service
                  providers. Also, you may be required to enter into a direct
                  agreement with such third party service providers.
                </li>
                <li>
                  You shall be responsible for the accuracy and validity of all
                  information provided in the Platform for all the services
                  mentioned in this Section. Your failure to provide accurate
                  and valid information may result in incorrect identification
                  or analysis by the KYC Application and failure in payment
                  processing.
                </li>
                <li>
                  MACHNET shall exercise its best efforts to provide all
                  necessary support for any issues arising with PARTNER’s use of
                  the Third Party Services. MACHNET does not assume any
                  liability for any errors or issues arising out of the use of
                  such Third Party Services. Further, MACHNET shall exercise its
                  best efforts to ensure the quality and continuity of such
                  Third Party Services.
                </li>
              </ol>
            </ol>
          </li>
          <li>
            <b>INTELLECTUAL PROPERTY</b>
            <ol type="1">
              <li>
                MACHNET shall retain all rights, title and interest to its own
                intellectual property rights, including but not limited to
                copyright, trademarks, patents, registered and industrial
                designs in the Platform (collectively the "Intellectual Property
                Rights"). You do not acquire any rights, express or implied, in
                the Platform, other than those specified in this Agreement.
              </li>
              <li>
                You shall not modify the Platform or create derivative works
                based upon the Platform. The license granted herein does not
                entitle You to use the Platform, or any technology or
                intellectual property contained within it, as reference or
                inspiration for developing or creating another product in any
                way based upon the Platform.
              </li>
              <li>
                Both you and MACHNET shall retain their Intellectual Property
                Rights. Both you and MACHNET irrevocably guarantees the other
                Party that it’s Platform and the Intellectual Property Rights
                related to the Services under this Agreement are original works
                and will not infringe the Intellectual Property Rights of any
                third party. The breaching party shall fully indemnify and keep
                the non-breaching party fully indemnified at all times against
                any loss or damage which a Party may suffer or incur where its
                system or the Intellectual Property Rights related to the
                Services under this Agreement or any part thereof infringes the
                Intellectual Property Rights of a third party.
              </li>
              <li>
                Both you and MACHNET hereby agrees to fully indemnify and keep
                fully indemnified the other Party against any loss, cost,
                expenses, demands, liabilities or damage, for any infringement
                of the other Party’s Intellectual Property Rights arising out of
                or incident to the performance of the Services or its breach of
                any provision(s) of this Agreement in accordance with the
                provisions of Section 15 of this Agreement.
              </li>
              <li>
                Both you and MACHNET shall notify the other Party as soon as
                practicable of any infringement, suspected infringement or
                alleged infringement of the Intellectual Property Rights of any
                third party or of the other Party, including any claims
                therefrom affecting this Agreement.
              </li>
            </ol>
          </li>
          <li>
            <b>CONFIDENTIAL INFORMATION</b>
            <ol type="1">
              <li>
                "Confidential Information" means any non-public information
                communicated by one Party to the other Party under this
                Agreement which is marked or declared as "Confidential" or
                "Proprietary" or if not so marked or declared, should be
                reasonably understood from the context of disclosure or from the
                information itself, to be confidential.
              </li>
              <li>
                Notwithstanding the foregoing, the following types of
                information shall not be included within the definition of
                Confidential Information: (i) information which, at the time of
                disclosure, is or was in possession of the receiving Party as
                substantiated in writing; (ii) information which, subsequent to
                the time of disclosure, enters the public domain without breach
                of this Agreement; and/or (iii) information that is required to
                be disclosed pursuant to any statute, regulation, order,
                subpoena or document discovery request, or in response to an
                inquiry or request of any governmental or regulatory agency or
                self-regulation organization, provided that, to the extent not
                prohibited by Applicable Law, notice of such disclosure is
                furnished to the disclosing Party as soon as practicable in
                order to afford the receiving Party an opportunity to seek a
                protective order (it being agreed that if the disclosing Party
                is unable to obtain or does not seek a protective order and the
                receiving Party is legally compelled to disclose such
                information, disclosure of such information may be made without
                liability).{' '}
              </li>
              <li>
                Each receiving Party must maintain the confidentiality of the
                disclosing Party’s Confidential Information and not use it for
                any purpose other than solely as required and necessary to
                perform the receiving Party’s obligations under this Agreement.
                In the event Confidential Information is required to be
                disclosed by a court, government agency, regulatory requirement,
                or similar disclosure requirement, the receiving Party must
                immediately notify the disclosing Party. Each receiving Party’s
                obligation to maintain the confidentiality of Confidential
                Information will survive the termination or expiration of the
                Agreement signed between you and MACHNET.
              </li>
            </ol>
          </li>
          <li>
            <b>INTELLECTUAL PROPERTY</b>
            <ol type="1">
              <li>
                MACHNET shall retain all rights, title and interest to its own
                intellectual property rights, including but not limited to
                copyright, trademarks, patents, registered and industrial
                designs in the Platform (collectively the "Intellectual Property
                Rights"). PARTNER does not acquire any rights, express or
                implied, in the Platform, other than those specified in this
                Agreement.
              </li>
              <li>
                You shall not modify the Platform or create derivative works
                based upon the Platform. The license granted herein does not
                entitle you to use the Platform, or any technology or
                intellectual property contained within it, as reference or
                inspiration for developing or creating another product in any
                way based upon the Platform.
              </li>
              <li>
                Each Party shall retain their Intellectual Property Rights. Each
                Party irrevocably guarantees the other Party that it’s Platform
                and the Intellectual Property Rights related to the Services
                under this Agreement are original works and will not infringe
                the Intellectual Property Rights of any third party. The
                breaching party shall fully indemnify and keep the non-breaching
                party fully indemnified at all times against any loss or damage
                which a Party may suffer or incur where its system or the
                Intellectual Property Rights related to the Services under this
                Agreement or any part thereof infringes the Intellectual
                Property Rights of a third party.
              </li>
              <li>
                Each Party hereby agrees to fully indemnify and keep fully
                indemnified the other Party against any loss, cost, expenses,
                demands, liabilities or damage, for any infringement of the
                other Party’s Intellectual Property Rights arising out of or
                incident to the performance of the Services or its breach of any
                provision(s) of this Agreement in accordance with the provisions
                of Section 15 of this Agreement.
              </li>
              <li>
                Each Party shall notify the other Party as soon as practicable
                of any infringement, suspected infringement or alleged
                infringement of the Intellectual Property Rights of any third
                party or of the other Party, including any claims therefrom
                affecting this Agreement.
              </li>
            </ol>
          </li>
          <li>
            <b>DISPUTE RESOLUTION</b>
            <ol type="1">
              <li>
                The Parties agree that any and all disputes, claims, or
                controversies arising out of or related to this Agreement,
                including any claims under any statute or regulation
                ("Disputes"), shall be submitted first to non-binding mediation.
                If the Disputes are not resolved through mediation, the Disputes
                then shall be submitted for binding arbitration. Unless the
                parties agree otherwise, any mediation and/or arbitration shall
                take place in the State of California, USA, and shall be
                administered by, and pursuant to the Commercial Arbitration
                Rules and Mediation Procedures of the American Arbitration
                Association ("AAA").
              </li>
              <li>
                Disputes shall be arbitrated on an individual basis. There shall
                be no right or authority for any Disputes to be arbitrated on a
                class action basis or in a purported representative capacity on
                behalf of the general public or other persons or entities
                similarly situated. The arbitrator’s authority to resolve
                Disputes and to make awards is limited to Disputes between the
                parties to this Agreement alone, and is subject to the
                limitations of liability set forth in this Agreement.
                Furthermore, Disputes brought by either party to this Agreement
                against the other may not be joined or consolidated in
                arbitration with Disputes brought by or against any third party,
                unless agreed to in writing by all parties. No arbitration award
                or decision on any Disputes shall be given preclusive effect as
                to issues or claims in any dispute with anyone who is not a
                party to the arbitration. Should any portion of this Section 7.2
                of this Dispute Resolution section be stricken from this
                Agreement or deemed otherwise unenforceable, then this entire
                Section 10 shall be stricken from this Agreement.
              </li>
              <li>
                All offers, promises, conduct and statements, whether written or
                oral, made in the course of negotiation, mediation or
                arbitration hereunder, or proceedings by either party to confirm
                arbitration awards hereunder are confidential, privileged, and
                inadmissible for any other purpose, including, without
                limitation, impeachment or estoppel, in any other litigation or
                proceeding involving any of the parties, provided that evidence
                that is otherwise admissible or discoverable will not be
                rendered inadmissible or non-discoverable as a result of its use
                in the negotiation or arbitration. Either party may seek
                equitable relief in arbitration prior to arbitration on the
                merits to preserve the status quo. The provisions of this
                Alternative Dispute Resolution paragraph may be enforced in a
                court of competent jurisdiction and the party seeking
                enforcement shall be entitled to an award of all costs, fees and
                expenses (including reasonable attorney fees) incurred in
                obtaining the enforcement of this provision, to be paid by the
                party against whom enforcement is ordered.
              </li>
            </ol>
          </li>
          <li>
            <b>GENERAL PROVISIONS</b>
            <ol type="1">
              <li>
                Neither Party shall be liable for any delay in or failure of
                performance under this Agreement resulting from events beyond
                its reasonable control, including but not limited to the
                following: hurricanes, tornadoes, floods, fires, explosions,
                epidemics, power failures, communication system failures,
                strikes, riots, wars or civil insurrections, acts of God, and so
                forth; provided, however, that a Party subject to any such force
                majeure shall promptly give the other written notice thereof and
                shall use reasonable efforts to remove or rectify any such force
                majeure condition as expeditiously as is commercially
                reasonable. If a force majeure event prevents Performance for
                more than thirty (30) days, the other Party may elect to
                terminate immediately upon notice, without penalty.
              </li>
              <li>
                This Agreement is governed by and will be construed in
                accordance with the laws of the State of California, exclusive
                of its choice of law provisions.
              </li>
              <li>
                All controversies arising from or relating to this Agreement or
                the performance or breach thereof shall be finally resolved
                through arbitration in the State and federal courts of the State
                of California, subject to the provisions of Section 7.
              </li>
              <li>
                All notices, demands and other communications required or
                permitted hereunder shall be made in writing and shall be deemed
                to have been duly given pursuant to delivery by hand, messenger,
                or courier or email, then postage prepaid, certified,
                registered, or first-class mail (confirmed via email) addressed
                to the addresses shown herein, below at the following email
                address: help@machnetinc.com
              </li>
            </ol>
          </li>
        </ol>
      </TOS>
    </Container>
  </Layout>
);

const TOS = styled.div`
  small {
    display: block;
    margin-bottom: 20px;
  }

  h1 {
    font-weight: 100;
    width: max-content;
    display: inline-block;
  }

  ol {
    li {
      margin-bottom: 50px;
      line-height: 25px;

      ol {
        li {
          margin-bottom: 10px;

          ol {
            li {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
`;
