import React from 'react';
import {
  QuestionContainer,
  QuestionInfos,
  QuestionOptions,
  QuestionOption,
} from './styled';

export function Question() {
  return (
    <QuestionContainer>
      <img
        src='https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)'
        alt=''
      />

      <QuestionInfos>
        <p>Titulo da questão</p>

        <QuestionOptions>
          <QuestionOption>opcao</QuestionOption>
          <QuestionOption>opcao</QuestionOption>
          <QuestionOption>opcao</QuestionOption>
          <QuestionOption>opcao</QuestionOption>
        </QuestionOptions>
      </QuestionInfos>
    </QuestionContainer>
  );
}
