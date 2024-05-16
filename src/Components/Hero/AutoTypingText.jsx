import React, { useState, useEffect } from 'react';

const AutoTypingText = ({ professions, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let interval;

    if (isTyping) {
      interval = setInterval(() => {
        setDisplayText((prevDisplayText) => {
          const nextDisplayText = professions[currentIndex].substring(0, prevDisplayText.length + 1);
          if (nextDisplayText === professions[currentIndex]) {
            setIsTyping(false);
          }
          return nextDisplayText;
        });
      }, speed);
    } else {
      interval = setInterval(() => {
        setDisplayText((prevDisplayText) => {
          const nextDisplayText = prevDisplayText.substring(0, prevDisplayText.length - 1);
          if (nextDisplayText === '') {
            setIsTyping(true);
            setCurrentIndex((currentIndex + 1) % professions.length);
          }
          return nextDisplayText;
        });
      }, speed);
    }

    return () => clearInterval(interval);
  }, [professions, speed, isTyping, currentIndex]);

  return <span>{displayText}</span>;
};

export default AutoTypingText;
