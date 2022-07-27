// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
const NewsListBlock = styled.div`
  box-sizeing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  } ;
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=81e117b6d251492bbf0dcdbb4dd379ed`,
    );
  }, [category]);
  //대기중일 때;
  if (loading) {
    return <NewsListBlock> 대기 중...</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러발생</NewsListBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     //async이용하는 함수 따로 선언
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=81e117b6d251492bbf0dcdbb4dd379ed`,
//         );
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]); // []리렌더링시 한번만 시행한다는 뜻

//   if (loading) {
//     return <NewsListBlock>대기중...</NewsListBlock>;
//   }
//   if (!articles) {
//     return null;
//   }

//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };

export default NewsList;
