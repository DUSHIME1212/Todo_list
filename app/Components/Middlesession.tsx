'use client'
import React, {useState, useEffect } from 'react';
 
import {todos} from "@/app/utils/utils";
import {X} from "@phosphor-icons/react";

interface QuoteData {
    quote: string;
    author: string;
  }

const Middlesession = () => {
    const [quote, setQuote] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
     useEffect(() => {
       const fetchQuote = async () => {
        try {
            let randomNum = Math.floor(Math.random() * 30);
            let API = `https://dummyjson.com/quotes/${randomNum}`;
            let response = await fetch(API);
            

        if (!response.ok) {
            throw new Error('Failed to fetch quote');
          }
          let data = await response.json();
          // Type assertion or casting to ensure data is of type QuoteData
          if (isQuoteData(data)) {
            setQuote(data.quote);
            setAuthor(data.author);
            setIsLoading(false);
          } else {
            throw new Error('failed');
          }
        } catch(error: any) {
          setError(error.message);
          setIsLoading(false);
        }
        };
  
      fetchQuote();
     }
     ,[]);
      
     const isQuoteData = (data: any): data is QuoteData => {
        return (
          typeof data.quote === 'string' &&
          typeof data.author === 'string'
        );
      };



    const [item, setitem] = useState([]);

    // function handlesetitem (data:FormData){
    //     let tit = data.get(title)
    //     let desc = data.get(desc)
    //     setitem()
    // }

    let date = new Date()
    let thisdate = date.toDateString()

    // let randomNum = Math.floor(Math.random()*30)
    // let API = `https://dummyjson.com/quotes/${randomNum}`;
    //
    // async function showQuotes(api){
    //     let call = await fetch(api)
    //     let res = await call.json()
    //     return res
    // }
    //
    // let author = showQuotes(API).author
    // let quote = showQuotes(API).quote

    return (
        <div className={'flex flex-col w-full relative h-screen p-4'}>
            <div className={'flex w-full items-center justify-between'}>
                <h1 className={'text-4xl'}>MY DAY</h1>
                <span className={'flex items-end w-1/2 flex-col'}>
                    {thisdate}
                   <>
                   {isLoading ? (
                        <p>Loading...</p>
                      ) : error ? (
                        <p>Error: {error}</p>
                      ) : (
                        <>
                          <p className={'tracking-tighter font-bold'}>-{author}</p>
                          <p className={'text-right opacity-60 font-light'}>{quote}</p>
                        </>
                      )}
                   </>
                </span>
            </div>
         
{/* 
            <span className=>author</span>
                    <p className=>About his is my To-Do List application, featuring a robust backend powered by Firebase and a dynamic frontend built</p> */}

              
            <div className={'overflow-scroll'}>
                {
                    todos.map((todo, i) =>(
                        <div key={i} className={`p-4 flex flex-col gap-2 ${todo.done ? 'opacity-100' :'opacity-40'} ${todo.bgcolor}`}>
                            <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className={'absolute w-full left-0 bottom-0 bg-white py-8 p-4'}>
                <form action="" className={'flex gap-4 flex-col'}>
                    <input type={'text'} name={'title'} className={'text-3xl focus:outline-none font-semibold'}
                           placeholder={'Todo title'}/>
                    <input type={'text'} name={'desc'} className={'text-xl focus:outline-none font-medium'}
                           placeholder={'Todo describe'}/>
                    <button
                        className={'p-2 px-4 size-fit bg-black opacity-60 hover:opacity-100 duration-700 text-white'}>Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Middlesession
