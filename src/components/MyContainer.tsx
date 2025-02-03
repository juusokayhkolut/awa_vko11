import React from 'react';
import { useTranslation } from 'react-i18next';

const MyContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('frontPageText')}</h2>
    </div>
  );
};

export default MyContainer;
