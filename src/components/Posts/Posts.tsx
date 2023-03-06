import Card from './Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface CardProps {
  id: number;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  image: string;
  _embedded: {
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<CardProps[]>(
          "https://www.tvgazeta.com.br/wp-json/wp/v2/posts?_embed"
        );
        const modifiedData = response.data.map((post) => ({
          ...post,
          image: post._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url,
        }));
        setCardsData(modifiedData);
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
                <a className="lista active" href="#">Lista</a>
                <a className="mapa" href="#">Mapa</a>
              </div>
            </div>
          </div>
          <div className="contentBlogPosts">
            <div className="container-fluid">
              <div className="row justify-content-between">
                {cardsData.map((card: CardProps, index: number) => (
                  <Card key={index} title={card.title} excerpt={card.excerpt} image={card.image} link={card.link} id={card.id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;