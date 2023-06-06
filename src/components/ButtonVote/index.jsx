import React from 'react';

import { StyledButtonVote } from './styled';

export function ButtonVote({ text, value, ...props }) {
  return (
    <StyledButtonVote type='button' {...props}>
      <span>{text}</span>
      <span>{value}</span>
    </StyledButtonVote>
  );
}
