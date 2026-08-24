import {useCallback, useState} from "react";
import {CartItem} from "./CartItem.jsx";


export const ItemCart = () => {
    const [cart, setCart] = useState([
        {id: 1, title: "Футболка", count: 1},
        {id: 2, title: "Кепка", count: 2},
    ]);

    const plusOneHandler = useCallback((id) => {
        const item = cart.find((item) => item.id === id);
        if (item) {
            setCart((prev) => prev.map((item) => item.id === id
                ? {...item, count: item.count + 1}
                : item));
        }
    }, [cart])

    const deleteItemHandler = useCallback((id) => {
        setCart((prev) => prev.filter(item => item.id !== id))
    }, []);

    const clearCartHandler = () => {
        setCart([])
    }

    return (
        <div>
            <div>
                <h3>Корзина товаров</h3>
                {cart.map(item => {
                    return (
                        <CartItem key={item.id}
                                  item={item}
                                  deleteItemHandler={deleteItemHandler}
                                  plusOneHandler={plusOneHandler}
                        />
                    )
                })}
            </div>
            <button onClick={clearCartHandler}>Очистить корзину</button>
        </div>
    )
}