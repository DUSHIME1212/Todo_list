'use client';
import React, { useState, useEffect } from 'react';
import { X } from "@phosphor-icons/react";

const Middlesession = () => {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // Load items from localStorage when the component mounts
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        setItems(storedItems);
    }, []);

    // Save items to localStorage whenever the items state changes
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const colors = ['red','green','blue','pink','orange']
    const randomColor = colors[Math.floor(Math.random()*colors.length)]

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { title, body, done: false, bgcolor: `bg-${randomColor}-200` }; // Add default values for done and bgcolor
        setItems([...items, newItem]);
        setTitle(''); // Clear the title input field
        setBody('');  // Clear the body input field
    };

    let date = new Date();
    let thisdate = date.toDateString();

    return (
        <div className={'flex flex-col w-full relative h-screen p-4'}>
            <div className={'flex w-full items-center justify-between'}>
                <h1 className={'text-4xl'}>MY DAY</h1>
                <div className={'flex items-end w-1/2 flex-col'}>
                    {thisdate}
                    <span className={'tracking-tighter font-bold'}>author</span>
                    <p className={'text-right opacity-60 font-light'}>About his is my To-Do List application, featuring a robust backend powered by Firebase and a dynamic frontend built</p>
                </div>
            </div>

            <div className={'overflow-scroll flex flex-col gap-2 mb-44'}>
                {items.map((todo, i) => (
                    <div key={i} className={`p-4 flex rounded-xl flex-col gap-2 ${todo.done ? 'opacity-70' : 'opacity-100'} ${todo.bgcolor}`}>
                        <h1 className={'text-3xl'}>{todo.title}</h1>
                        <p>{todo.body}</p>
                    </div>
                ))}
            </div>
            <div className={'absolute w-full left-0 bottom-0 bg-white py-8 p-4'}>
                <form onSubmit={handleSubmit} className={'flex gap-4 flex-col'}>
                    <input
                        type={'text'}
                        name={'title'}
                        value={title}
                        className={'text-3xl focus:outline-none font-semibold'}
                        placeholder={'Todo title'}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type={'text'}
                        name={'desc'}
                        value={body}
                        className={'text-xl focus:outline-none font-medium'}
                        placeholder={'Todo description'}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button
                        type={'submit'}
                        className={'p-2 px-4 size-fit bg-black opacity-60 hover:opacity-100 duration-700 text-white'}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Middlesession;
