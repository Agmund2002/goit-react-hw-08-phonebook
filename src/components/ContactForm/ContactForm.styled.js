import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const ModernForm = styled(Form)`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(5)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};

  width: 270px;
  font-weight: 500;
`;

export const ModernField = styled(Field)`
  width: 100%;
  font-size: 16px;
  border: 1px solid ${p => p.theme.colors.mainBorder};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
  border-radius: 5px;
`;

export const ModernErrorMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 16px;
`;

export const Button = styled.button`
 max-width: 125px;
`;
