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

const RefundPolicy = () => {
  return (
    <Container>
      <Title>Refund Policy for Nature's Lap Heritage Home & Resort</Title>

      <Section>
        <Text><strong>Effective Date:{' '}</strong>30 March 2025</Text>
        <Text>
          At <strong>Nature's Lap Heritage Home & Resort</strong>, we value our guests and strive to offer a transparent and fair refund process. Please read the following policy carefully to understand how refunds are handled.
        </Text>
      </Section>

      <Section>
        <Heading>1. Eligibility for Refunds</Heading>
        <List>
          <ListItem>Refunds are applicable only for bookings made directly through our official website or authorized channels.</ListItem>
          <ListItem>Refunds may be granted based on the timing of the cancellation and the terms outlined at the time of booking.</ListItem>
          <ListItem>Requests for refunds must be submitted via email or phone call with booking details.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>2. Cancellation-Based Refunds</Heading>
        <List>
          <ListItem>Full refund if cancellation is made at least <strong>7 days prior</strong> to the check-in date.</ListItem>
          <ListItem>50% refund if cancellation is made between <strong>3 to 6 days</strong> prior to the check-in date.</ListItem>
          <ListItem><strong>No refund</strong> for cancellations made within <strong>2 days</strong> of the check-in date or for no-shows.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>3. Early Check-Outs</Heading>
        <Text>
          Guests who choose to check out before their scheduled departure date will not be eligible for a refund for the unused nights unless special circumstances apply and are approved by management.
        </Text>
      </Section>

      <Section>
        <Heading>4. Refund Processing</Heading>
        <List>
          <ListItem>All approved refunds will be processed within <strong>7–10 business days</strong> of confirmation.</ListItem>
          <ListItem>Refunds will be credited back using the original method of payment.</ListItem>
          <ListItem>Processing times may vary depending on your bank or payment provider.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>5. Non-Refundable Situations</Heading>
        <List>
          <ListItem>Booking made under promotional or non-refundable rates.</ListItem>
          <ListItem>Refund requests made without valid booking references or past the scheduled date.</ListItem>
          <ListItem>Delays or issues caused by weather, travel conditions, or personal changes in plan.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>6. Contact for Refunds</Heading>
        <Text>If you need to request a refund or have questions about our refund process, contact us via:</Text>
        <List>
          <ListItem>📧 <strong>Email:{' '}</strong><a href="mailto:info@natureslap.com">info@natureslap.com</a></ListItem>
          <ListItem>📞 <strong>Phone:{' '}</strong>+919008526724 , +919449229249, +919482607000</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default RefundPolicy;
