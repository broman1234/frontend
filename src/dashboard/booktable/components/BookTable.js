import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import useUser from "../../../authentication/useUser";

const BookTable = ({setBooks, books}) => {

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    const user = useUser();

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
            .catch((error) => {
            //TODO: handle error
        })
    }

    useEffect(fetchBooks, [setBooks, user.jwt]);


    return (
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
    );
};

export default BookTable;