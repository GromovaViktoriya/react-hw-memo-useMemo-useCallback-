import {useMemo} from "react";

export const ItemList = ({items, searchValue}) => {
    const listArray =  useMemo(() => {
        return searchValue ? items.filter(item => item.item.includes(searchValue)) : items
    }, [items, searchValue])

    return (
        <ul className='ul'>
            {listArray.map(item => (
                <li className='li' key={item.id}>{item.item}</li>
            ))}
        </ul>
    )
}
