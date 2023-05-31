import styled from 'styled-components';

export const ContainerLoading = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 40px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
