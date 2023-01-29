import { css } from '@emotion/react';
import { Post } from './Post';
import { TweetBox } from './TweetBox';
import db from '../../firebase';
import {
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { PostType } from '../../types/Post';
import uuid from 'react-uuid';

export const Timeline = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const postData = collection(db, 'posts');
    const q = query(postData, orderBy('timestamp', 'desc'));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data() as PostType));
    // });

    /* リアルタイムでデータを取得 */
    onSnapshot(q, (querySnapshot: QuerySnapshot<DocumentData>) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data() as PostType));
    });
  }, []);

  return (
    <div css={styles.wrapper}>
      {/* Header */}
      <div css={styles.header}>
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      {posts.map((post) => (
        <Post
          key={uuid()}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

const styles = {
  wrapper: css`
    flex: 0.45;
    border-right: 1px solid var(--twitter-background);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  `,
  header: css`
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    border: 1px solid var(--twitter-background);
    border-right: none;
    border-left: none;
    padding: 5px 20px;
    h2 {
      font-size: 20px;
      font-weight: 800px;
    }
  `,
};
