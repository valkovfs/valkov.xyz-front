import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {useSession, signIn, signOut} from "next-auth/react";
import Menu from "@/components/menu/menu";
import {Container} from "@/components/container/container";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const {data: session} = useSession()

    return (
        <>
            <main className={styles.main}>
                <Container>
                    <h1>sdadada</h1>
                </Container>
            </main>
        </>
    )
}
