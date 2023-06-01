import React from 'react';

import { useNavigate } from 'react-router-dom';

import {
  QuestionContainer,
  QuestionInfos,
  QuestionOptions,
  QuestionOption,
  QuestionHeader,
} from './styled';

export function Question() {
  const navigate = useNavigate();

  function handleNavigate() {
    return navigate('/details/:question_id');
  }

  return (
    <QuestionContainer onClick={handleNavigate}>
      <img
        src='https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)'
        alt=''
      />
      <QuestionHeader>
        <QuestionInfos>
          <p>Titulo da questão</p>
        </QuestionInfos>

        <QuestionOptions>
          <QuestionOption>opcao</QuestionOption>
          <QuestionOption>opcao</QuestionOption>
          <QuestionOption>opcao</QuestionOption>
          <QuestionOption>opcao</QuestionOption>
        </QuestionOptions>
      </QuestionHeader>
    </QuestionContainer>
  );
}
