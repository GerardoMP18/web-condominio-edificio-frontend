import styled from "styled-components";

/* Global Styles*/
export const v = {
  borderRadius: "8px",

  mdSpacing: "16px",
  smSpacing: "8px",
  lgSpacing: "32px",

  sm: "37.5em",
  md: "48em",
  lg: "64em",

  boxShadow:
    "0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11), 0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11)",
};

export const lightTheme = {
  white: "rgb(255, 255, 255)",
  bg: "rgb(245, 245, 245)",
  bg2: "rgb(237, 237, 237)",
  bg3: "rgb(214, 214, 214)",
  text: "rgb(33, 33, 33)",
  primary: "rgb(224, 132, 209)",
};


/* Table  */
export const Container = styled.div`
  width: 100%;
  padding-top: 70px;
  padding-bottom: 100px;
  padding-left: 230px;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-between;
  background: #f2f4ff;
`;

export const SubContainer = styled.div`
  height: 105%;
  flex: 1;
  margin: 0px 30px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  background: white;
  overflow-x: scroll;
`;

export const Title = styled.h1`
  font-size: 25px;
  display: flex;
  justify-content: center;
  color: #6367f0;
`;

export const STable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: ${v.borderRadius};
  overflow: hidden;
  margin-top: 50px;
`;

/* Table  Headers*/
export const STHead = styled.thead`
  position: sticky;
  z-index: 100;
`;

export const STHeadTR = styled.tr`
  background: ${({ theme }) => theme.bg};
`;

export const STH = styled.th`
  font-weight: normal;
  padding: ${v.smSpacing};
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;

  :not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.bg2};
  }
  :first-of-type {
    width: 1%;
    white-space: nowrap;
  }
`;

/* Table  Body*/
export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
  background: ${({ theme }) => theme.white};
`;

export const STD = styled.td`
  padding: ${v.smSpacing};
  border: 1px solid ${({ theme }) => theme.bg2};
  font-size: 14px;
`;


/* Buttons */
export const ButtonSave = styled.button`
  margin-left: 10px;
  padding: 5px;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid #40ae2e;
  border-radius: 5px;
  background: white;
  transition: all 0.3s ease;
  color: #40ae2e;

  &:hover {
    background: #40ae2e;
    color: white;
  }
`;

export const ButtonDelete = styled(ButtonSave)`
  border: 1px solid #ff0000;
  color: #ff0000;

  &:hover {
    background: #ff0000;
    color: white;
  }
`;


/* Buttons Bulk Load*/
export const StylesNavigation = styled.div`
  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    font-size: 1rem;
    gap: 5px;
    margin-top: 20px;
    font-weight: 500;
  }

  .page-num {
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgba(225, 223, 252, 0.613);
  }

  .page-num:hover {
    background-color: #1876f2;
    color: #f4f6f9;
  }

  .active {
    background-color: #1876f2;
  }
`;
