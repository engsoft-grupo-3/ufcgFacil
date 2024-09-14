import { Alert, TouchableOpacity } from "react-native";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import * as yup from 'yup';
import moment from "moment";
import { useFormik } from "formik";

import { eventCreate } from "@/storage/event/eventCreate";
import { EventStorageDTO } from "@/storage/event/EventStorageDTO";

import { AddEventButton, ButtonText, Container, ErrorText, Header, HeaderTitle, Input, InputContainer, InputTitle } from "@/styles/newEvent";
import { ArrowLeft } from "phosphor-react-native";

export default function newEvent() {
    const router = useRouter();

    function handleBack() {
        router.back()
    }

    const validationSchema = yup.object().shape({
        className: yup.string().required('Informe a disciplina'),
        title: yup.string().required('Informe o título do evento'),
        description: yup.string(),
        date: yup.string()
            .test(
                'Data inválida',
                'A data digitada não é válida',
                (value) => moment(value, "DD/MM/YYYY", true).isValid()

            )
            .test(
                'Data mínima',
                'A data não pode ser menor que hoje',
                (value) => moment(value, "DD/MM/YYYY").format("YYYYMMDD") > moment().format("YYYYMMDD"),
            )
    });

    const { handleChange, values, handleSubmit, handleBlur, errors, touched } = useFormik({
        validationSchema,
        initialValues: {
            className: "",
            title: "",
            description: "",
            date: new Date()
        },
        onSubmit: (values) => {
            handleFormSubmit(values)
        }
    });

    async function handleFormSubmit(values: EventStorageDTO) {
        const newEvent = {
            className: values.className.trim(),
            title: values.title.trim(),
            description: values.description.trim(),
            date: values.date,
        }

        try {
            await eventCreate(newEvent);
            router.back();
        } catch (error) {
            Alert.alert('Novo evento', 'Não foi possível adicionar o evento');
        }
    }

    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={handleBack}>
                    <ArrowLeft color="#2D1E70" weight="bold" />
                </TouchableOpacity>
                <HeaderTitle>Novo evento</HeaderTitle>
            </Header>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <InputTitle>Disciplina</InputTitle>
                    <InputContainer>
                        <Input
                            placeholder="Escolha a disciplina"
                            name="className"
                            value={values.className}
                            onChangeText={handleChange("className")}
                            onBlur={handleBlur("className")}
                            touched={touched.className}
                            error={errors.className}
                        />
                        {(errors.className && touched.className) && <ErrorText>{errors.className}</ErrorText>}
                    </InputContainer>

                    <InputTitle>Título</InputTitle>
                    <InputContainer>
                        <Input
                            placeholder="Escolha um título para o evento"
                            name="title"
                            value={values.title}
                            onChangeText={handleChange("title")}
                            onBlur={handleBlur("title")}
                            touched={touched.title}
                            error={errors.title}
                        />
                        {(errors.title && touched.title) && <ErrorText>{errors.title}</ErrorText>}
                    </InputContainer>

                    <InputTitle>Descrição</InputTitle>
                    <InputContainer>
                        <Input
                            placeholder="Descreva o evento"
                            multiline
                            numberOfLines={12}
                            name="description"
                            value={values.description}
                            onChangeText={handleChange("description")}
                            onBlur={handleBlur("description")}
                            touched={touched.description}
                            error={errors.description}
                        />
                        {(errors.description && touched.description) && <ErrorText>{errors.description}</ErrorText>}
                    </InputContainer>

                    <InputTitle>Data</InputTitle>
                    <InputContainer>
                        <Input
                            placeholder="Escolha uma data"
                            name="date"
                            value={values.date}
                            onChangeText={handleChange("date")}
                            onBlur={handleBlur("date")}
                            touched={touched.date}
                            error={errors.date}
                        />
                        {(errors.date && touched.date) && <ErrorText>{errors.date}</ErrorText>}
                    </InputContainer>

                    <AddEventButton onPress={handleSubmit}>
                        <ButtonText>Criar</ButtonText>
                    </AddEventButton>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    )
}