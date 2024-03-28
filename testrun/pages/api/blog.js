import * as fs from 'fs';

export default async function handler (req , res){
//here we fetched the data from the folder "Data"
//we went into the directory "Data"
//we stored all the maal paaani in an const data
//we used a for loop instead of forEach loop 
//because it was sending a promise and we had to use async for it 
//thus async cant be used instead functio thus we had to use the loop to traverse through the array while fetching the data 
//the data needed time to be fecthed thus used async


//all the data from the directory is now stored in the myFile using readFile 
//this is now pushed into an array while parsing it 
//this array ALlBlogs is now sent to the webpage 
//hence we formed an API 

    let data = await fs.promises.readdir("Data");
    // res.status(200).json(data);
    let allBlogs = [];
    for(let i = 0 ; i < data.length ; i++){
        // console.log(data[i]);
        let myFile = await fs.promises.readFile("Data/"+data[i] );
        // console.log(JSON.parse(myFile));
        allBlogs.push(JSON.parse(myFile));
    }
    // console.log(allBlogs);
        res.json(allBlogs);
    }
    // fs.promises.readdir("Data" , 'utf-8', (err ,data)=>{
    //     console.log(data);
    //     let allBlogs = [];
    //     data.forEach((item) => {
    //         console.log(item);
    //         fs.readFile("Data/"+item , (err ,data) => {
    //             console.log(JSON.parse(data));
    //             allBlogs.push(data);
    //             // res.send(JSON.parse(data));
    //             // res.status(200).json(JSON.parse(data));
    //         })
    //     })
    //     res.status(200).json(JSON.parse(allBlogs));
    // } );
