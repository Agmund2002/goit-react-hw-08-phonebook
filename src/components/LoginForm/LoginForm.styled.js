import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ModernForm = styled(Form)`
  height: 500px;
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

  width: 300px;
  font-weight: 500;
`;

export const ModernField = styled(Field)`
  width: 100%;
  font-size: 16px;
  border: 1px solid ${p => p.theme.colors.mainBorder};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
  border-radius: 5px;

  &.password {
    padding-right: ${p => p.theme.spacing(7)};
  }
`;

export const ModernErrorMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 16px;
`;

export const PassBox = styled.div`
position: relative;
`;

export const ShowPassBtn = styled.button`
  position: absolute;
  bottom: 2px;
  right: 6px;

  cursor: pointer;
  
`;
