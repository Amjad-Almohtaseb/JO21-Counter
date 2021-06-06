const IncrementButton = (props) => {
  return (
    <button onClick={props.increment} className="btn btn-success">
      +
    </button>
  );
};

export default IncrementButton;
