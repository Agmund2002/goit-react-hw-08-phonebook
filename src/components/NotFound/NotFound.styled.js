import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundBox = styled.div`
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: ${p => p.theme.spacing(2)};
`

export const Timer = styled.span`
  color: ${p => p.theme.colors.error};
  font-weight: 500;
`;

export const MLink = styled(Link)`
  text-decoration: underline;
  font-weight: 500;
`;