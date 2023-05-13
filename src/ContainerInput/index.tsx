import React from "react";
import {
    InputCheckBox,
    Container
} from './styles';

export function ContainerInput({ description, functionn, handleFunction }) {
    {
        let description: String;
    }
    return (
        <Container>
            <InputCheckBox type="checkbox"
                checked={functionn}
                onChange = {handleFunction}
            /> {description}
        </Container>
    )
}