import { useState } from 'react';
import styles from './Page.module.css';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className={styles.body}>
      {yesPressed ? (
        <>
          <img
            className={styles.img}
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Love bear"
          />
          <h1 className={styles.h1}>Yaaayy, wait for your message❤️🥰</h1>
        </>
      ) : (
        <>
          <img
            className={styles.img}
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute bear"
          />
          <h1 className={styles.h1}>Will you be my vanentine?💖</h1>
          <div className="flex items-center space-x-4">
            <button
              className={`${styles.button} ${styles.buttonYes}`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Так!
            </button>
            <button
              onClick={handleNoClick}
              className={`${styles.button} ${styles.buttonNo}`}
            >
              {noCount === 0 ? "Ні" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}