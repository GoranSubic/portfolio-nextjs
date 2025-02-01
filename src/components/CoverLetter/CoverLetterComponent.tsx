'use client'

import { FC, useState } from 'react';
import classes from "./CoverLetter.module.css";

export const CoverLetterComponent: FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      let data = await result.json();
      if (!data.content && data.error !== undefined) {
        console.log('There is an error: ', data.error);
        data = 'There is an error. Please try again.';
      }
      setResponse(data.content);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.root}>

      <div className={classes.itemWrapper}>
        <p className={classes.paragraphBlock}>
          Simply enter your job description, click "Submit" and you'll get a cover letter that shows if I am the best fit for your team.
        </p>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
        >

          {/* <h3 className={classes.formTitle}>Please, fill the job description:</h3> */}
          {/* <label htmlFor="input" className={classes.label}>Job description:</label> */}
          <textarea
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type in your job description..."
            disabled={isLoading}
            className={classes.input}
            rows={4}
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={classes.button}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
        {response && (
          <div className={classes.form}>
            <h3 className={classes.formTitle}>Cover Letter generated:</h3>
            <p className={classes.paragraphBlock}>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};
