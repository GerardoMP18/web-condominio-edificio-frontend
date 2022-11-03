import React from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../../Tables/styles.js"
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";


const ReadOnlyRow = ({ inquilino, index, handleDeleteClick }) => {
        return (
          <STBodyTR key={index}>
               <STD>{index + 1}</STD>
               <STD>{inquilino.name_building}</STD>
               <STD>{inquilino.first_name} {inquilino.last_name}</STD>
               <STD>{inquilino.floor}</STD>
               <STD>{inquilino.number_departament}</STD>
               <STD>
                <BsTrashFill
                  onClick={()=> handleDeleteClick(inquilino.id)}
                  style={{ color: "#ff0000", fontSize: "25px", cursor: "pointer" }}/>
              </STD>
             </STBodyTR>
        );
};

export default ReadOnlyRow
