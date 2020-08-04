import ACH from 'assets/icons/ach.svg';
import Bank from 'assets/icons/bank.svg';
import Card from 'assets/icons/card.svg';
import Risk from 'assets/icons/risk.svg';
import Identity from 'assets/icons/identity.svg';
import Security from 'assets/icons/security.svg';
import Compliance from 'assets/icons/compliance.svg';
import GlobalSettlement from 'assets/icons/global-settlement.svg';

export const services = [
  {
    title: "Identity",
    description: "Multi-layered process to access thousands of data sources containing billions of public records to instantly validate an identity while also providing predictive, intelligent information around that identity.",
    icon: Identity
  },
  {
    title: "Instant account verification",
    description: "Instantly authenticate bank accounts. Protect against overdraft and NSF fees by having visibility into available funds. Retrieve transaction data, including enhanced geolocation, merchant, and category information.",
    icon: Bank
  },
  {
    title: "Same day ACH",
    description: "Same day and next day ACH transfer available as per the requirement of the speed, depending on the user and type of transfer.",
    icon: ACH
  },
  {
    title: "Card Payments",
    description: "Receive Payments from any debit or credit card. Know card type and fee prior to payment. Disburse to any US Visa/MasterCard/Discover instantly. Verify card account ownership in real-time. PCI Security Standards.",
    icon: Card
  },
  {
    title:"Risk & fraud",
    description: "Real-time risk assessment using personal, financial and behavioral signals from our platform and a global data network.",
    icon: Risk
  },
  {
    title: "Built-in-compliance",
    description:"Sanction List checks, including requirements for Customer Identification Programs (CIP) and Office of Foreign Assets Controls (OFAC).",
    icon: Compliance,
  },
  {
    title: "Security",
    description:"End-to-end encryption, PCI compliant card processing, transaction monitoring, built in risk assessment & fraud detection applications.",
    icon: Security,
  },{
    title: "Global settlement & Payout",
    description:"Single API for real‑time Cross‑border Payments in more than 100 countries. Send payment instantly in local currency. Funds received directly into a mobile wallet, bank account or via cash-pickup.",
    icon: GlobalSettlement,
  }
]