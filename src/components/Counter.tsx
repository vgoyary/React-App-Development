import React from "react";
import { motion } from "framer-motion";
import { Button, Box, Typography } from "@mui/material";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Accept props in Counter Component
const Counter: React.FC<CounterProps> = ({ count, increment, decrement, reset }) => {
  // Animation Variants for Background (Bezier Curve Effect)
  const boxVariants = {
    initial: { height: 0, backgroundColor: "rgba(0, 123, 255, 0)" },
    animate: {
      height: `${count * 10}px`, // Level increases linearly
      backgroundColor: `rgba(0, 123, 255, ${Math.min(count * 0.1, 1)})`, // Max opacity 1
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }, // Bezier Curve
    },
  };

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      {/* Background Animation */}
      <motion.div
        style={{ width: "100%", transition: "height 0.3s ease", borderRadius: "10px" }}
        variants={boxVariants}
        initial="initial"
        animate="animate"
      >
        <Box p={2}>
          <Typography variant="h5">Counter: {count}</Typography>
        </Box>
      </motion.div>

      {/* Buttons */}
      <Button variant="contained" onClick={increment} sx={{ margin: "5px" }}>
        Increment
      </Button>
      <Button variant="contained" onClick={decrement} sx={{ margin: "5px" }}>
        Decrement
      </Button>
      <Button variant="contained" color="error" onClick={reset} sx={{ margin: "5px" }}>
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
