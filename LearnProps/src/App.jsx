import Singaldata from "./components/Singaldata"
import PropsObject from './components/PropsObject';
import PropsFunction from "./components/PropsFunction";

function App() {
   const StudentInfo ={
     name :"Md.Sahabuddin Shakil",
     university :"United International University",
     id :"011213039",
     age:22,
     phone :"01700979731",
     district:"Comilla"
   }

   const ClickBtn =() =>{
     alert("Hello React Props")
   }
  return (
    <>
      <Singaldata StudentName ="MD.SAHABUDDIN SHAKIL" />
      <PropsObject data ={StudentInfo} />
      
      <PropsFunction btnFun ={ClickBtn } />
      
    </>
  )
}

export default App
