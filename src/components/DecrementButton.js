const DecrementButton = (props) => {
  return (
    <button onClick={props.decrement} className="btn btn-danger">
      -
    </button>
  );
};

export default DecrementButton;
