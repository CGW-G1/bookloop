import React from "react";
import bookAPI from "../../../API/book-api";

import styles from "../../../styling/style-sheet";

function Wishlist() {

    // const [user, setUser] = React.useState('')

    // React.useEffect(() => {
    //     let p = new Promise(async (resolve) => {
    //         let profile = await bookAPI.get('/protected/viewprofile');
    //         let res = profile.data.data;
    //         resolve(res);
    //     })

    //     p.then((res) => {
    //         console.log("account.js", res)
    //         setUser(res.username);
    //         setEmail(res.email);
    //         setPic(res.imageURL);
    //     });
    // }, [])

    return (
        <div style={styles.containerAlt}>
            <h1 style={styles.h1Font}>Wishlist</h1>
            <div></div>
        </div>

    )
}

export default Wishlist;