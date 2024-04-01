function Title({ title, children }) {
  return (
    <div className="mainText">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}

export default Title;
