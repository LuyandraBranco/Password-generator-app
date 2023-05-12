import React from "react";
import {
    InputCheckBox,
    Container
} from './styles';

export function ContainerInput({description}) {
    {
        let description: String
    }
    return (
        <Container>
           <InputCheckBox type= "checkbox"/> {description}
        </Container>
    )
}