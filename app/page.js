"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [result, setResult] = useState("");

  const handleChange = (evt) => {
    const value = evt.target.value;
    setText(value);
  };

  const selectFirstNoReaplyLetters = () => {
    const uniqueCharsInWords = [];
    words.map((word) => {
      const count = {};
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        count[char] = (count[char] || 0) + 1;
      }

      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (count[char] === 1) {
          uniqueCharsInWords.push(word[i]);
        }
      }
    });
    selectNoReaplyLetterEver(uniqueCharsInWords);
  };

  const selectNoReaplyLetterEver = (arr) => {
    const currensy = {};
    for (let i = 0; i < arr.length; i++) {
      currensy[arr[i]] = (currensy[arr[i]] || 0) + 1;
    }
    for (let i = 0; i < arr.length; i++) {
      if (currensy[arr[i]] === 1) {
        console.log(currensy);
        setResult(arr[i]);
      }
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const splitedText = text.trim().split(" ");
    setWords(splitedText);
    selectFirstNoReaplyLetters();
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Enter your text
          <input onChange={handleChange} className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      <p>result: {result}</p>
    </main>
  );
}
