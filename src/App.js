import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [num,setNum] = useState(0);
    let isPrime ='';
    if (num === 1) {
      isPrime = ("1 <strong> ไม่</strong>เป็นจำนวนเฉพาะ")
    }
    else if (num>1){
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          isPrime = (`${num} เป็นจำนวนเฉพาะ`);
        }
      }
    
      if (isPrime) {
        isPrime = (`${num}<strong> ไม่</strong>เป็นจำนวนเฉพาะ`)
      }else {
        isPrime = (`${num} เป็นจำนวนเฉพาะ`);
      }
    }
  return(
    <div className="App">
      <Header />
      <div className="MyContent"> 
        <h2>{num}</h2>
        <button onClick={() => setNum(num + 1)}>เพิ่ม</button>
        <button onClick={() => setNum(num - 1)}>ลด</button>
        <br>
        </br>
        <span dangerouslySetInnerHTML={{__html: isPrime}}></span>
      </div>
      <Footer />
    </div>
  );
}

export default App;