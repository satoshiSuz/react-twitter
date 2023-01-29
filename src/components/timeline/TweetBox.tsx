import { Avatar, Button, css } from '@mui/material';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';

export const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    /* firebaseのデータベースにデータを追加する */
    e.preventDefault();
    addDoc(collection(db, 'posts'), {
      displayName: 'プログラミングチュートリアル',
      username: 'Satoshi',
      verified: true,
      text: tweetMessage,
      avatar: '/src/img/pokepeace_01.png',
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetImage('');
    setTweetMessage('');
  };

  return (
    <div css={styles.wrapper}>
      <form>
        <div css={styles.inputTweet}>
          <Avatar />
          <input
            value={tweetMessage}
            type='text'
            placeholder='いまどうしてる？'
            css={styles.inputText}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          type='text'
          css={styles.inputImage}
          placeholder='画像のURLを入力してください'
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button css={styles.buttonTweet} type='submit' onClick={sendTweet}>
          ツイートする
        </Button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: css`
    padding-bottom: 10px;
    border-bottom: 8px solid var(--twitter-background);
    padding-right: 10px;
    form {
      display: flex;
      flex-direction: column;
    }
  `,
  inputTweet: css`
    padding: 20px;
    display: flex;
  `,
  inputText: css`
    flex: 1;
    font-size: 20px;
    margin-left: 20px;
    border: none;
  `,
  inputImage: css`
    border: none;
    padding: 20px;
  `,
  buttonTweet: css`
    background-color: var(--twitter-color);
    color: white;
    font-weight: 900;
    width: 130px;
    height: 40px;
    border-radius: 30px;
    margin-top: 20px;
    margin-left: auto;
    &:hover {
      background-color: var(--twitter-color);
      border: none;
    }
  `,
};
