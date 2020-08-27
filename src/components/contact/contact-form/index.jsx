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
      name: Yup.string().required('Full name is required'),
      phone: Yup.string().required('Phone number is required'),
      companyType: Yup.string().required('This field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
      recaptcha: Yup.string().required('Robots are not welcome yet!'),
    })}

    onSubmit={async ({ name, email, message }, { setSubmitting, resetForm, setFieldValue }) => {
      try {
        await axios({
          method: 'POST',
          url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            name,
            email,
            phone,
            message,
            linkedin,
            companyType,
            companyName,
            companyWebsite,
          }),
        });
        setSubmitting(false);
        setFieldValue('success', true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue('success', false);
        alert('Something went wrong, please try again!') // eslint-disable-line
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form style={{ margin: "0 -1rem 0 -1rem" }}>
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full name*"
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
              id="company"
              aria-label="company"
              component="input"
              as={FastField}
              type="text"
              name="company"
              placeholder="Company Name"
            />
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
              <option value="">Select One:</option>
              <option value="Money Service Business in the US">Money Service Business in the US</option>
              <option value="Money Transfer Operator outside the US">Money Transfer Operator outside the US</option>
              <option value="Diaspora Serving Business">Diaspora Serving Business</option>
              <option value="Fintech and Others">Fintech and Others</option>
            </Input>
            <ErrorMessage component={Error} name="companyType" />
          </InputField>
        </Row>

        <Row>
          <InputField>
            <Input
              id="website"
              aria-label="website"
              component="input"
              as={FastField}
              type="text"
              name="website"
              placeholder="Website"
            />
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
              sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={value => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component={Error} name="recaptcha" />
          </InputField>
        )}

        {values.success && (
          <InputField>
            <Center>
              <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
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
