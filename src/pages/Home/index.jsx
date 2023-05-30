import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Input } from '../../components/Input';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ContainerHome, Search } from './styled';




export function Home() {
  return (
    <ContainerHome>

      <Header />
      <Search>
        <Input
          placeholder='Pesquisar pelo título'
          icon={FiSearch}
        />

      </Search>
      <Button title="Show More" />

    </ContainerHome>


  )

}
