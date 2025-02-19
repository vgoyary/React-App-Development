import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import { Button, Box } from '@mui/material';  // MUI components

interface CounterProps {
  initialCount?: number; // Optional initial count
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    setLevel(0);
  }, []);

  const [level, setLevel] = useState(0);

  const updateLevel = useCallback(() => {
    setLevel(prevLevel => {
      const newLevel = Math.min(prevLevel + 1, 10); // Limit to max level 10
      return newLevel;
    });
  }, []);

  // Animation Variants
  const boxVariants = {
    initial: { height: 0, backgroundColor: 'rgba(0, 123, 255, 0)' },
    animate: {
      height: `${level * 10}px`, // Adjust factor as needed
      backgroundColor: `rgba(0, 123, 255, ${level * 0.1})`, // Example color change
      transition: { duration: 0.3, ease: "easeInOut" }, // Customize animation
    },
  };

  return (
    <Box sx={{textAlign: 'center', padding: '20px'}}>
      <motion.div
        style={{ width: '100%', transition: 'height 0.3s ease' }}
        variants={boxVariants}
        initial="initial"
        animate="animate"
      >
        <Box p={2}>
          <h2>Counter: {count}</h2>
        </Box>
      </motion.div>

      <Button variant="contained" onClick={increment} sx={{ margin: '5px' }} onMouseDown={updateLevel}>
        Increment
      </Button>
      <Button variant="contained" onClick={decrement} sx={{ margin: '5px' }}>
        Decrement
      </Button>
      <Button variant="contained" color="error" onClick={reset} sx={{ margin: '5px' }}>
        Reset
      </Button>
    </Box>
  );
};

export default Counter;