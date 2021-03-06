import React from 'react';

import { Container, Label, TextField } from './styles';

export function Input({ label, value, onChange }) {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <TextField
        placeholder="d=(^_^)=b"
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}
