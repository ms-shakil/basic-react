import Singaldata from "./components/Singaldata"
import PropsObject from './components/PropsObject';
import PropsFunction from "./components/PropsFunction";
import PropsArray from "./components/PropsArray";
import PageRefreshCont from "./components/PageRefreshCont";

function App() {
   const StudentInfo ={
     name :"Md.Sahabuddin Shakil",
     university :"United International University",
     id :"011213039",
     age:22,
     phone :"01700979731",
     district:"Comilla"
   }
   const my_arr =["Sajeen","Amran","Mahee","Hridoy","me"]
   const ClickBtn =() =>{
     alert("Hello React Props")
   }
  return (
    <>
      <Singaldata StudentName ="MD.SAHABUDDIN SHAKIL" />
      <PropsObject data ={StudentInfo} />
      
      <PropsFunction btnFun ={ClickBtn } />

      <PropsArray Array={my_arr}/>
      <PageRefreshCont/>
      
    </>
  )
}

export default App
