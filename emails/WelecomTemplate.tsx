import React from 'react';
import { Html, Body, Preview, Text, Link, Container, Tailwind } from '@react-email/components'

interface WelecomeTemplateProps {
  name : string;
}

const WelecomTemplate = ({ name } : WelecomeTemplateProps) => {

  return (
    <Html>
      <Preview>Welcome to my site</Preview>
      <Tailwind>
      <Body className="bg-slate-50 font-sans">
        <Container className="bg-slate-50">
          <Text className="text-2xl font-bold text-teal-700">Hello {name} welcome to my website</Text>
          <Link href='http://localhost:3000'>Go back</Link>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  )
}

export default WelecomTemplate;