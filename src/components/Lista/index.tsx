// import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {
//   const [tarefas, setTarefas] = useState([
//     {
//       tarefa: "React",
//       tempo: "02:00:00",
//     },
//     {
//       tarefa: "Typescript",
//       tempo: "01:30:00",
//     },
//   ])

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} selecionaTarefa={selecionaTarefa} {...item} />
        ))}
      </ul>
    </aside>
  );
}
export default Lista;
