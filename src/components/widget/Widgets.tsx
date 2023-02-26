import { css } from '@emotion/react';
import Search from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

export const Widgets = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.input}>
        <Search css={styles.iconSearch} />
        <input type='text' placeholder='キーワード検索' />
      </div>
      <div css={styles.container}>
        <h2>いまどうしてる？</h2>
        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId='1579746954170753024' />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='twitterjp'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://twitter.com/twitterjp'}
          options={{ text: 'つぶやいてみよう', via: 'twitterjp' }}
        />
      </div>
    </div>
  );
};

const styles = {
  wrapper: css`
    flex: 0.35;
  `,
  input: css`
    display: flex;
    align-items: center;
    background-color: var(--twitter-background);
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
    input {
      border: none;
      background-color: var(--twitter-background);
    }
  `,
  iconSearch: css`
    color: gray;
  `,
  container: css`
    margin-top: 15px;
    margin-left: 20px;
    padding: 20px;
    padding-top: 5px;
    background-color: #f5f8fa;
    border-radius: 20px;
    h2 {
      font-size: 18px;
      font-weight: 800;
    }
  `,
};
