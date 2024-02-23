
const TernaryOperator = () => {
  let status = true
    return (
        <div>
          {
            status?
            <h1>Condition True</h1>
            :
            <h1>Condition False</h1>
          }
        </div>
    );
};

export default TernaryOperator;