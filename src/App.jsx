import {SearchInput} from "./components/SearchInput.jsx";
import {CounterButton} from "./components/CounterButton.jsx";
import {ItemList} from "./components/ItemList.jsx";
import {array} from "./constants/constants.js";
import {useCallback, useState} from "react";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [counter, setCounter] = useState(0);

    const onChangeHandler = useCallback((value) => {
        setSearchValue(value);
    }, [setSearchValue]);

    const onClickHandler = useCallback(() => {
        setCounter((prev) => prev + 1);
    }, [setCounter]);

    return (
        <div className="App">
            <h3>{counter}</h3>
            <CounterButton onClickHandler={onClickHandler}/>

            <SearchInput value={searchValue} onChangeHandler={(value)=>onChangeHandler(value)} />
            <ItemList items={array} searchValue={searchValue} />
        </div>
    )
}

export default App
