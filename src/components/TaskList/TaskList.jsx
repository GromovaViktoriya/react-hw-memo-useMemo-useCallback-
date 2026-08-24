import {useState} from "react";
import {TaskItem} from "./TaskItem.jsx";


export const TaskList = () => {
    const [tasks, setTasks] = useState([{task:"Купить хлеб", id:crypto.randomUUID()}, {task:"Погулять с собакой", id:crypto.randomUUID()}]);

    const addRandomStringHandler = () => {
        const abc = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        let rs = "";
        while (rs.length < 10) {
            rs += abc[Math.floor(Math.random() * abc.length)];
        }
        const newTask ={task: rs, id:crypto.randomUUID()};
        setTasks([...tasks, newTask]);
    }

    const removeLastItemHandler = () => {
        setTasks(tasks.slice(0, -1));
    }

    return (
        <div className="taskList">
            <h3>Список задач</h3>
            <ul>
                {tasks.map((task) => {
                  return <TaskItem task={task} key={task.id}/>
                })}
            </ul>
            <div className="btnWrapper">
                <button onClick={addRandomStringHandler}>Добавить задачу</button>
                <button onClick={removeLastItemHandler}>Удалить последнюю задачу</button>
            </div>
        </div>
    )
}