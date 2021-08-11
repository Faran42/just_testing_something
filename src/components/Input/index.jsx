import React from 'react';

import { Container, Label, TextField } from './styles';

export function Input({ label }) {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <TextField
        placeholder="d=(^_^)=b"
      />
    </Container>
  )
}
