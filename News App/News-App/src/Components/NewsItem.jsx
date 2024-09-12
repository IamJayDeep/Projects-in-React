import image from "../assets/image.png";

function NewsItem({ title, description, src, url }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-1 px-1 py-1"
      style={{ maxWidth: "345px", height: "auto" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "180px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p
          className="card-text"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description
            ? description
            : "Major Earthquake Hits Tokyo Description: A powerful earthquake struck Tokyo this morning, causing widespread damage and casualties. "}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
