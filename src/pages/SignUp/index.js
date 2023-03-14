import React, {useState} from "react";

import {Background, Container, Logo, AreaInput, Input, Button, ButtonTxt} from '../SignIn/styles';

export default function SignUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');


    return(
        <Background>
            <Container>
          
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={(val) => setNome(val)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(val) => setEmail(val)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Password"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                    />
                </AreaInput>

                <Button>
                    <ButtonTxt>Cadastrar</ButtonTxt>
                </Button>

            </Container>
        </Background>
    );

}