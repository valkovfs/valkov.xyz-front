import Head from "next/head";
import { IChildren } from "@/types/types";
import Menu from "@/components/menu/menu";

export const Container = ({children}: IChildren) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Menu/>
            {children}
            </main>
        </>
    )
}