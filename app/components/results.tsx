"use client";

import styles from "./results.module.css";
import { useCallback, useState } from "react";
import { filterRhymes, FetchRhymesResults } from "../lib/fetch_rhymes";
import { Word } from "./word";
import { RankSelector } from "./rank_selector";

interface ResultsProps {
  results?: FetchRhymesResults;
}

export const Results = (Props: ResultsProps): JSX.Element => {
  const { results } = Props;

  const [threshold, setThreshold] = useState<number>(0);

  const DisplayRhymes = useCallback(() => {
    if (!results) {
      return <></>;
    }

    const { rhymes, lookup, error, count } = results;

    if (error) {
      return <p className={styles.noResults}>{error}</p>;
    }

    const threshold = 0; // for now 
    const words = filterRhymes(rhymes, threshold);

    return (
      <>
        <div className={styles.controlPanel}>
          <div>&nbsp;</div>

          <Word {...lookup}/>
          
          <RankSelector setThreshold={setThreshold}/>
        </div>

        {words.length > 0 && (
        <div className={styles.results}>
          {words.map((res) => (
            <p className={styles.res} key={res}>{res}</p>
          ))}
        </div>
        )}
        {words.length == 0 && (
          <p className={styles.noResults}>Nada rima con &quot;{lookup.word}&quot;</p>
        )}
      </>
    );
  }, [results]);

  return <DisplayRhymes />;
};
