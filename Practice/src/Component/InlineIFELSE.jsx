
const InlineIFELSE = () => {
    let marks =80;
    return (
        <div>
            {
                marks >80 ?
                 <h1>Brilient Reult</h1>
                :
                <h>Avarage Result</h>
            }
        </div>
    );
};

export default InlineIFELSE;