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

const Terms = () => {
  return (
    <Container>
      <Title>Terms & Conditions for Nature's Lap Heritage Home & Resort</Title>

      <Section>
        <Text><strong>Effective Date:{' '}</strong>30 March 2025</Text>
        <Text>
          By accessing or using the services provided by <strong>Nature's Lap Heritage Home & Resort</strong>, you agree to be bound by the following terms and conditions. Please read them carefully before proceeding with any booking or interaction with our website and services.
        </Text>
      </Section>

      <Section>
        <Heading>1. Booking & Reservations</Heading>
        <List>
          <ListItem>All reservations are subject to availability and confirmation.</ListItem>
          <ListItem>A valid government-issued ID must be presented at check-in.</ListItem>
          <ListItem>Guests must be at least 18 years of age to make a booking.</ListItem>
          <ListItem>Advance payments may be required to confirm bookings.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>2. Cancellation & Refund Policy</Heading>
        <List>
          <ListItem>Cancellations made 7 days before check-in will receive a full refund.</ListItem>
          <ListItem>Cancellations within 7 days of check-in may incur a cancellation fee.</ListItem>
          <ListItem>No-shows or early check-outs are non-refundable.</ListItem>
          <ListItem>Refunds, if applicable, will be processed within 7–10 business days.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>3. Guest Responsibilities</Heading>
        <List>
          <ListItem>Guests are expected to maintain decorum and respect property and staff.</ListItem>
          <ListItem>Any damage to property caused by a guest may be charged to the guest’s account.</ListItem>
          <ListItem>Illegal activities or misconduct will result in immediate eviction without refund.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>4. Use of Facilities</Heading>
        <List>
          <ListItem>Facilities are provided for registered guests only.</ListItem>
          <ListItem>Timings and usage restrictions apply to amenities like the dining area, garden, and bonfire space.</ListItem>
          <ListItem>Management reserves the right to restrict access to certain facilities during maintenance or private events.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>5. Limitation of Liability</Heading>
        <Text>
          While we strive to ensure a safe and pleasant experience, <strong>Nature's Lap Heritage Home & Resort</strong> is not liable for:
        </Text>
        <List>
          <ListItem>Loss or theft of personal belongings.</ListItem>
          <ListItem>Injuries or accidents resulting from negligence, misuse of facilities, or natural events.</ListItem>
          <ListItem>Delays or disruptions caused by unforeseen circumstances such as weather, government regulations, or acts of God.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>6. Modifications</Heading>
        <Text>
          We reserve the right to amend these Terms & Conditions at any time without prior notice. The updated version will be posted on this page and effective immediately.
        </Text>
      </Section>

      <Section>
        <Heading>7. Governing Law</Heading>
        <Text>
          These Terms & Conditions are governed by and construed in accordance with the laws of Karnataka, India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ballari.
        </Text>
      </Section>

      <Section>
        <Heading>8. Contact Information</Heading>
        <Text>If you have any questions about these Terms & Conditions, please contact us at:</Text>
        <List>
          <ListItem>📧 <strong>Email:{' '}</strong><a href="mailto:info@natureslap.com">info@natureslap.com</a></ListItem>
          <ListItem>📞 <strong>Phone:{' '}</strong>+919008526724 , +919449229249, +919482607000</ListItem>
          <ListItem>🏢 <strong>Address:{' '}</strong>A/C 154, 155 Survey No 293, 295, Vaddu Road, Opp Jindal Township, Vaddu, Ballari, Karnataka, 583123</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Terms;
