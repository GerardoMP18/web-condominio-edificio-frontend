import styled from "styled-components";
import guy from "../../assets/img/guy.png";

export const Section = styled.section`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerLogin = styled.div`
    padding-top: 10%;
`;

export const H1 = styled.h1`
    font-family: 'Nunito';
    margin-left: 60px;
    font-size: 30px;
    color: #04103B;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    font-family: 'Nunito';
    padding: 12px;
    width: 250px;
    border-radius: 5px;
    border-style: none;
    margin-left: 20px;

    input[placeholder], [placeholder], *[placeholder] {
        color: #04103B;
    }
`;

export const TextoRe = styled.a`
    font-family: 'Nunito';
    margin-left: 150px;
    color: #686585;
    font-size: 12px;
    display: inline-block;
    margin-bottom: 20px;
    text-decoration: none;
    margin-top: 10px;
`;

export const TextoBtn = styled.a`
    color: white;
    background-color: #4461F2;
    border-radius: 10px;
    font-family: 'Nunito';
    padding: 11px 100px;
    margin-left: 23px;
    text-decoration: none;
    display: inline-block;
`;


// const TextoSi = styled.p`
//     font-family: 'Nunito';
//     margin-left: 70px;
//     color: #04103B;
//     margin-bottom: -2px;
//     font-size: 15px;
// `;

// const TextoRegister = styled.a`
//     font-family: 'Nunito';
//     color: #4461F2;
//     text-decoration: none;
//     font-weight: bolder;
//     margin-left: 90px;    
// `;

export const DesignRectangle = styled.div`
    position: fixed;
    background-image: linear-gradient(#5E5DEF, #98D7FF);
    width: 300px;
    height: 650px;
    left: 65.07%;
    right: -20.05%;
    top: -10.6%;
    bottom: 68.5%;
    z-index: -100;
    transform: rotate(130deg);
    filter: blur(4px);
    border-radius: 15px;   
`;

export const DesignCicle1 = styled.div`
    z-index: -100;
    position: fixed;
    top: 60%;
    left: 40%;
    width: 150px;
    height: 150px;
    background-color: #4a86ff;
    filter: blur(100px);
`;
export const DesignCicle2 = styled.div`
    z-index: -100;
    position: fixed;
    top: 55%;
    left: 35%;
    width: 100px;
    height: 100px;
    background-color: #ffcc53;
    filter: blur(100px);
`;
export const DesignCicle3 = styled.div`
    z-index: -100;
    position: fixed;
    top: 25%;
    left: 20%;
    width: 150px;
    height: 150px;
    background-color: #9797ff;
    filter: blur(90px);
`;
export const DesignCicle4 = styled.div`
    z-index: -100;
    position: fixed;
    top: 50%;
    left: 10%;
    width: 150px;
    height: 150px;
    background-color: #98D7FF;
    filter: blur(80px);
`;

export const ImageFondo = styled.div`
    background-image: url(${guy});
    background-size: 400px;
    background-position: center;
    background-repeat: no-repeat;
    left: 60%;
    width: 500px;
    height: 500px;
    position: absolute;
`;