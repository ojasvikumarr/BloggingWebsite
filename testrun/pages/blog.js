import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import postsData from "@/Data/blogData.json";
import { useEffect , useState } from "react";

const blog = (props) => {
    const [blogs , setBlogs] = useState(props.allBlogs);
//     useEffect(() => {
// //useEffect ne api ko call lagai 
// //that is we fetched at the api link 
// //and stored the data from the api into a const array name blogs 
// //using the useState method 
// //now we populated that data using the map function down below 
//         fetch("http://localhost:3000/api/blog").then((a) => {
//             return a.json();
//         })  
//         .then((parsed) => {
//             console.log(parsed);
//             setBlogs(parsed);
//         })
//     } , [])
    return (<>
        <div className={styles.grid}>
            { blogs.map((blogposts , index) => (
                <div className="post" key={index}>
                    <Link
                    className={styles.card}
                    // target="_blank"
                    rel="noopener noreferrer"
                        href={`/blogpost/${blogposts.title}`}>
                <h2>{blogposts.title} <span>-&gt;</span></h2>
                <p>{blogposts.metaData.substr(0 , 400)}</p>
                <p><strong>Author : </strong>{blogposts.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    </>)
}
//server side rendering , request time pe javascript populate hogyi hai 
//source page mein sba aachuak hai 
export async function getServerSideProps(){
    let data = await fetch("http://localhost:3000/api/blog");
    let allBlogs = await data.json();
    return{
        props : {allBlogs},
    }
}
export default blog;