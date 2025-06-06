const PreventDefault = () => {
  const handleClickButtonSubmit = (e) => {
    e.preventDefault();
    console.log("Button clicked");
  };
  return (
    <form>
      <input type="text" className="border" />
      <button onClick={handleClickButtonSubmit}>Submit</button>
    </form>
  );
};

export default PreventDefault;
