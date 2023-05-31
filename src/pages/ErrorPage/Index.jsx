import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

import { ContainerError } from './styled';
import { Button } from '../../components/Button';

export function ErrorPage() {
  return (
    <ContainerError>
      <RiErrorWarningLine size={60} />

      <p>Ooops.. Page not found..</p>

      <Button title='Back Home' />
    </ContainerError>
  );
}
