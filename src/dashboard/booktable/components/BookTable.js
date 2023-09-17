import React, {useContext, useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import useUser from "../../../authentication/useUser";
import {BannerContext} from "../../../banner/BannerProvider";
import Banner from "../../../banner/Banner";

const BookTable = ({setBooks, books}) => {

    const user = useUser();
    const {setBannerStyle, setBannerMessage, bannerMessage, bannerStyle} = useContext(BannerContext);
    const [isShowBookTableErrorBanner, setIsShowBookTableErrorBanner] = useState(false);

    const fetchBooks = () => {
        fetch("api/admin/books", {
            headers: {
                "Authorization": "Bearer " + user.jwt
            },
            method: "get"
        })
            .then((response) =>
                response.json()
            )
            .then(data => setBooks(data.content))
            .catch(() => {
                setIsShowBookTableErrorBanner(true);
                setBannerStyle('danger');
                setBannerMessage("The server has some error. Please try again");
        })
    }

    useEffect(fetchBooks, [setBooks, user.jwt]);


    return (
        <Banner isShowBanner={isShowBookTableErrorBanner} bannerStyle={bannerStyle} bannerMessage={bannerMessage}>
            <Table striped bordered hover className="mt-3">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Publisher</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => {
                    let bookIndex = books.indexOf(book);
                    return (
                        <tr key={bookIndex}>
                            <td>{bookIndex + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.category}</td>
                            <td>{book.publisher}</td>
                        </tr>
                    )})}
                </tbody>
            </Table>
        </Banner>

    );
};

export default BookTable;