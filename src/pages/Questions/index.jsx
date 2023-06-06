import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { ButtonText } from '../../components/ButtonText';
import { RiShareFill } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { Input } from '../../components/Input';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import {
  ContainerHome,
  Search,
  SectionHome,
  QuestionsList,
  ButtonSearchTop,
} from './styled';
import Question from '../../components/Question';

export function Questions() {
  const notify = () => toast.error('No more questions!', { duration: 1000 });

  const [questionsAPI, setQuestionsAPI] = useState([]);

  const limit = 10;
  const offset = 10;
  const filter = 'x';

  useEffect(() => {
    fetch(
      `https://private-anon-16b652f098-blissrecruitmentapi.apiary-mock.com/questions?limit=${limit}&offset=${offset}&filter=${filter}`
    )
      .then((response) => response.json())
      .then((json) => {
        return setQuestionsAPI(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContainerHome>
      <Header title='Questions list' />
      <SectionHome>
        <Search>
          <Input placeholder='Pesquisar pelo título' icon={FiSearch} />
          <ButtonSearchTop>
            <ButtonText title='Share' icon={RiShareFill} />
          </ButtonSearchTop>
        </Search>
        <QuestionsList>
          {questionsAPI.map((question, index) => (
            <Question
              key={index}
              id={question.id}
              title={question.question}
              image={question.thumb_url}
              choices={question.choices}
            />
          ))}
        </QuestionsList>
        <div>
          <Button title='Show More' onClick={notify} />
          <Toaster position='bottom-center' reverseOrder={false} />
        </div>
      </SectionHome>
    </ContainerHome>
  );
}
