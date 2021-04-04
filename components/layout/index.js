import Link from "next/link"
import Head from "next/head"
import styles from "./index.module.css"
import Image from "next/image"
import { IconContext } from "react-icons";
import { IoIosSend } from 'react-icons/io';
import { IoIosCall } from 'react-icons/io';
import Navbar from '../navbar/index'


const layout = ({ children }) => {
    return(
        <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <header className={styles.header}>
            <div className={styles.navbartop}>

                <div className="col-span-1 lg:col-span-2 py-4 lg:py-6">
                    <Image src="/image/logo.png" width='143' height="54" />
                </div>

                <IconContext.Provider value={{ className:"site-icon"}}>
                    <div className="flex flex-row justify-start items-start space-x-4 py-4 lg:py-6">
                        <div className={styles.ortala}>
                            <IoIosSend />
                        </div>
                        
                        <div className="flex flex-col">
                            <h3 className="font-bold">Email</h3>
                            <span> youremail@email.com </span>
                        </div>
                    </div>
                </IconContext.Provider>

                <IconContext.Provider value={{ className:"site-icon"}}>
                    <div className="flex justify-start items-start space-x-4 py-4 lg:py-6">
                        <div className={styles.ortala}>
                            <IoIosCall />
                        </div>
                    
                        <div className="flex flex-col">
                            <span className="font-bold">Phone</span>
                            <span>+90505050505</span>
                        </div>
                    </div>
                </IconContext.Provider>

                <div className="lg:flex lg:justify-end items-center hidden py-4 lg:py-6">
                    <button className={styles.button}>Biz Sizi Arayalım</button>
                </div>
            </div>

            <Navbar />
        </header>

        <main className="container">
            {children}
        </main>
        </>
    )
}

export default layout;