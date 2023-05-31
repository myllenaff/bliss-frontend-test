import styled, { css } from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 140px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 12px 20px;
  gap: 16px;
`;

export const QuestionInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 100%;
  width: 100%;
`;

export const QuestionOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
`;

export const QuestionOption = styled.span`
  color: #000;
  padding: 8px;
  border-radius: 10px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_50};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
`;
