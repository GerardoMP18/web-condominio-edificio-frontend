import React from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../../Tables/styles.js"
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";


const ReadOnlyRow = ({ building, index, handleEditClick, handleDeleteClick }) => {
        return (
          <STBodyTR key={index}>
               <STD>{index + 1}</STD>
               <STD>{building.name_building}</STD>
               <STD>{building.address}</STD>
               <STD>{building.phone}</STD>
               <STD>{building.email}</STD>
               <STD>{building.ruc}</STD>
               <STD>
                <BsPencilSquare
                  onClick={(event) => handleEditClick(event, building)}
                  style={{ color: "#416AF9",fontSize: "25px", marginRight: "10px", cursor: "pointer" }}
                />
                <BsTrashFill
                  onClick={()=> handleDeleteClick(building.id)}
                  style={{ color: "#ff0000", fontSize: "25px", cursor: "pointer" }}/>
              </STD>
             </STBodyTR>
        );
};

export default ReadOnlyRow
