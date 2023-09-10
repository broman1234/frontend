const useBookSupplementation = () => {

    const addBook = () => {
        // const reqBody = {
        //     "title": "In Search of Lost Time",
        //     "author": "Prust",
        //     "category":"Stream of Consciousness Novel",
        //     "publisher": "Heaven"
        // };
        // fetch("api/books", {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     method: "post",
        //     body: JSON.stringify(reqBody)
        // })
        //     .then(response => {
        //         if (response.status === 200) {
        //             return Promise.all([response.json()]);
        //         } else {
        //             return Promise.reject("Wrong username or password");
        //         }
        //     })
        //     .then(([body]) => {
        //         user.setJwt(body.access_token);
        //         user.setRefreshJwt(body.refresh_token);
        //     }).catch((message) => {
        //     setErrorMessage(message);
        // });
    }
    return {addBook}
}

export default useBookSupplementation