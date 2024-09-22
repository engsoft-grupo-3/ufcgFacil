import { ButtonText, Container, LoginButton, LoginCard, LoginInput, SupportText, ErrorText } from "@/styles/login";
import { Alert, Image, TextInputProps, TouchableOpacityProps, View } from "react-native";
import * as yup from 'yup';

import logo from "../../assets/images/Logo.png";
import { router } from "expo-router";
import { useFormik } from "formik";

import fazerLogin from "@/services/login";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";




type Props = {
  touchableOpacityProps: TouchableOpacityProps;
  textInputProps: TextInputProps
}

export default function Login({ touchableOpacityProps, textInputProps }: Props) {

  function handleNavigationNoValidation() {
    router.replace("/home");
  }

  const {setCookieAuth} = useContext(AuthContext);

  const validationSchema = yup.object().shape({
    matricula: yup.string().required('Preencha com a sua matrícula').matches(/^\d{9}$/, 'Informe uma matrícula válida'),
    password: yup.string().required('Preencha com a sua senha')
  })

  const { handleChange, values, handleSubmit, handleBlur, errors, touched } = useFormik({
    validationSchema,
    initialValues: {
      matricula: "",
      password: ""
    },
    onSubmit: async (values) => {
      try{
        await fazerLogin(values.matricula, values.password, setCookieAuth);
        router.replace("/home");

      } catch (error) {
        Alert.alert("Login inválido", "Tente novamente");
        
      }
    }
  });


  return (
    <Container>
      <Image source={logo} />

      <LoginCard>
        <View>
          <LoginInput
            placeholder="Matrícula"
            name="matricula"
            keyboardType="number-pad"
            value={values.matricula}
            onChangeText={handleChange("matricula")}
            onBlur={handleBlur("matricula")}
            touched={touched.matricula}
            error={errors.matricula}
            {...textInputProps}
          />
          {(errors.matricula && touched.matricula) && <ErrorText>{errors.matricula}</ErrorText>}
        </View>
        <View>

          <LoginInput
            placeholder="Senha"
            name="password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            touched={touched.password}
            error={errors.password}
            {...textInputProps}
          />
          {(errors.password && touched.password) && <ErrorText>{errors.password}</ErrorText>}
        </View>
        <LoginButton {...touchableOpacityProps} onPress={handleSubmit}>
          <ButtonText>Acessar</ButtonText>
        </LoginButton>
      </LoginCard>

      <SupportText>Problemas com o acesso?</SupportText>
    </Container>
  );
}
