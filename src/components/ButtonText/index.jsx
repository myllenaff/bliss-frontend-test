import React from 'react';

import { ContainerButtonText } from './styled';


export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <ContainerButtonText
      type='button'
      {...rest}
    >
      {title}
      {Icon && <Icon size={25} />}
    </ContainerButtonText>
  )
}