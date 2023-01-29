import { css } from '@emotion/react';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { SidebarOption } from './SidebarOption';
import { Button } from '@mui/material';

export const Sidebar = () => {
  return (
    <div css={styles.wrapper}>
      {/* ツイッターアイコン */}
      <TwitterIcon css={styles.iconTwitter} />
      {/* SidebarOption */}
      <SidebarOption text='ホーム' Icon={HomeIcon} active={true} />
      <SidebarOption text='話題を検索' Icon={SearchIcon} />
      <SidebarOption text='通知' Icon={NotificationsNoneIcon} />
      <SidebarOption text='メッセージ' Icon={MailOutlineIcon} />
      <SidebarOption text='ブックマーク' Icon={BookmarkBorderIcon} />
      <SidebarOption text='リスト' Icon={ListAltIcon} />
      <SidebarOption text='プロフィール' Icon={PermIdentityIcon} />
      <SidebarOption text='もっとみる' Icon={MoreHorizIcon} />

      {/* ツイートボタン */}
      <Button variant='outlined' css={styles.buttonTweet} fullWidth>
        ツイートする
      </Button>
    </div>
  );
};

const styles = {
  wrapper: css`
    border-right: 1px solid var(--twitter-background);
    flex: 0.2;
    min-width: 250px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  `,
  iconTwitter: css`
    color: var(--twitter-color);
    font-size: 30px;
    margin-left: 20px;
    margin-bottom: 20px;
  `,
  buttonTweet: css`
    background-color: var(--twitter-color);
    color: white;
    font-weight: 900;
    border: none;
    border-radius: 30px;
    height: 50px;
    margin-top: 20px;
    &:hover {
      background-color: var(--twitter-color);
      border: none;
    }
  `,
};
