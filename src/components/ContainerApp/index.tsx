import React from "react";
import {
    Container,
    ContainerItem,
    Title,
    ContainerPassword,
    ContainerElements,
    TitleContainer,
    Strengt,
    InputRange,
    Button,
    Text,
    Elements,
    CounterNumber

} from './styles';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { ContainerInput } from "../../ContainerInput";

export function ContainerApp() {
    return (
        <Container>
            <ContainerItem>
                <Title>Password Generator</Title>
                <ContainerPassword>
                    <HiOutlineClipboardDocument />
                </ContainerPassword>
                <ContainerElements>
                    <Text>
                        <TitleContainer>Character Lenght</TitleContainer>
                        <CounterNumber>0</CounterNumber>
                    </Text>
                    <Elements>
                        <InputRange type="range" />
                        <ContainerInput description={"Include Uppercase Letters"} />
                        <ContainerInput description={"Include Lowercase Letters"} />
                        <ContainerInput description={"Include Numbers"} />
                        <ContainerInput description={"Include Symbols"} />
                    </Elements>

                    <Strengt>
                        <TitleContainer>Strengt</TitleContainer>
                    </Strengt>
                    <Button>Generate</Button>
                </ContainerElements>

            </ContainerItem>
        </Container>
    )
}