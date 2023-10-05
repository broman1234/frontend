import {useContext} from "react";
import {UserContext} from "../../../authentication/userProvider";

const useSearchArea = (fetchBooks) => {
    const {validateAndRefreshJwt} = useContext(UserContext);

    const submitSearchBooks = async () => {
        const validJwt = await validateAndRefreshJwt();
        fetchBooks(validJwt);
    }

    return {submitSearchBooks}
}

export default useSearchArea;