import styled from 'styled-components/native';


//Background, Container, Logo, AreaInput, Input

export const Background = styled.View`
flex: 1;
background-color: #131313;
`;
export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`;
export const Logo = styled.Image`
margin-bottom: 15px;
`;
export const AreaInput = styled.View`
flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.20)'
})`
background: rgba(0,0,0,0.20);
width: 90%;
font-size: 17px;
color: #fff;
margin-bottom: 15px;
padding: 10px;
border-radius: 7px;
`;

export const Button = styled.TouchableOpacity`
width: 30%;
height: 40px;
margin-top: 20px;
align-items: center;
justify-content: center;
background-color: #00b94a;
border-radius: 10px;
`;
export const ButtonTxt = styled.Text`
font-size: 20px;
font-weight: bold;
`;
export const ButtonConta = styled.TouchableOpacity`
margin-top: 30px;
`;
export const ButtonTxtConta = styled.Text`
font-size: 18px;
color: #fff;
`;