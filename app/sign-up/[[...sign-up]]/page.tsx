import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className={'grid w-screen h-screen place-items-center'}>
            <SignUp />
        </div>
);
}
