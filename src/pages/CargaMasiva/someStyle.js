import styled from "styled-components";

export const FeaturedContainer = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 230px;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-between;
  background: #f2f4ff;
`;

export const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  background: white;
  overflow-x: scroll;
`;

export const FeaturedTitle = styled.span`
  font-size: 20px;
`;

export const UserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 15px;
`;

export const CargaItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  label {
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
    color: rgb(151, 150, 150);
  }
  input {
    margin-top: 5px;
  }
  input[type="file"] {
    width: 600px;
    max-width: 100%;
    color: #444;
    padding: 5px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #555;
  }
  input[type="file"]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #6367F0;
    padding: 5px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
`;

export const Button1 = styled.button`
  padding: 15px;
  width: 120px;
  border: none;
  background-color: #6367F0;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 37px;
  height: 34px;
  cursor: pointer;
  margin-left: 320px;
`;

export const Button2 = styled(Button1)`
  margin-left: calc(100%, 10px);
`;

export const Atras = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableContainer = styled.div`
  margin-top: 10px;
  padding: 8px;

  background: rgb(237, 237, 237);
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
`;
