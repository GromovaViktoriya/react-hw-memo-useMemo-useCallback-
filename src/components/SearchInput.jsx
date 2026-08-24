export const SearchInput = ({value, onChangeHandler}) => {


    return (
        <>
            <input type="search" placeholder="Search..." value={value} onChange={(event)=>onChangeHandler(event.target.value)} />
        </>
    )
}