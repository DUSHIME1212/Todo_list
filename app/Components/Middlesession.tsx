import React from 'react'
import {fetch} from "undici";

const Middlesession = () => {

    let date = new Date()
    let thisdate = date.toDateString('')

    async function showQuote(){
        let quote = 'https://dummyjson.com/quotes'
        let call = await fetch(api)
        let res = await call.json()
        let randomNum = Math.random()*30
    }


    return (
        <div className={'flex flex-row w-full p-4'}>
            <div className={'flex w-full items-center justify-between'}>
                <h1 className={'text-4xl'}>MY DAY</h1>
                <p>{thisdate}</p>
            </div>
        </div>
    )
}
export default Middlesession
