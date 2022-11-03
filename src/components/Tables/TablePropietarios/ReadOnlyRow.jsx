import React from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../../Tables/styles.js"
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";


const ReadOnlyRow = ({ propietario, index, handleDeleteClick }) => {
        return (
          <STBodyTR key={index}>
               <STD>{index + 1}</STD>
               <STD>{propietario.name_building}</STD>
               <STD>{propietario.first_name} {propietario.last_name}</STD>
               <STD>{propietario.floor}</STD>
               <STD>{propietario.number_departament}</STD>
               <STD>
                <BsTrashFill
                  onClick={()=> handleDeleteClick(propietario.id)}
                  style={{ color: "#ff0000", fontSize: "25px", cursor: "pointer" }}/>
              </STD>
             </STBodyTR>
        );
};

export default ReadOnlyRow
