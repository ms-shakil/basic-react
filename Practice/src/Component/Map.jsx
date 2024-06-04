
const Map = () => {
    const city =["Dhaka","Comilla","Sylhet","Khulna","Barisal"]
    return (
        <div>
         <ol>
            {
                city.map((item,i)=>{
                     return <li key={i.toString()}> {item}</li>
                })
            }
         </ol>

        </div>
    );
};

export default Map;