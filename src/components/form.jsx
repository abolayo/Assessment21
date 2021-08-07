import React from "react";
import { Form } from "react-bootstrap";
function InputForm() {
    return (
        <div className="pb-4 mt-4">
            <div className="text" >
                <h6 className='fbag'>FoodBag</h6>
                <h4>Anything food, you are covered</h4>
            </div>
            <div className="row justify-content-center mt-4 pt-4">
                <div className="col">
                <Form>
                <Form.Label className='form_label' >Where are you?</Form.Label>
                <Form.Select aria-label="select" size="lg">
                    <option>Bodija Market</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Form>
            </div>
            </div>   
        </div>
    )
}
export default InputForm