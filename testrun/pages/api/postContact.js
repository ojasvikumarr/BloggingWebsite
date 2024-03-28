import * as fs from 'fs';
export default async function handler(req , res){
    if(req.method === 'POST'){
        res.status(200).json(["YEs Post recieved"])
        console.log(req.body) ;
        let data = await fs.promises.readdir("contactData");
        console.log(data);//data.length will give the length of the array
        fs.writeFile(`contactData/${data.length+1}.json` , JSON.stringify(req.body) , (err) => {
            if(err) throw err ;
            console.log("File saved successfully");
        })
    }else{
        res.status(200).json(["AllBlogs"])
    }
}