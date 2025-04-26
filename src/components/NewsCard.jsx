import { FaShareAlt } from "react-icons/fa";

const NewsCard = (props={}) => {

    const {news} = props || {};
  return (
    <div className=" bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={news.image_url}
          alt={news.title}
          className="h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <h2 className="text-md font-semibold">{news.author.name}</h2>
            <div className="flex items-center text-gray-500 text-sm">
              <FaShareAlt className="mr-1" />
              <span>{new Date(news.author.published_date).toDateString()}</span>
            </div>
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>
      </div>
    </div>
  );
};

export default NewsCard;
