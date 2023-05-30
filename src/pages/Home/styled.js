import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;

  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;