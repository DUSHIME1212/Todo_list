import React from 'react'
import Image from "next/image";




const Profilecard = () => {
    const user =
        {
            username: "John",
            email: "john@example.com",
            img:'https://i.pinimg.com/736x/b3/61/67/b361675888aadd2c48620bdaabaf148b.jpg'
        }
    return (
        <div className={'relative flex items-center gap-8'}>
            <Image src={user.img} alt={'img'} className={'object-cover size-12 rounded-full'} width={24} height={24}/>
            <div className={'w-full'}>
                <h1>{user.username}</h1>
                <p className={'text-sm opacity-60'}>{user.email}</p>
            </div>
        </div>
    )
}
export default Profilecard
