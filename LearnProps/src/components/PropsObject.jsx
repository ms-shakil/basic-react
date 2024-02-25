
const PropsObject = (props) => {
    return (
        <div>
          <h1>Student Information </h1>
           <ul>
              <li>Name: {props.data["name"]}</li>
              <li>Age : {props.data["age"]}</li>
              <li>University: {props.data["university"]}</li>
              <li>phone: {props.data["phone"]}</li>
              <li>District:{props.data["district"]}</li>

           </ul>
        </div>
    );
};

export default PropsObject;