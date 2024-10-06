function Banner(props) {
  return (
    <div style={{ backgroundColor: props.bgColor }} className="banner">
      <h1>{props.head}</h1>
      <p>{props.meta}</p>
    </div>
  );
}

export default Banner;
