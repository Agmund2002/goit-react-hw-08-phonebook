import styled from 'styled-components';
import { ImBin } from 'react-icons/im';

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    background-color: ${p => p.theme.colors.mainBorder};
  }

  &:active {
    background-color: ${p => p.theme.colors.greyTxt};
  }
`;

export const Icon = styled(ImBin)`
  fill: ${p => p.theme.colors.error};
`;
