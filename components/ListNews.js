const ListNews = (props) => (
  <div>
      {props.news.map(item => (
        <li key={item.news_id}>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </li>
      ))}
  </div>
);

export default ListNews;