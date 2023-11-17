"use client";

import styles from "./rank_selector.module.css";
import Slider from "@mui/material/Slider";

interface RankSelectorProps {
  setThreshold: (threshold: number) => void;
}

export const RankSelector = (Props: RankSelectorProps): JSX.Element => {
  const { setThreshold } = Props;

  const marks = [
    {
      value: 0,
      label: "todas",
    },
    {
      value: 25,
      label: "muchas",
    },
    {
      value: 50,
      label: "algunas",
    },
    {
      value: 75,
      label: "pocas",
    },
    {
      value: 100,
      label: "selectas",
    },
  ];

  // These will need fine-tuning
  const thresholdValues: Record<number,number> = {
    0: 0,
    25: 1,
    50: 25,
    75: 50,
    100: 100,
  };
  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (typeof newValue === 'number') {
      const threshold = thresholdValues[newValue];
      console.log(threshold);
      setThreshold(threshold);
    }
  };

  return (
    <div className={styles.container}>
      <label>¿Cuántas rimas quieres ver?</label>
      <Slider
        className={styles.slider}
        aria-label="Custom marks"
        defaultValue={25}
        step={25}
        valueLabelDisplay="off"
        marks={marks}
        onChange={handleChange}
      />
    </div>
  );
};
