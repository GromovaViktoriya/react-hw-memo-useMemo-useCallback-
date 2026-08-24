import {useMemo} from "react";

export const ItemList = ({items, searchValue}) => {
    const listArray =  useMemo(() => {
        return searchValue ? items.filter(item => item.item.includes(searchValue)) : items
    }, [items, searchValue])

    return (
        <ul>
            {listArray.map(item => (
                <li key={item.id}>{item.item}</li>
            ))}
        </ul>
    )
}
