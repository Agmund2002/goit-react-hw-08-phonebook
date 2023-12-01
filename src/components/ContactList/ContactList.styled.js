import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};

  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  gap: ${p => p.theme.spacing(3)};
  align-items: center;
`;