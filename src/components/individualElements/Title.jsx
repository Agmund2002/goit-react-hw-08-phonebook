import { MainTitleSC, MessageSC, SecondaryTitleSC } from "./Title.styled";

export const MainTitle = ({ isVisible = true, children }) => {
  return <MainTitleSC className={!isVisible && 'visually-hidden'}>{children}</MainTitleSC>;
};

export const SecondaryTitle = ({ isVisible = true, children }) => {
  return <SecondaryTitleSC className={!isVisible && 'visually-hidden'}>{children}</SecondaryTitleSC>;
};

export const Message = ({ isVisible = true, children }) => {
  return <MessageSC className={!isVisible && 'visually-hidden'}>{children}</MessageSC>;
};
