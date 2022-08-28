import React from "react";
import styles from './UI components/InputCurrency.module.css'
function CurrentInput(props){
    return(
        <div>
            <input
            className={styles.currency_style}
            value={props.inputValue}
            onChange={ev => props.onInputValue(ev.target.value)}
            >
            </input>
            <select 
            className={styles.currency_style}
            value={props.currency}
            onChange={ev => props.onSelectValue(ev.target.value)}
            >
                {props.currencies.map((currencies, index) => {
                    return <option key={index} value={currencies}>{currencies}</option>
                })}
            </select>
        </div>
    )
}

export default CurrentInput