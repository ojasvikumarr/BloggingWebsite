import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import  { InferGetServerSidePropsType, GetServerSideProps } from 'next' ;/ not to be used in javascript 

const Slug = (props) => {
    //no need to use router as now the serverside rendering has the slug in the req.url 
    const router = useRouter();
    const { slug } = router.query; // Destructuring the slug from router.query
    console.log(props.blogs);
    const blogs = props.blogs.find(blogs => blogs.title == slug);
    // useEffect(() => {
    //     if(!router.isReady) return ;
    //     fetch(`http://localhost:3000/api/blog?title=${slug}`).then((a) => {
    //         return a.json();
    //     })
    //     .then((parsed) => {
    //         console.log(parsed);
    //         setBlog(parsed[0]);
    //     })
    // } , [router.isReady]);
    //
    //
    //
    //
    //

    const markup = { __html: `${blogs.content}` };
    return(
        <>
            <div className={`center ${styles.blogpost}`}>
                
                <h1>{slug}</h1>
                {/* Render the content of fetched blog */}
                {blogs && (
                    <div className={styles.blog}>
                        <p><div dangerouslySetInnerHTML={markup} /></p>
                        <p><strong>Author: </strong>{blogs.author}</p>
                    </div>
                )}
                </div>
        </>
    )
}

export async function getServerSideProps(context){
    // console.log(context.query.slug);
    // context.req.url couldnt use this because we want the query 
    const {slug} = context.query ; 
    // console.log(slug);
    let data = await fetch(`http://localhost:3000/api/blog?title=${slug}`)
    // /******/ simple hai api ko fetch karo
    // oss data ko json format mein change karo 
    // ANd finally osko props mein store kardo 

    let blogs = await data.json();
    // console.log(blogs);
    return {
        props : {blogs}
    }
}
export default Slug;