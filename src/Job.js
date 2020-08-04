import React, { useState } from 'react'

import { Card, Badge, Button, Collapse } from 'react-bootstrap'

import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
    const [open, setOpen] = useState(false)
    
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {job.created_at}
                        </Card.Subtitle>
                    </div>
                </div>
                <Badge variant="secondary" className="mr-2" >{job.type}</Badge>
                <Badge variant="secondary">{job.location}</Badge>
                <div style={{ wordBreak: 'break-all' }}>
                    <ReactMarkdown source={job.how_to_apply} />
                </div>
                <div>
                    <img className="d-md-block" height="50" src={job.company_logo} alt={job.company}/>
                </div>
                <Card.Text>
                    <Button 
                        variant="primary"
                        onClick={() => setOpen(prevOpen => !prevOpen)}  
                        className="mt-4"  
                    >
                        {open ? 'Hide Details' : 'View details.'}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="my-4">
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}