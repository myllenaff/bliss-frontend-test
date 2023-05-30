import styled from 'styled-components';

export const ContainerButtonText = styled.button`
  display: inline-flex;
  background: none;
  color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
  font-size: 16px;
  gap: 10px;
`;