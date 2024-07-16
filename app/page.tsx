import React, { useEffect } from 'react'
import Navbar from "@/app/Components/Navbar";
import Middlesession from "@/app/Components/Middlesession";
import Suugestion from "@/app/Components/Suugestion";

 

const Page = () => {
    

    return (
        <div className={'w-full flex'}>
            <div className={'w-1/4'}>
                <Navbar/>
            </div>
            <div className={'w-2/4'}>
                <Middlesession/>
            </div>
            <div className={'w-1/4'}>
                <Suugestion/>
            </div>

        </div>
    )
}
export default Page
