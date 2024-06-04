
const ImmediatlyInvokeFun = () => {
    let marks =90;
    return (
        <div>
            {(() =>{

                if(marks>=80){
                    <h1>A+</h1>
                }
                else if(marks >=70){
                    <h1>A</h1>
                }else if(marks>=60){
                    <h1>B</h1>
                }else if(marks>=50){
                    <h1>C</h1>
                }else{
                    <h1>F</h1>
                }


               })() }
            
        </div>
    );
};

export default ImmediatlyInvokeFun;