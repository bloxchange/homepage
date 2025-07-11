import MarkdownPage from '../components/MarkdownPage';
import { useTranslation } from 'react-i18next';

const TrazeDocument = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return <MarkdownPage filePath={`/traze-docs/${currentLanguage}.md`} />;
};

export default TrazeDocument;
