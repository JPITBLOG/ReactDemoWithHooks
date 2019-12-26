import React from 'react';
import { Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    NavLink,Alert } from 'reactstrap';

const RegisterModal = (props) => {

    const {registerModal,name,emailId,pswd,errors} = props.state
    return (
        <div>
            <Modal isOpen={registerModal} toggle={props.toggle} className={props.classname}>
                {props.registerError !=='' ? (<Alert color="danger">{props.registerError}</Alert>) : null}
                <ModalHeader toggle={props.toggle}>Sign Up</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input onChange = {event => props.handleChange(event,"name")} type="text" name="name" id="nam" placeholder="Name" value = {name || ''}/>
                            <span style={{color: "red"}}>{errors["name"]}</span>
                        </FormGroup>
                        <FormGroup>
                            <Input onChange = {event => props.handleChange(event,"emailId")} type="email" name="email" id="email" placeholder="Email" value = {emailId || ''}/>
                            <span style={{color: "red"}}>{errors["emailId"]}</span>
                        </FormGroup>
                        <FormGroup>
                            <Input onChange = {event => props.handleChange(event,"pswd")} type="password" name="password" id="Password" placeholder="Password" value = {pswd || ''}/>
                            <span style={{color: "red"}}>{errors["pswd"]}</span>
                        </FormGroup>
                        <Button className="btn-primary" onClick={props.SignUp}>Sign Up</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    Already have an account?
                    <NavLink onClick={props.alreadyRegister}>Sign In</NavLink>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default RegisterModal;