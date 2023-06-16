import './App.css';
import DemoJSX from "./components/DemoJSX";
import ParentComp from './components/ParentComp';
import Baitap1 from './components/Baitapsession1/Baitap1';
import Baitap2 from './components/Baitapsession1/Baitap2';
import Baitap3 from './components/Baitapsession1/Baitap3';
import Form_login_register from './components/Baitapsession1/baitap4/Form_login_register';
import ChilrentComp from './components/session2/ChilrentComp';
import Event from './components/session2/Event';
function App() {

  return (
    <div>
      {/* { gọi component để sử dụng } */}
      {/* <DemoJSX />

      {/* <Baitap1 />
      <Baitap2 />
      <Baitap3 /> */}
      {/* <Form_login_register /> */}

      {/* session2 */}

      {/* <ChilrentComp /> */}

      {/* <Event /> */}
      {/* BT1 */}
      <ParentComp />
    </div >
  );
}

export default App;


