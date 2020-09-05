import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';
import Recaptcha from 'react-google-recaptcha';
import { Formik, Form, FastField, ErrorMessage } from 'formik';

import { Button, Input } from '@ui';
import { Error, Center, InputField, Row } from './styles';

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      phone: '',
      message: '',
      linkedin: '',
      recaptcha: '',
      companyName: '',
      companyType: '',
      companyWebsite: '',
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string()
        .matches(/^[a-zA-Z]{2,20}(?:\s[a-zA-Z]{2,20})+$/, "Invalid full name")
        .max(20, 'Full name must be at most 20 characters')
        .required('Full name is required'),
      phone: Yup.string()
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,'Invalid phone number')
        .max(11, 'Invalid phone number')
        .required('Phone number is required'),
      companyType: Yup.string().required('This field is required'),
      companyName: Yup.string()
        .min(3, 'Company name must be at least 3 characters')
        .max(40, 'Company name must be at most 40 characters')
        .required('Company name is required'),
      companyWebsite: Yup.string()
        .matches(/^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,'Invalid url')
        .required('Website url is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string()
        .max(300)
        .required('Message field is required'),
      linkedin: Yup.string()
        .matches(/^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Invalid url')
        .notRequired(),
      recaptcha: Yup.string().required('Robots are not welcome yet!'),
    })}
    onSubmit={async (
      {
        name,
        email,
        phone,
        message,
        linkedin,
        companyType,
        companyName,
        companyWebsite,
      },
      { setSubmitting, resetForm, setFieldValue }
    ) => {
      const ticket = {
        name: name,
        phone: phone,
        description: message,
        type: 'Question',
        subject: 'Website Enquiry for ' + companyType,
        email: email,
        priority: 1,
        status: 2,
        tags: ['Website Lead', 'Prospect'],
        custom_fields: {
          cf_company: companyName,
          cf_website: companyWebsite,
          cf_linkedin: linkedin,
        },
      };

      try {
        await axios({
          method: 'POST',
          url: `${process.env.GATSBY_FRESHDESK_URL}`,
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Basic ' + btoa(process.env.GATSBY_FRESHDESK_API_KEY + ':x'),
          },
          data: JSON.stringify(ticket),
        })
          .then(() => {
            setFieldValue('success', true);
          })
          .catch((err) => {
            console.log(err);
          });

        setSubmitting(false);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue('success', false);
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form style={{ margin: '0 -1rem 0 -1rem' }}>
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full Name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>

        <Row>
          <InputField>
            <Input
              id="email"
              aria-label="email"
              component="input"
              as={FastField}
              type="email"
              name="email"
              placeholder="Email*"
              error={touched.email && errors.email}
            />
            <ErrorMessage component={Error} name="email" />
          </InputField>
          <InputField>
            <Input
              id="phone"
              aria-label="phone"
              component="input"
              as={FastField}
              type="tel"
              name="phone"
              placeholder="Phone*"
              error={touched.phone && errors.phone}
            />
            <ErrorMessage component={Error} name="phone" />
          </InputField>
        </Row>

        <Row>
          <InputField>
            <Input
              id="companyName"
              aria-label="companyName"
              component="input"
              as={FastField}
              type="text"
              name="companyName"
              placeholder="Company Name*"
              error={touched.companyName && errors.companyName}
            />
            <ErrorMessage component={Error} name="companyName" />
          </InputField>
          <InputField>
            <Input
              id="companyType"
              aria-label="companyType"
              component="select"
              as={FastField}
              type="text"
              name="companyType"
              error={touched.companyType && errors.companyType}
            >
              <option value="" disabled selected>Company Type</option>
              <option value="Money Service Business in the US">
                Money Service Business in the US
              </option>
              <option value="Money Transfer Operator outside the US">
                Money Transfer Operator outside the US
              </option>
              <option value="Diaspora Serving Business">
                Diaspora Serving Business
              </option>
              <option value="Fintech and Others">Fintech and Others</option>
            </Input>
            <ErrorMessage component={Error} name="companyType" />
          </InputField>
        </Row>

        <Row>
          <InputField>
            <Input
              id="companyWebsite"
              aria-label="companyWebsite"
              component="input"
              as={FastField}
              type="text"
              name="companyWebsite"
              placeholder="Website*"
              error={touched.companyWebsite && errors.companyWebsite}
            />
            <ErrorMessage component={Error} name="companyWebsite" />
          </InputField>
          <InputField>
            <Input
              id="linkedin"
              aria-label="linkedin"
              component="input"
              as={FastField}
              type="text"
              name="linkedin"
              placeholder="Linkedin url"
            />
            <ErrorMessage component={Error} name="linkedin" />
          </InputField>
        </Row>

        <InputField>
          <Input
            as={FastField}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" />
        </InputField>

        {values.name && values.email && values.message && (
          <InputField>
            <FastField
              component={Recaptcha}
              sitekey={process.env.GATSBY_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={(value) => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component={Error} name="recaptcha" />
          </InputField>
        )}

        {values.success && (
          <InputField>
            <Center>
              <h4>
                Your message has been successfully sent, We will get back to you
                ASAP!
              </h4>
            </Center>
          </InputField>
        )}

        <Center>
          <Button secondary type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Center>
      </Form>
    )}
  </Formik>
);
