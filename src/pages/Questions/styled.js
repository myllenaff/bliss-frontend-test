import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const SectionHome = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  height: 100%;
  gap: 10px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 64px 64px 0;
`;

export const ButtonSearchTop = styled.div`
  margin-left: 20px;
`;

export const QuestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
