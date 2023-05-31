import styled from 'styled-components';

export const ContainerError = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  font-size: 20px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  & p {
    width: 400px;
    text-align: center;
  }

  & button {
    width: 400px;
  }
`;
