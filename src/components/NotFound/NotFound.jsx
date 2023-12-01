import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MLink, NotFoundBox, Timer } from './NotFound.styled';

export const NotFound = () => {
  const [timer, setTimer] = useState(10);
  const navigator = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer === 0) {
        navigator('/');
        return;
      }

      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timer, navigator]);
    
  return (
    <NotFoundBox>
      <p>
        Sorry, something went wrong. Click the link to go to the home page or
        wait 10 seconds
      </p>
      <Timer>{timer}</Timer>
      <MLink to="/">Go Home page</MLink>
    </NotFoundBox>
  );
};
