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
      "Ні",
      "Ти впевнений(на)?",
      "А якщо я попрошу ввічливо =)",
      "*ввічливо* Будь ласка =))))",
      "А якщо з мене кава???",
      "Добре подумай",
      "Я СКАЗАВ ДОБРЕ ПОДУМАЙ",
      "Ти не можеш....",
      "Нащо я тоді писав це все",
      "Лан не то не",
      "Ти шо гоніш яке не",
      "Довго ще будеш клацать",
      "Пальци поодрізаю",
      "Лан давай закінчуй і жми вже да",
      "Я сказав жми да, куда ти клацаєш",
      "Не і всьо",
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
          <h1 className={styles.h1}>Найс! перемога❤️🥰</h1>
        </>
      ) : (
        <>
          <img
            className={styles.img}
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute bear"
          />
          <h1 className={styles.h1}>Будеш моєю валентинкою?💖</h1>
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