export function AuthPage({isSignin}: {
isSignin: boolean
}){
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-2 m-2 bg-white round">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={() => {
                
            }}>{isSignin ? "Sign in" : "Sign up"}</button>
        </div>
    </div>
}