import { useParams } from '../../node_modules/react-router-dom/index';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const params = useParams(); //파라메터 처리를 위한 Hook

  const category = params.category || 'all'; // || (or) 연산자

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
