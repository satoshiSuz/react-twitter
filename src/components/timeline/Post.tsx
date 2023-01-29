import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from '@mui/icons-material';
import { Avatar, css } from '@mui/material';
import { FC } from 'react';
import { PostType } from '../../types/Post';

export const Post: FC<PostType> = (props) => {
  const { displayName, username, verified, text, avatar, image } = props;
  return (
    <div css={styles.wrapper}>
      <div css={styles.avatar}>
        <Avatar src={avatar} />
      </div>
      <div css={styles.body}>
        <div css={styles.header}>
          <div css={styles.headerText}>
            <h3>
              {displayName}
              <span css={styles.headerSpecial}>
                <VerifiedUser css={styles.badge} />@{username}
              </span>
            </h3>
          </div>
          <div css={styles.headerDescription}>
            <p>{text}</p>
          </div>
        </div>
        <img css={styles.image} src={image} alt='' />
        <div css={styles.footer}>
          <ChatBubbleOutline fontSize='small' />
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <PublishOutlined fontSize='small' />
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: css`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid var(--twitter-background);
    padding-bottom: 10px;
  `,
  avatar: css`
    padding: 15px;
  `,
  body: css`
    flex: 1;
    padding-right: 15px;
  `,
  header: css``,
  headerText: css`
    h3 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  `,
  headerSpecial: css`
    font-weight: 600;
    font-size: 12px;
    color: gray;
  `,
  badge: css`
    font-size: 14px;
    color: var(--twitter-color);
  `,
  headerDescription: css`
    margin-bottom: 10px;
    font-size: 15px;
    p {
      margin: 0;
      padding: 0;
    }
  `,
  image: css`
    border-radius: 20px;
    width: 100%;
  `,
  footer: css`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  `,
};
