
import Condition from "./component/Condition"
import ConditionalRendaring from "./component/ConditionalRendaring"
import Header from "./component/Header"
import Im_invokeFunc from "./component/Im_invokeFunc"
import LogicalAndAnd from "./component/LogicalAndAnd"
import LoopInJsx from "./component/LoopInJsx"
import Navbar from "./component/Navbar"
import TernaryOperator from "./component/TernaryOperator"


function App() {

  return (
     <><Navbar />
     <Header />
     <Condition/>
     <Im_invokeFunc/>
     <LoopInJsx/>
     <ConditionalRendaring/>
     <TernaryOperator/>
     <LogicalAndAnd/>
     </>

  )
}

export default App
