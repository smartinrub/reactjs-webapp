import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, Grid } from 'react-bootstrap';

import Book from './Book';

class BookList extends Component {

    constructor(props) {
        super(props);

        this.state = { books: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/books')
            .then(res => {
                const books = res.data;
                this.setState({ books })
            })
    }

    render() {
        const listBooks = this.state.books.map((book, i) => <Book key={i} book={book} />);

        return (
            <Grid>
                <ListGroup>
                    {listBooks}
                </ListGroup>
            </Grid>
        )
    }
}

export default BookList;
