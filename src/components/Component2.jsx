const Component2 = ({ data }) => {
  return (
    <div>
      {data.map((d, index) => (
        <div key={index}>{d.name}</div>
      ))}
    </div>
  );
};

export default Component2;
