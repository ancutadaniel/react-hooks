import React, {useState} from 'react';

const InputElement = () => {

    const [valueInput, setValueInput] = useState('');
    const [historyList, setHistoryList] = useState([]);


    return (
        <div>
            <input
                onChange={(event) => {
                    setValueInput(event.target.value);
                    setHistoryList([...historyList, event.target.value]);
                }}
                placeholder="Enter Text"
            /><br/>
            {valueInput}
            <hr/>
            <br/>
            <ul>
                {historyList.map(rec => {
                    return <div>{rec}</div>
            })}
            </ul>
            <br/>
        </div>
    );
};
export default InputElement;

