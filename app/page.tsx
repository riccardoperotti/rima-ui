"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Form } from "./components/form";
import { Results } from "./components/results";
import { FetchRhymesResults } from "./lib/fetch_rhymes";

export default function Home() {
  const [results, setResults] = useState<FetchRhymesResults>();

  return (
    <main className={styles.main}>
      <div className={styles.heading}>Diccionario de Rimas</div>

      <div className={styles.formContainer}>
        <Form setResults={setResults} />
      </div>

      <div className={styles.resultsContainer}>
        <Results results={results} />
      </div>
    </main>
  );
}
