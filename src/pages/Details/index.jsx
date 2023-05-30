import React from 'react';

import { VotingArea, DateInfo, ContainerDetails, QuestionDetailsWrapper, ContentDetails, ShareButtonContainer } from './styled';
import { RiShareFill } from 'react-icons/ri';
import { BsCalendar2 } from 'react-icons/bs';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { questionMock } from '../../mock/questions';
import { ButtonVote } from '../../components/ButtonVote';

import { formatData } from '../../helpers/formatData';

export function Details() {

  const question = questionMock[0].choices;

  const dataFormatada = formatData(questionMock[0].published_at);

  return (
    <ContainerDetails>

      <Header />

      <ContentDetails>

        <ShareButtonContainer>

          <DateInfo>
            <BsCalendar2 size={16} />
            {dataFormatada}
          </DateInfo>
          <ButtonText
            title="Share"
            icon={RiShareFill}
          />
        </ShareButtonContainer>


        <img src="https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)" alt="picture" />

        <QuestionDetailsWrapper>
          <p>{questionMock[0].question}</p>
          <VotingArea>
            {question.map((option, index) => <ButtonVote key={index} text={option?.choice} value={option?.votes} />)}
          </VotingArea>
        </QuestionDetailsWrapper>




        <Button title="Back" />
      </ContentDetails>

    </ContainerDetails>
  )
}