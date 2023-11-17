"use client";
import styles from "./word.module.css";

import { WordLookup } from "../lib/fetch_rhymes";

export const Word = (lookup: WordLookup): JSX.Element => {
  console.log(typeof lookup);
  console.log(lookup);

  const { word, type, syllables, sounds } = lookup;

  return (
    <div className={styles.container}>
      <div className={styles.word}>{word}</div>
      <div className={styles.subContainer}>
        <div className={styles.type}>
          <label className={styles.label}>Tipo:</label>
          {type}
        </div>
        <div className={styles.syllables}>
          <label className={styles.label}>Sílabas:</label>
          {syllables}
        </div>
        <div className={styles.sounds}>
          <label className={styles.label}>Sonidos:</label>
          {sounds}
        </div>
      </div>
    </div>
  );
};
