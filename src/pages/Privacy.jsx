import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.8;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
  margin-bottom: 15px;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Privacy = () => {
  return (
    <Container>
      <Title>Privacy Policy for Nature's Lap Heritage Home & Resort</Title>

      <Section>
        <Text><strong>Effective Date:{' '}</strong>30 March 2025</Text>
        <Text>
          Welcome to <strong>Nature's Lap Heritage Home & Resort</strong>. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
        </Text>
      </Section>

      <Section>
        <Heading>1. Information We Collect</Heading>
        <Text>We may collect the following types of information when you interact with us:</Text>
        <List>
          <ListItem><strong>Personal Information:</strong> When you make a reservation, inquire about our services, or sign up for offers, we may collect details such as your name, email address, phone number, physical address, and payment information.</ListItem>
          <ListItem><strong>Booking and Transaction Data:</strong> We retain records of your bookings, payment history, and transaction details for billing and service purposes.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>2. How We Use Your Information</Heading>
        <Text>We use the information we collect for the following purposes:</Text>
        <List>
          <ListItem>To <strong>process reservations</strong> and provide the requested services.</ListItem>
          <ListItem>To <strong>communicate with you</strong> regarding your booking, send confirmations, or respond to inquiries.</ListItem>
          <ListItem>To send <strong>promotional emails</strong> or special offers, if you have opted in.</ListItem>
          <ListItem>To comply with <strong>legal obligations</strong> and prevent fraudulent activities.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>3. Data Sharing and Disclosure</Heading>
        <Text>We value your privacy and do not sell or rent your personal information to third parties. However, we may share your data with:</Text>
        <List>
          <ListItem><strong>Payment service providers</strong> to process transactions securely.</ListItem>
          {/* <ListItem><strong>Third-party service providers</strong> who help us manage bookings, send emails, or analyze website traffic.</ListItem> */}
          <ListItem><strong>Legal authorities</strong> if required by law or to protect our legal rights.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>4. Data Security</Heading>
        <Text>We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, loss, or misuse. These include:</Text>
        <List>
          <ListItem>Secure socket layer (SSL) encryption for online transactions.</ListItem>
          <ListItem>Restricted access to personal data by authorized personnel only.</ListItem>
          <ListItem>Regular security audits and data protection assessments.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>5. Your Rights</Heading>
        <Text>You have the following rights regarding your personal information:</Text>
        <List>
          <ListItem><strong>Access and Correction:</strong> You can request a copy of your personal data or ask us to correct any inaccuracies.</ListItem>
          <ListItem><strong>Data Deletion:</strong> You may request that we delete your personal information, subject to legal or contractual obligations.</ListItem>
          <ListItem><strong>Withdraw Consent:</strong> You can unsubscribe from marketing communications at any time.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>6. Changes to This Privacy Policy</Heading>
        <Text>We may update this Privacy Policy periodically. Changes will be posted on this page with the updated effective date. We encourage you to review this policy regularly.</Text>
      </Section>

      <Section>
        <Heading>7. Contact Us</Heading>
        <Text>If you have any questions, concerns, or requests regarding your privacy or this policy, please contact us at:</Text>
        <List>
          <ListItem>📧 <strong>Email:{' '}</strong> <a href="mailto:info@natureslap.com">info@natureslap.com</a></ListItem>
          <ListItem>📞 <strong>Phone:{' '}</strong>+919008526724 , +919449229249, +919482607000</ListItem>
          <ListItem>🏢 <strong>Address:{' '}</strong>A/C 154, 155 Survey No 293, 295, Vaddu Road, Opp Jindal Township, Vaddu, Ballari, Karnataka, 583123</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Privacy;
