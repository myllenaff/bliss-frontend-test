import React from 'react';
import { ContainerInput } from './styled';

export function Input({ icon: Icon, ...rest }) {
  return (
    <ContainerInput>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </ContainerInput>
  );
}