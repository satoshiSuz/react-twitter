import { css, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { FC } from 'react';

type Props = {
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  active?: boolean;
};

export const SidebarOption: FC<Props> = (props) => {
  const { text, Icon, active } = props;
  return (
    <div css={styles.wrapper(active === true)}>
      <Icon css={styles.icon} />
      <h2 css={styles.text}>{text}</h2>
    </div>
  );
};

const styles = {
  wrapper: (activeFlag: boolean) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.15s ease-out;
    padding-left: 20px;
    &:hover {
      background-color: #e8f5fe;
      border-radius: 30px;
      color: var(--twitter-color);
    }
    color: ${activeFlag ? 'var(--twitter-color)' : 'initial'};
  `,

  icon: css`
    padding-right: 20px;
  `,
  text: css`
    font-size: 20px;
    margin-right: 20px;
    font-weight: 800px;
  `,
};
