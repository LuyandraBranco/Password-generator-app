import React from "react";
import { useState } from "react";
import {
    Container,
    ContainerItem,
    Title,
    Password,
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

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;:'\",.<>/?";

export function ContainerApp() {

    const [passwordLength, setPasswordLength] = useState(0);
    const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(
        false
    );
    const [includeLowercaseLetters, setIncludeLowercaseLetters] = useState(
        true
    );
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState("");

    const handlePasswordLengthChange = (event) => {
        setPasswordLength(event.target.value);
    };

    const handleIncludeUppercaseLettersChange = (event) => {
        setIncludeUppercaseLetters(event.target.checked);
    };

    const handleIncludeLowercaseLettersChange = (event) => {
        setIncludeLowercaseLetters(event.target.checked);
    };

    const handleIncludeNumbersChange = (event) => {
        setIncludeNumbers(event.target.checked);
    };

    const handleIncludeSymbolsChange = (event) => {
        setIncludeSymbols(event.target.checked);
    };

    function generatePassword() {
        let passwordChars = "";

        if (includeUppercaseLetters) {
            passwordChars += uppercaseLetters;
        }

        if (includeLowercaseLetters) {
            passwordChars += lowercaseLetters;
        }

        if (includeNumbers) {
            passwordChars += numbers;
        }

        if (includeSymbols) {
            passwordChars += symbols;
        }

        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * passwordChars.length);
            password += passwordChars[randomIndex];
        }

        return password;
    }
    const handleGenerateButtonClick = () => {
        const password = generatePassword();
        setGeneratedPassword(password);
    };
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(generatedPassword);
      }
    return (
        <Container>
            <ContainerItem>
                <Title>Password Generator</Title>
                <ContainerPassword>
                    <Password>{generatedPassword}</Password>
                    <HiOutlineClipboardDocument onClick={handleCopyToClipboard}/>
                </ContainerPassword>
                <ContainerElements>
                    <Text>
                        <TitleContainer>Character Lenght</TitleContainer>
                        <CounterNumber>{passwordLength}</CounterNumber>
                    </Text>
                    <Elements>
                        <InputRange
                            type="range"
                            id="password-length"
                            min="0"
                            max="32"
                            value={passwordLength}
                            onChange={handlePasswordLengthChange}

                        />
                        <ContainerInput
                            description={"Include Uppercase Letters"}
                            functionn={includeUppercaseLetters}
                            handleFunction={handleIncludeUppercaseLettersChange}
                        />
                        <ContainerInput
                            description={"Include Lowercase Letters"}
                            functionn={includeLowercaseLetters}
                            handleFunction={handleIncludeLowercaseLettersChange}
                        />
                        <ContainerInput
                            description={"Include Numbers"}
                            functionn={includeNumbers}
                            handleFunction={handleIncludeNumbersChange}
                        />
                        <ContainerInput
                            description={"Include Symbols"}
                            functionn={includeSymbols}
                            handleFunction={handleIncludeSymbolsChange}
                        />
                    </Elements>

                    <Strengt>
                        <TitleContainer>Strengt</TitleContainer>
                        {/* <ProgressBarContainer>
                            <ProgressBar strength={passwordStrength} />
                        </ProgressBarContainer> */}
                    </Strengt>
                    <Button onClick={handleGenerateButtonClick}>Generate</Button>
                </ContainerElements>

            </ContainerItem>
        </Container>
    )
}