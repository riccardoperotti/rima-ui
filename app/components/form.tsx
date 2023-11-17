'use client';
import { useEffect } from "react";
import { fetchRhymes, FetchRhymesResults } from '../lib/fetch_rhymes';
import styles from "./form.module.css";


interface FormProps {
  setResults: (results: FetchRhymesResults) => void;
}

export const Form = (Props: FormProps): JSX.Element => {
    const { setResults } = Props;

    const handleClick = async () => {
        const word = (document.getElementById('wordInput') as HTMLInputElement).value;
        if (word === '') {
            alert('Por favor ingresa una palabra que buscar.');
            return;
        }

        const results = await fetchRhymes(word);
        setResults(results);
    };

    // useEffect(() => {
    //   document.getElementById('wordInput')?.addEventListener("keydown", (e) => {
    //     console.log('clicked');
    //     if (e.key === 'Enter') {
    //       handleClick();
    //     }
    //   });
    // });


  return (
    <div className={styles.form}>
      <label className={styles.label} htmlFor="wordInput">Palabra: </label>
      <input  className={styles.input} type="text" id="wordInput" />
      <button className={styles.button} onClick={handleClick}>Buscar Rimas</button>
    </div>
  );
}

