import React from 'react';

import { useNavigate } from 'react-router-dom';

import {
  QuestionContainer,
  QuestionInfos,
  QuestionOptions,
  QuestionOption,
  QuestionHeader,
} from './styled';

export default function Question({ id, title, choices, image }) {
  const navigate = useNavigate();

  function handleNavigate() {
    return navigate('/details/:question_id');
  }

  return (
    <QuestionContainer onClick={handleNavigate}>
      <img src={image} alt={`image-list-${id}`} />
      <QuestionHeader>
        <QuestionInfos>
          <p>{title}</p>
        </QuestionInfos>

        <QuestionOptions>
          {choices.map((option, index) => (
            <QuestionOption key={index}>{option.choice}</QuestionOption>
          ))}
        </QuestionOptions>
      </QuestionHeader>
    </QuestionContainer>
  );
}
