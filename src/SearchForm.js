import React from 'react';

import { Form, Col } from 'react-bootstrap'

export default function SearchForm ( { params, onParamChange } ) {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Control placeholder="Description." onChange={onParamChange} value={params.description} name='description' type="text" ></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control placeholder="Location." onChange={onParamChange} value={params.location} name='location' type="text" ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check 
                        onChange={onParamChange}
                        value={params.full_time} 
                        name="full_time" 
                        id="full-time" 
                        label="Only full time." 
                        type="checkbox" 
                        className="mb-2"
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}