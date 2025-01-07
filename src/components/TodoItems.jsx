import styles from "./TodoItems.module.css"
import TodoItem from "./TodoItem";

const Todoitems= ({todoitems}) => {
    return (
        <div className={styles.itemsContainer}>
            {todoitems.map((item)=>(
                <TodoItem todoName={item.name} todoDate={item.date}></TodoItem>
            ))}       
        </div>
    )
}

export default Todoitems;