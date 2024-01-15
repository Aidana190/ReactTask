import React, { useEffect, useState } from "react";
import Effect from "./components/Effect";
import { getDefaultNormalizer } from "@testing-library/react";
import RandomNumber from "./components/RandomNumber";
import Users from "./components/Users";
import Task1 from "./components/Task1";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";

const App = () => {
  let stylesArr = [
    {
      width: "200px",
      height: "100px",
      backgroundColor: "red",
    },
    {
      width: "300px",
      height: "100px",
      backgroundColor: "pink",
    },
    {
      width: "400px",
      height: "100px",
      backgroundColor: "black",
    },
  ];

  // ! useEFFECT
  // ? useEffect - это хук, котрый можно использовать для замены некоторых методов жизненного цикла классового компоннента. useEffetc используется в следующих случаях:
  // * 1) При рождении компонента (визуализации компонента)
  // * 2) При удалении компонента

  // ! useEffect сработает один раз при рождении компонента
  // useEffect(()=>{
  //  getData()
  // },[])
  // ! useEffect будет срабатывать при любом изменении в данном компоненте
  // useEffect(()=>{
  //  getData()
  // },[])

  // useEffect(() => {
  //   console.log(
  //     "Компонент родился, useEffect это увидел и запустил console.log"
  //   );
  // }, []);
  return (
    <div>
      <Effect />
      <RandomNumber />
      <Users />
      <Task1 />
      {stylesArr.map((elem, index) => {
        return (
          <Boxes
            key={"width-" + index}
            width={elem.width}
            height={elem.height}
            backgroundColor={elem.backgroundColor}
          />
        );
      })}
      <Card>
        <Avatar />
      </Card>
      <Counter />
    </div>
  );
};

export default App;
