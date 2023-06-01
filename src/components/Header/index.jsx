import React from 'react';
import { Container } from './styled';

export function Header({ title }) {
  return (
    <Container>
      <div>{title}</div>
    </Container>
  );
}
