import React from "react";
import {Section, ContainerLogin, H1, Input, TextoRe, TextoBtn} from './someStyle'
import {ImageFondo, DesignRectangle, DesignCicle1, DesignCicle2, DesignCicle3, DesignCicle4, Background, StyledLink} from './someStyle'

export function Login() {
    return(
        <Section>
            <ContainerLogin>
                <H1>Iniciar Sesión</H1>
                <Input type="text" placeholder="Enter E-mail"/>
                <br/>
                <br/>
                <Input type="password" placeholder="•••••••••••"/>
                <br/>
                <TextoRe  href="$">Recuperar contraseña?</TextoRe>
                <br/>
                <TextoBtn><StyledLink to="/home">Sign In</StyledLink></TextoBtn>
            </ContainerLogin>
            <ImageFondo/>
            <DesignRectangle/>
            <DesignCicle1/>
            <DesignCicle2/>
            <DesignCicle3/>
            <DesignCicle4/>
            <Background />
        </Section>
    );
}