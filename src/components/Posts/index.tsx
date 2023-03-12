import Card from './Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

export type CardProps = {
  id?: number;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  image: string;
  _embedded?: {
    'wp:featuredmedia': {
      media_details: {
        sizes: {
          medium_large: {
            source_url: string;
          }
        }
      }
    }[]
  };
}

const Posts = () => {
  const [cardsData, setCardsData] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActiveButton, setIsActiveButton] = useState<number>(1);

  const URL_NOT_FOUND = 'https://static.tvgazeta.com.br/uploads/2015/05/m_logo_gazeta.png';

  const handleClickActiveButton = (button: number) => {setIsActiveButton(button)}

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<CardProps[]>(
          "https://www.tvgazeta.com.br/wp-json/wp/v2/posts?_embed"
        );
        const modifiedData = response.data.map((post) => {
          const image =
            post._embedded && post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.medium_large?.source_url ?? URL_NOT_FOUND : '';
          return {
            ...post,
            image
          };
        });
        setCardsData(modifiedData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  

  return (
    <section className="sectionPostsBlog">
      <div className="container-fluid">
        <div className="row">
          <div className="headerBlogPosts">
            <div className="titleBlogPosts">
              <h2 className="title">Blocos recomendados</h2>
            </div>
            <div className="buttonsFilterBlogPosts">
              <div className="buttons">
                <a className={isActiveButton === 1 ? 'lista active' : 'lista'} onClick={() => handleClickActiveButton(1)} href="#">Lista</a>
                <a className={isActiveButton === 2 ? 'mapa active' : 'mapa'} onClick={() => handleClickActiveButton(2)} href="#">Mapa</a>
              </div>
            </div>
          </div>
          <div className="contentBlogPosts mb-5">
            <div className="container-fluid">
              <div className="row justify-content-between">
                {
                  isLoading ? (
                    <div className="text-center mt-5">
                      <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="visually-hidden">Carregando...</span>
                      </div>
                    </div>
                  ) : (
                    cardsData.map((card: CardProps) => (
                      <Card key={card.id} title={card.title} excerpt={card.excerpt} image={card.image} link={card.link}  />
                    ))
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;
