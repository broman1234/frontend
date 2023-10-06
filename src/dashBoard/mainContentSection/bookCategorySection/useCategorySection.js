import {useCallback, useContext, useEffect, useState} from "react";
import {UserContext} from "../../../authentication/userProvider";

const useCategorySection = () => {
    const [fetchedCategories, setFetchedCategories] = useState([]);
    const {validateAndRefreshJwt} = useContext(UserContext);

    const fetchCategories = useCallback((validJwt) => {
        fetch("api/admin/books/categories", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + validJwt
            },
            method: "get"
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then((body) => {
            setFetchedCategories([...body]);
        }).catch((error) => {
            if (error.status !== 403) {
                alert("Cannot fetch categories");
            }
        });
    }, [])

    useEffect(() => {
            async function fetchData() {
                const validJwt = await validateAndRefreshJwt();
                fetchCategories(validJwt);
            }

            fetchData().then(() => {});
        }
        , [fetchCategories, validateAndRefreshJwt])

    return {fetchedCategories}
}

export default useCategorySection;