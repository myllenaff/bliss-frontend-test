import React from 'react';
import { FiWifiOff } from 'react-icons/fi';

import { ContainerOff } from './styled';

export function Offline() {
  return (
    <ContainerOff>
      <FiWifiOff size={60} />

      <p>
        It seems that you are offline!
        <br />
        Please, check your internet connection and try again.
        <br />
        <br />
        Thank you!.
      </p>
    </ContainerOff>
  );
}
