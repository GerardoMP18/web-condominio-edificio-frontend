import styled from "styled-components";

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
    background-color: #6367F0;
    color: #f4f6f9;
  }

  .active {
    background-color: #6367F0;
  }
`;