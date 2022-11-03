import React from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../../Tables/styles.js"
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";


const ReadOnlyRow = ({ condominium, index, handleEditClick, handleDeleteClick }) => {
	return (
	  <STBodyTR key={index}>
	       <STD>{index + 1}</STD>
               <STD>{condominium.name}</STD>
               <STD>{condominium.address}</STD>
               <STD>{condominium.phone}</STD>
               <STD>{condominium.email}</STD>
               <STD>{condominium.ruc}</STD>
               <STD>
                <BsPencilSquare
		  onClick={(event) => handleEditClick(event, condominium)}
		  style={{ color: "#416AF9",fontSize: "25px", marginRight: "10px", cursor: "pointer" }}
		/>
                <BsTrashFill
		  onClick={()=> handleDeleteClick(condominium.id)}
		  style={{ color: "#ff0000", fontSize: "25px", cursor: "pointer" }}/>
              </STD>
             </STBodyTR>
	);
};

export default ReadOnlyRow
