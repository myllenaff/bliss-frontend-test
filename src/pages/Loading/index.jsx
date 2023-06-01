import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContainerLoading } from './styled';

export function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      'https://private-anon-0fd6771c03-blissrecruitmentapi.apiary-mock.com/health'
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.status === 'OK') return navigate('/questions');
        if (json.status !== 'OK') return navigate('/not-found');
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContainerLoading>
      <p>Loading...</p>
    </ContainerLoading>
  );
}
