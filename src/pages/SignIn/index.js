import React, {useState} from "react";
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Background, Container, Logo, AreaInput, Input, Button, ButtonTxt, ButtonConta, ButtonTxtConta} from './styles';

export default function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();


    return(
        <Background>
            <Container>
                <Logo source={require('../../assets/Logo.png')}/>
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
                    <ButtonTxt>Acessar</ButtonTxt>
                </Button>

                <ButtonConta onPress={() => navigation.navigate("SignUp")}>
                    <ButtonTxtConta>Criar uma conta</ButtonTxtConta>
                </ButtonConta>

            </Container>
        </Background>
    );

}