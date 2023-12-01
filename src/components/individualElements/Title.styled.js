import styled from 'styled-components';

export const MainTitleSC = styled.h1`
  display: none;

  &.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  @media only screen and (min-width: 768px) {
    display: block;
    font-size: 28px;
    color: ${p => p.theme.colors.active};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.48);
  }
`;

export const SecondaryTitleSC = styled.h2`
  margin-bottom: ${p => p.theme.spacing(5)};

  &.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const MessageSC = styled.p`
  font-size: 18px;
  color: ${p => p.theme.colors.error};

  &.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
