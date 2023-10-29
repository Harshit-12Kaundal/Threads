import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from "next/font/google"
export const metadata={
    title:'Threads',
    description:'A next.js 13 meta threads application'
}

const inter =Inter({ subsets : ["latin"] })

export default function RootLayout({
    children}
:{
    
    children:React.ReactNode
}){
    return(
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-gark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}