import { CardProps } from "../../../interfaces/PostsBlog";

const Card = ({ title, excerpt, link, image }: CardProps) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 cardBlogPostsCol">
      <div className="card">
        <div className="card-image">
          <img className="card-img-top" src={image} alt={title.rendered} />
        </div>
        <div className="card-body">
          <h3 className="card-title">{title.rendered}</h3>
          <p className="card-text">{excerpt.rendered}</p>
          <a className="local" href={link}>
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
