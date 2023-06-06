import React, { useState } from 'react';
import Modal from 'react-modal';

import {
  VotingArea,
  DateInfo,
  ContainerDetails,
  QuestionDetailsWrapper,
  ContentDetails,
  ShareButtonContainer,
  VoteModalContent,
  CloseModalButton,
} from './styled';
import { RiShareFill, RiDoorClosedLine } from 'react-icons/ri';
import { BsCalendar2 } from 'react-icons/bs';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { questionMock } from '../../mock/questions';
import { ButtonVote } from '../../components/ButtonVote';
import { customStyles } from './modalStyle';

import { formatData } from '../../helpers/formatData';
import { useNavigate } from 'react-router-dom';

export function Details() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const question = questionMock[0].choices;
  const dataFormatada = formatData(questionMock[0].published_at);
  const navigate = useNavigate();

  function handleBack() {
    return navigate(-1);
  }

  return (
    <>
      <ContainerDetails>
        <Header title='Question details' />

        <ContentDetails>
          <ShareButtonContainer>
            <DateInfo>
              <BsCalendar2 size={16} />
              {dataFormatada}
            </DateInfo>
            <ButtonText title='Share' icon={RiShareFill} />
          </ShareButtonContainer>
          <img
            src='https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)'
            alt='picture'
          />
          <QuestionDetailsWrapper>
            <p>{questionMock[0].question}</p>
            <VotingArea>
              {question.map((option, index) => (
                <ButtonVote
                  key={index}
                  text={option?.choice}
                  value={option?.votes}
                  onClick={() => {
                    console.log(modalIsOpen, 'click');
                    setModalIsOpen(true);
                  }}
                />
              ))}
            </VotingArea>
          </QuestionDetailsWrapper>
          <Button title='Back' onClick={handleBack} />
        </ContentDetails>
      </ContainerDetails>
      <Modal style={customStyles} isOpen={modalIsOpen}>
        <VoteModalContent>
          <h1>
            Confirmed vote.
            <br />
            Thanks!
          </h1>
          <CloseModalButton onClick={() => setModalIsOpen(false)}>
            Close
            <RiDoorClosedLine size={24} />
          </CloseModalButton>
        </VoteModalContent>
      </Modal>
    </>
  );
}
