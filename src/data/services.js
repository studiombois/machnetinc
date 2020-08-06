import ACH from 'assets/icons/ach.svg';
import Bank from 'assets/icons/bank.svg';
import Card from 'assets/icons/card.svg';
import Risk from 'assets/icons/risk.svg';
import Users from 'assets/icons/users.svg';
import Identity from 'assets/icons/identity.svg';
import Security from 'assets/icons/security.svg';
import Compliance from 'assets/icons/compliance.svg';
import UserVerified from 'assets/icons/user-verified.svg';
import MoneyTransfer from 'assets/icons/money-transfer.svg';
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

export const keyPoints = {
  title:'What we provide?',
  points:[
    {
      title:'regulatory compliance program',
      description: '',
      icon: Compliance
    },
    {
      title:'realtime user identification',
      description: '',
      icon: UserVerified
    },
    {
      title:'connect bank accounts and cards',
      description: '',
      icon: Card,
    },
    {
      title:'send p2p and business payments',
      description: '',
      icon: MoneyTransfer
    },
  ]
}

export const usecases = [
  {
    title:'User Verification',
    description: 'Realtime user KYC to send money',
    icon: UserVerified,
    height: '415px',
    api:'https://carbon.now.sh/embed?bg=rgba(239%2C242%2C252%2C1)&t=lucario&wt=none&l=text%2Fx-java&ds=true&dsyoff=16px&dsblur=42px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=curl%2520-X%2520POST%2520https%253A%252F%252Fsandbox.machpay.com%252Fv2%252Fsenders%2520%255C%250A%2520%2520-H%2520%27Accept%253A%2520application%252Fjson%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Id%253A%2520clientid%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Secret%253A%2520clientsecret%27%2520%255C%250A%2520%2520-d%2520%257B%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522first_name%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522middle_name%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522last_name%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522mobile_phone%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522email%2522%253A%2520%2522user%2540example.com%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522state%2522%253A%2520%2522string%2522%2520%255C%250A%2520%2520%257D'
  },
  {
    title:'Add Payment',
    description: 'Realtime user KYC to send money',
    icon: Bank,
    height: '233px',
    api:'https://carbon.now.sh/embed?bg=rgba(239%2C242%2C252%2C1)&t=lucario&wt=none&l=text%2Fx-java&ds=true&dsyoff=0px&dsblur=41px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=10.5px&lh=133%25&si=false&es=2x&wm=false&code=curl%2520-X%2520GET%2520https%253A%252F%252Fsandbox.machpay.com%252Fv2%252Fsenders%252Ffunding-sources%2520%255C%250A%2520%2520-H%2520%27Accept%253A%2520application%252Fjson%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Id%253A%2520clientid%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Secret%253A%2520clientsecret%27'
  },
  {
    title:'Add Beneficiary',
    description: 'Realtime user KYC to send money',
    icon: Users,
    height: '390px',
    api:'https://carbon.now.sh/embed?bg=rgba(239%2C242%2C252%2C1)&t=lucario&wt=none&l=text%2Fx-java&ds=true&dsyoff=0px&dsblur=41px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=10.5px&lh=133%25&si=false&es=2x&wm=false&code=curl%2520-X%2520POST%2520https%253A%252F%252Fsandbox.machpay.com%252Fv2%252Fsenders%252F%257BsenderId%257D%252Frecipients%2520%255C%250A%2520%2520-H%2520%27Accept%253A%2520application%252Fjson%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Id%253A%2520clientid%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Secret%253A%2520clientsecret%27%2520%255C%250A%2520%2520-d%2520%257B%2520%255C%250A%2520%2520%2520%2520%2522first_name%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522last_name%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522country%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522address_line1%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522city%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522postal_code%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522province%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522email%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522mobile_phone%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%257D'
  },
  {
    title:'Create Transaction',
    description: 'Realtime user KYC to send money',
    icon: GlobalSettlement,
    height: '467px',
    api:'https://carbon.now.sh/embed?bg=rgba(239%2C242%2C252%2C1)&t=lucario&wt=none&l=text%2Fx-java&ds=true&dsyoff=0px&dsblur=41px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=10.5px&lh=133%25&si=false&es=2x&wm=false&code=curl%2520-X%2520POST%2520https%253A%252F%252Fsandbox.api.machpay.com%252Fv2%252Fsenders%252F%257BsenderId%257D%252Ftransactions%2520%255C%250A%2520%2520-H%2520%27Accept%253A%2520application%252Fjson%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Id%253A%2520clientid%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Secret%253A%2520clientsecret%27%2520%255C%250A%2520%2520-H%2520%27X-Idempotency-Key%253A%2520idempotencykey%27%2520%255C%250A%2520%2520-d%2520%257B%2520%255C%250A%2520%2520%2520%2520%2522sender_amount%2522%253A%25200.01%252C%2520%255C%250A%2520%2520%2520%2520%2522exchange_rate%2522%253A%25201.00%252C%2520%255C%250A%2520%2520%2520%2520%2522recipient_amount%2522%253A%25200.01%252C%2520%255C%250A%2520%2520%2520%2520%2522fee_amount%2522%253A%25200%252C%2520%255C%250A%2520%2520%2520%2520%2522recipient_currency%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522sender_id%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522sender_funding_account_id%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522funding_source%2522%253A%2520%2522CARD%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522recipient_id%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522recipient_bank_id%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522note%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522remittance_purpose%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522ip_address%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2522payout_method%2522%253A%2520%2522BANK_DEPOSIT%2522%2520%255C%250A%2520%2520%257D'
  },
];
