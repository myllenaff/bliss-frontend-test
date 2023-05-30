import React from 'react';

import { StyledButtonVote } from './styled';


export function ButtonVote({ text, value }) {
  return (
    <StyledButtonVote>
      <span>{text}</span>
      <span>{value}</span>
    </StyledButtonVote>
  )
}