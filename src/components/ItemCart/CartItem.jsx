import {memo} from "react";

export const CartItem = memo(({item, plusOneHandler, deleteItemHandler}) => {
    console.log('CartItem rendered ' + item.title)
    // Если не обернуть функции из ItemCart в useCallback и не передать их как ссылки (именно ссылки, а не оборачивать
    // их в стрелочную функцию-обертку с перебросом аргумента из дочернего элемента) в CartItem, компонент CartItem
    // будет перерисовываться несмотря на memo-обертку HOC и useCallback. Т.к. анонимная стрелочная функция создается
    // заново.

    return (
        <div key={item.id} style={{display: 'flex', gap: '10px'}}>
            <p>{item.title}</p>
            <p>{item.count}</p>
            <button onClick={() => plusOneHandler(item.id)}>+1</button>
            <button onClick={() => deleteItemHandler(item.id)}>Удалить</button>
        </div>
    )
})