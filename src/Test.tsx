import React from "react";

const Test = () => {
    const list = [1, 2, 3, 4];

    const render = (list: any[]) => {
    list.map((x:number) => {
        return <h1>{x}</h1>;
    });
  };
    return(
        <div>
            {list.map((x:number) => {
                return <h1>{x}</h1>
            })}
        </div>
    )
}

export default Test;