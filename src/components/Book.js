import React, { Component } from 'react';
import { ListGroupItem, ProgressBar, Button, Row, Col, Grid, FormGroup, FormControl, Form } from 'react-bootstrap';


class Book extends Component {
    constructor(props) {
        super(props);

        this.progress = props.book.currentPage * 100 / props.book.length;
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <ListGroupItem bsStyle={this.props.book.read ? "danger" : "info"} id={this.props.book.id}>
                        <Grid>
                            <Row>
                                <Col md={8}>{this.props.book.name}</Col>
                                <Col md={4}>
                                    <Form inline>
                                        <FormGroup>
                                            <FormControl                                            
                                                type="number"
                                                placeholder="Enter Page"
                                            />
                                        </FormGroup>{' '}
                                        <Button type="submit" bsStyle="warning">Submit</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Grid></ListGroupItem>
                    <ProgressBar now={this.progress} label={`${this.props.book.currentPage} / ${this.props.book.length}`} />
                </Col>
            </Row>
        )
    }
}

export default Book;
