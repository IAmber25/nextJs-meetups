function Card(props) {
  return <div className="rounded-lg shadow-lg flex flex-col items-center p-3" >{props.children}</div>;
}

export default Card;
