import React from "react"
import { useRouter } from "next/router"

export default slug = () => {
    const router = useRouter();
    console.log(router.query);
    const slugg = router.query ;
    return(
        <>
            <div>{slugg}</div>
        </>
    )
}