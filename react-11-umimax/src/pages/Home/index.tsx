import React from "react";
import { useModel } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { trim } from '@/utils/format';
import Guide from '@/components/Guide';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
