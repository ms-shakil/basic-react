import CashingExpensiveCompution from "./component/CashingExpensiveCompution"
import ChangeAttributeUseref from "./component/ChangeAttributeUseref"
import ClickEventManage from "./component/ClickEventManage"
import CssClassAddRemove from "./component/CssClassAddRemove"
import UserRef from "./component/UserRef"


function App() {

  return (
    <>
     <ClickEventManage/>
     <h1>Hello React Hooks</h1>
     <UserRef/>

     <ChangeAttributeUseref/>
     <CssClassAddRemove/>
     <CashingExpensiveCompution/>
    </>
  )
}

export default App
