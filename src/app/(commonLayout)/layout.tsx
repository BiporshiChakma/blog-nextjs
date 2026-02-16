import { Navbar } from "@/components/layout/Navbar"

export  default function CommonLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    )
}