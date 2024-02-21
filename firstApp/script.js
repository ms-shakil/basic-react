console.log(React) // React use for all works
console.log(ReactDOM) // ReactDOM use only for showing output

let root = document.querySelector("#root")
// create react element / like html element
const element = React.createElement("div",null,[
    React.createElement("p",null,"Hello JavaScritp"),
    React.createElement("p",null,"Hello ReactJs")  

])
ReactDOM.render(element,root) // render use for showing output .its thake 2 pera meater 1st ki show korbo 2nd kothai show korbo




