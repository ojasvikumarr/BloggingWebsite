import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <>
    <style jsx>
        {`
                .mainNav{
                    display : flex ;
                    justify-content : space-between ;
                    list-style : none ;
                    margin : 50px 400px 0px 400px;
                    // cursor : pointer ;
                }
        `}
    </style>
      <nav>
        <ul className={styles.mainNav}>
          <Link href="/"><><li>Home</li></></Link>
          <Link href="/about"><><li>About</li></></Link>
          <Link href="/blog"><><li>Blog</li></></Link>
          <Link href="/contact"><><li>Contact</li></></Link>
        </ul>
      </nav>
    </>
  );
};
export default Navbar ;