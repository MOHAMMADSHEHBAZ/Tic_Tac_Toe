import React, { useRef, useState } from 'react'
import './TicTac.css'



let data = ["","","","","","","","",""]


const TicTac = () => {
  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let wtitle = useRef(null);
  let box1 =useRef(null);
  let box2 =useRef(null);
  let box3 =useRef(null);
  let box4 =useRef(null);
  let box5 =useRef(null);
  let box6 =useRef(null);
  let box7 =useRef(null);
  let box8 =useRef(null);
  let box9 =useRef(null);

  let box = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const toggle=(a,num)=>{
     if(lock){
     return 0;
      }
     if(count%2 === 0){
     a.target.innerHTML = `X`;
     data[num]="X";
     setCount(++count);
    }
    else{
        a.target.innerHTML = `O`;
        data[num]="O";
        setCount(++count);
    }
    cwin();
  }

  const cwin = () =>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
        win(data[2]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      win(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      win(data[8]);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      win(data[6]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      win(data[7]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      win(data[8]);
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      win(data[8]);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      win(data[6]);
    }
  }

  const win = (w) =>{
      setLock(true);
      if(w==="X"){
        wtitle.current.innerHTML =`Congratulations X is Winner`
      }
      else{
        wtitle.current.innerHTML =`Congratulations O is Winner`
      }
  }

  const reset = () =>{
    setLock(false);
    data = ["","","","","","","","",""];
    wtitle.current.innerHTML=`TIC-TAC-TOE`;
    box.map((e)=>{
      e.current.innerHTML="";
    })
  }
  return (
    <div>
      <h1 id='heading' ref={wtitle}>TIC-TAC-TOE</h1>
      <div id='mainbox'>
        <div className="r1">
          <div className="boxes" ref={box1} onClick={(a)=>{toggle(a,0)}}></div>
          <div className="boxes" ref={box2} onClick={(a)=>{toggle(a,1)}}></div>
          <div className="boxes" ref={box3} onClick={(a)=>{toggle(a,2)}}></div>
        </div>
        <div className="r2">
          <div className="boxes" ref={box4} onClick={(a)=>{toggle(a,3)}}></div>
          <div className="boxes" ref={box5} onClick={(a)=>{toggle(a,4)}}></div>
          <div className="boxes" ref={box6} onClick={(a)=>{toggle(a,5)}}></div>
        </div>
        <div className="r3">
          <div className="boxes" ref={box7} onClick={(a)=>{toggle(a,6)}}></div>
          <div className="boxes" ref={box8} onClick={(a)=>{toggle(a,7)}}></div>
          <div className="boxes" ref={box9} onClick={(a)=>{toggle(a,8)}}></div>
        </div>
      </div>
      <div id='button'>
        <button onClick={()=>{reset()}}>Reset</button>
      </div>
    </div>
  )
}

export default TicTac
