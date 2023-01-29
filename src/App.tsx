import { css } from '@emotion/react';
import { Sidebar } from './components/sidebar/Sidebar';
import { Timeline } from './components/timeline/Timeline';
import { Widgets } from './components/widget/Widgets';
import './index.css';

function App() {
  return (
    <div className='app' css={styles.wrapper}>
      {/* Sidebar */}
      <Sidebar />
      {/* Timeline */}
      <Timeline />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;

const styles = {
  wrapper: css`
    display: flex;
    height: 100vh;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
  `,
};
