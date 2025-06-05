const HelloWorld = ({ className, text }) => {
  //   let text = "nama saya budi";
  //   text = "nama saya anton";

  const handleClick = () => {
    alert("Hello World");
  };
  return (
    <div onClick={handleClick}>
      <div className={className}>Hello World1</div>
      <div>Hello World2</div>
      <div>{text}</div>
    </div>
  );
};

export default HelloWorld;
