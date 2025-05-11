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

const Risks = () => {
  return (
    <Container>
      <Title>Risks & Disclaimer – Nature's Lap Heritage Home & Resort</Title>

      <Section>
        <Text><strong>Effective Date:{' '}</strong>30 March 2025</Text>
        <Text>
          At <strong>Nature's Lap Heritage Home & Resort</strong>, guest safety and comfort are our highest priorities. However, as our resort is located in a natural and semi-rural setting, guests should be aware of certain inherent risks and environmental factors. By booking and staying with us, you agree to accept these risks and disclaimers.
        </Text>
      </Section>

      <Section>
        <Heading>1. Natural Surroundings</Heading>
        <List>
          <ListItem>The resort is located amidst nature and may include uneven surfaces, rocks, unpaved pathways, and native vegetation.</ListItem>
          <ListItem>Encounters with insects, animals, or reptiles are possible, especially in outdoor areas.</ListItem>
          <ListItem>Guests are advised to wear appropriate footwear and take standard outdoor precautions.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>2. Weather & Environmental Conditions</Heading>
        <List>
          <ListItem>Weather in Ballari can vary greatly. Rain, heat, and winds may affect outdoor activities or access to certain areas.</ListItem>
          <ListItem>Outdoor events or services may be delayed, rescheduled, or canceled due to unpredictable conditions.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>3. Use of Amenities</Heading>
        <List>
          <ListItem>Facilities like bonfires, dining areas, and recreational zones must be used responsibly and under staff supervision where required.</ListItem>
          <ListItem>The resort is not responsible for injuries resulting from misuse of amenities or failure to follow safety instructions.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>4. Personal Responsibility</Heading>
        <List>
          <ListItem>Guests are responsible for their own safety and for supervising children or elderly members in their group.</ListItem>
          <ListItem>Valuables should be stored securely. The resort is not liable for lost or stolen personal belongings.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>5. Health & Medical</Heading>
        <List>
          <ListItem>There may be limited access to immediate medical facilities due to the location. Guests with medical conditions should plan accordingly.</ListItem>
          <ListItem>If you have allergies (e.g. insect bites, food), kindly inform the staff during check-in.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>6. Liability Disclaimer</Heading>
        <Text>
          <strong>Nature's Lap Heritage Home & Resort</strong> shall not be held liable for:
        </Text>
        <List>
          <ListItem>Injuries, illnesses, or accidents occurring during your stay, unless caused by proven negligence on our part.</ListItem>
          <ListItem>Any loss due to natural disasters, travel delays, or unforeseen incidents outside our control.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>7. Acknowledgement</Heading>
        <Text>
          By proceeding with a booking or visiting the property, guests acknowledge that they have read and understood this Risks & Disclaimer notice and agree to assume full responsibility for their choices and actions during their stay.
        </Text>
      </Section>

      <Section>
        <Heading>8. Contact Information</Heading>
        <Text>If you have any concerns or need clarification regarding this notice, please contact us:</Text>
        <List>
          <ListItem>📧 <strong>Email:{' '}</strong><a href="mailto:info@natureslap.com">info@natureslap.com</a></ListItem>
          <ListItem>📞 <strong>Phone:{' '}</strong>+919008526724 , +919449229249, +919482607000</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Risks;
