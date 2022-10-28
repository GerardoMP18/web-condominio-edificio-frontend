import styled from "styled-components";
import buildings from "../../assets/img/buildings.png";

export const Building = styled.div`
    background-image: url(${buildings});
    background-repeat: no-repeat;
    left: 20%;
    background-size: 100%;
    width: 1050px;
    height: 206px;
    position: absolute;
    border-radius: 53px;
    margin-top: 20px;
    text-align: center;
`;

export const Container = styled.div`
    padding-left: 220px;
`;

export const Background = styled.div`
    background-color: #F2F4FF;
    width: 100%;
    height: 90%;
    position: absolute;
`;
export const Span = styled.div`
    font-size: 18px;
    color: #F2F4FF;
    margin-top: 30px;
    margin-bottom: -20px;
`;
export const FeatureTitle = styled.h1`
    font-size: 120px;
    color: #F2F4FF;
    font-family: 'Times New Roman', Times, serif;
`;
export const Span1 = styled.div`
    font-size: 18px;
    color: #F2F4FF;
    margin-top: -20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const Container1 = styled.div`
    float: left;
    margin-top: 250px;
    width: 25%;
    margin-left: 100px;
`;

export const Container2 = styled.div`
    float: right;
    margin-top: 240px;
    width: 50%;
    right: 60%;
    margin-right: 90px;
`;