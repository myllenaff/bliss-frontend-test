import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Input } from '../../components/Input';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ContainerHome, Search, SectionHome, QuestionsList } from './styled';
import { Question } from '../../components/Question';
// import { questionMock } from '../../mock/questions';
// import { ButtonVote } from '../../components/ButtonVote';

// import { formatData } from '../../helpers/formatData';
// import { BsCalendar2 } from 'react-icons/bs';

export function Home() {
  return (
    <ContainerHome>
      <Header />
      <SectionHome>
        <Search>
          <Input placeholder='Pesquisar pelo título' icon={FiSearch} />
        </Search>

        <QuestionsList>
          <Question />
          <Question />
        </QuestionsList>

        <Button title='Show More' />
      </SectionHome>
    </ContainerHome>
  );
}
