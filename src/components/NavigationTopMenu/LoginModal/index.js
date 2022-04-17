import React, {useState} from "react";
import {Modal, Button, InputGroup, Form} from 'react-bootstrap';

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const LogInModal = () => {
    const [set, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="btn btn-secondary rounded-pill border-0 m-1" onClick={handleShow}>
                Log in
            </Button>

            <Modal show={set} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className={'container text-center'}>
                        <Modal.Title>Welcome back!</Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control rounded-pill" id="InputEmail"
                                       placeholder="email@domain.com"/>
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="InputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control rounded-pill" id="InputPassword"
                                       placeholder="Password"/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <div className={'container text-center'}>
                        <button className={'btn btn-primary bg-highlight rounded-pill border-0 mb-2'}>Login</button>
                        <div className={'row'}>
                            <a className={'text-center small text-muted'} href={'/#'}>Forgot your password?</a>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default LogInModal;