import React, { Component } from 'react';

import Header from './Header';
import BookList from './BookList';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <BookList />
            </div>
        )
    }
}

export default App;