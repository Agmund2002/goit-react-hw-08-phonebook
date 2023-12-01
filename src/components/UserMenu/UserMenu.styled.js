import styled from 'styled-components';

export const UserMenuBox = styled.div`
  margin-left: auto;

  display: flex;
  align-items: baseline;
  gap: ${p => p.theme.spacing(3)};
`;

export const Email = styled.span`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    color: ${p => p.theme.colors.greyTxt};
    font-style: italic;
  }
`;
