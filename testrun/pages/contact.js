import styles from "@/styles/Home.module.css"
import React, { useState } from "react";



const contact = () => {
    const [nameF, setnameF] = useState('');
    const [nameL, setnameL] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [pass, setpass] = useState('');
    const [concern, setconcern] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameF , nameL , email , phone , pass , concern);
        const data = {nameF , nameL , email , phone , pass , concern};

        fetch('http://localhost:3000/api/postContact', {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .then(response => response.text())
          .then(data => {
            console.log('Success : ' , data);
            alert('Thanks for contacting us ');
            setphone('');
            setnameF('');
            setnameL('');
            setemail('');
            setpass('');
            setconcern('');
          })
          .catch((error) =>{
            console.error('Error : ', error);
          })
        
    }
    const handleChange = (e) => {

        if (e.target.name == 'phone') {
            setphone(e.target.value);
        }
        if (e.target.name == 'nameF') {
            setnameF(e.target.value);
        }
        if (e.target.name == 'nameL') {
            setnameL(e.target.value);
        }
        if (e.target.name == 'email') {
            setemail(e.target.value);
        }
        if (e.target.name == 'pass') {
            setpass(e.target.value);
        }
        if (e.target.name == 'concern') {
            setconcern(e.target.value);
        }
        
    }
    return (
        <>
            <div className={styles.aboutus}>
                <h1 className={styles.heading}>Contact Us</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <label htmlFor="nameF" className={styles.label}>Enter your first name</label>
                        <input type="text" onChange={handleChange} value={nameF} id="nameF" name="nameF" className={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="nameL" className={styles.label}>Enter your last name</label>
                        <input type="text" onChange={handleChange} value={nameL} id="nameL" name="nameL" className={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="email" className={styles.label}>Enter your Email ID</label>
                        <input type="text" onChange={handleChange} value={email} id="email" name="email" className={styles.input} />
                        <p>We'll never share your email with anyone else </p>
                    </div>
                    <div>
                        <label htmlFor="phone" className={styles.label}>Please provide your Phone No.</label>
                        <input type="number" onChange={handleChange} value={phone} id="phone" name="phone" className={styles.input} />
                        <p>you can trust us</p>
                    </div>
                    <div>
                        <label htmlFor="pass" className={styles.label}>Password</label>
                        <input type="text" onChange={handleChange} value={pass} id="pass" name="pass" className={styles.input} />
                        <p>yup you can</p>
                    </div>
                    <div>
                        <label htmlFor="comment">Concerns</label>
                        <textarea className={styles.textarea} onChange={handleChange} value={concern} id="comment" name="concern" cols="30" rows="10"></textarea>
                    </div>
                    <button>Submit</button>
                </form>

            </div>
        </>
    )
}

export default contact; 