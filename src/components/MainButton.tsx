interface props {
    children: any,
    classes?: string,
    onclick?: any,
}

export default function MainButton({ children, classes = "", onclick }: props) {
    return (
        <button onClick={onclick} className={`${classes} bg-white text-black px-5 py-3 text-xs hover:bg-transparent transition-all hover:text-white hover:border-solid border-white hover:border rounded-full`}>{children}</button>
    )
}