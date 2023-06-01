import styled from 'styled-components';

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  gap: 32px;

  & img {
    border-radius: 10px;
  }
`;

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  gap: 10px;
`;

export const ShareButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const QuestionDetailsWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  flex-direction: column;
  padding: 12px 20px;
  border-radius: 10px;
  height: 100%;
  max-height: 240px;
  align-items: center;
  justify-content: space-evenly;

  & > p {
    font-size: 20px;
  }
`;

export const VotingArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  max-width: 360px;
  flex-wrap: wrap;
  gap: 12px;

  & button {
    max-width: 48%;
  }
`;

export const DateInfo = styled.div`
  display: inline-flex;
  gap: 10px;
  align-items: center;
`;
