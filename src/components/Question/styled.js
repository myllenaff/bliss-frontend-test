import styled, { css } from 'styled-components';

export const QuestionContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  gap: 16px;
  border: none;
  padding-right: 16px;

  & img {
    border-radius: 10px 0 0 10px;
  }
`;

export const QuestionInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 100%;
  width: 100%;
`;

export const QuestionOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
  gap: 10px;

  width: 100%;
`;

export const QuestionOption = styled.span`
  color: #000;
  padding: 8px;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_50};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
`;

export const QuestionHeader = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
