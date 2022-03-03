import React from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.mainNav}>
            <img className={styles.logo} src="https://th.bing.com/th/id/OIP.TMMz_g6yCyTi4dTraYZuagHaHa?pid=ImgDet&w=800&h=800&rs=1" alt="" />

            <nav className={styles.navbar}>
                <ul className={styles.ul}>

                    <Link href='/'><a className={styles.item}>Home</a></Link>
                    <Link href='/blog'><a className={styles.item}>Blog</a></Link>
                    <Link href='/about'><a className={styles.item}>About</a></Link>
                </ul>

            </nav>
        </div>
    )
}
 export default Navbar