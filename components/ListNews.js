const ListNews = (props) => (
  <div>
      {props.news.map(item => (
        <li key={item.news_id}>
          <a href={item.url}>
            {item.title}
          </a>
        </li>
      ))}
  </div>
);

export default ListNews;