import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { ChildComponent, ChildMemoComponent } from './Memo';
import CatImage from './Cat';

type ButtonCalc = "add" | "sub"

function App() {
  // initialize
  console.log("--- initialize render");
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  // const [countMemo, setCountMemo] = React.useState(0);
  // const [isCatShow, setIsCatShow] = React.useState(false);
  
  const handleButton1 = (calc: ButtonCalc) => {
    if(calc === "add") setCount1(count1 + 1);
    if(calc === "sub") setCount1(count1 - 1);

    // この時点ではまだcount1の値は更新されていない
    // console.log("count1", count1)
  }
  
  const handleButton2 = (calc: ButtonCalc) => {
    if(calc === "add") setCount2(count2 + 1);
    if(calc === "sub") setCount2(count2 - 1);

    // この時点ではまだcount2の値は更新されていない
    // console.log("count2", count2)
  }
  
  // const handleMemo = (calc: ButtonCalc) => {
  //   if(calc === "add") setCountMemo(countMemo + 1);
  //   if(calc === "sub") setCountMemo(countMemo - 1);
  // }

  // const catShow = () => setIsCatShow(!isCatShow);

  // // 全てのレンダリング（および再レンダリング）時に実行される
  // useEffect(() => {
  //   // effect
  //   console.log("non dep effect!");
  // })

  // // 最初のレンダリング時のみ実行される
  // useEffect(() => {
  //   // effect2
  //   console.log("effect []!");
  // }, [])

  // // 初回レンダリング時とcount1の変更時のみ実行される
  // useEffect(() => {
  //   // effect count
  //   console.log("- effect count 1!");
  // }, [count1])

  // // 初回レンダリング時とcount2の変更時のみ実行される
  // useEffect(() => {
  //   // effect count
  //   console.log("- effect count 2!");
  // }, [count2])

  // useEffect(() => {
  //   // effect count
  //   console.log(`- effect count 1: "${count1}" and 2: "${count2}"`);

  //   return () => {
  //     console.log("- remove effect count 1 and 2");
  //   }
  // }, [count1, count2]);

  // // count1を押すと無限ループ
  // useEffect(() => {
  //   // effect infinite loop
  //   console.log("useEffect infinite loop!");
  //   setCount1(count1 * 2);
  // }, [count1])

  console.log("--- render")
  return (
    <div className="App">
      <div style={{margin: "30px"}}>
        <div style={{margin: "20px"}}>Count1 = {count1}</div>
        <button onClick={() => handleButton1("add")}>add1</button>
        <button onClick={() => handleButton1("sub")}>sub1</button>
      </div>
      <div style={{margin: "30px"}}>
        <div style={{margin: "20px"}}>Count2 = {count2}</div>
        <button onClick={() => handleButton2("add")}>add2</button>
        <button onClick={() => handleButton2("sub")}>sub2</button>
      </div>
      {/* <div style={{margin: "30px"}}>
        <div style={{margin: "20px"}}>CountMemo = {countMemo}</div>
        <button onClick={() => handleMemo("add")}>add2</button>
        <button onClick={() => handleMemo("sub")}>sub2</button>
      </div>
      <ChildComponent count={countMemo}/>
      <ChildMemoComponent count={countMemo}/> */}
      {/* <div style={{margin: "20px"}}>
        <button onClick={() => catShow()}>{isCatShow ? "ねことさよなら" : "ねこを表示する"}</button>
        {isCatShow && <CatImage />}
      </div> */}
    </div>
  );
}

export default App;

