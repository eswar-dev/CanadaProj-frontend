import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const TypingAnimation = ({ text, animatedWord }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(typingTimer);
      }
    }, 5); // Adjust typing speed here (milliseconds per character)

    return () => clearInterval(typingTimer);
  }, [text]);

  return (
    <Typography fontSize={'50px'} display={'inline-block'} color={'#1561ad'}>
      {displayText.replace(animatedWord, `${animatedWord} `)}
    </Typography>
  );
};

export default TypingAnimation;
