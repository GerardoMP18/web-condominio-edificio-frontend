import React from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../../Tables/styles.js"
import { BsSave2Fill, BsFillXCircleFill } from "react-icons/bs";


const EditableRow = ({ editFormData, handleEditFormChange, handleEditFormSubmit, index, handleCancelClick }) => {
	return (
	  <STBodyTR>
	       <STD>
		  {index + 1}
	       </STD>
               <STD>
	         <input
		   type="text"
		   required="required"
		   placeholder="Enter a name..."
		   name="name"
		   value={editFormData.name}
		   onChange={handleEditFormChange}
		 ></input>
	       </STD>
               <STD>
		 <input
                   type="text"
                   required="required"
                   placeholder="Enter a address..."
                   name="address"
		   value={editFormData.address}
		   onChange={handleEditFormChange}
                 ></input>
	       </STD>
               <STD>
		 <input
                   type="text"
                   required="required"
                   placeholder="Enter a phone..."
                   name="phone"
		   value={editFormData.phone}
		   onChange={handleEditFormChange}
                 ></input>
	       </STD>
               <STD>
		 <input
                   type="email"
                   required="required"
                   placeholder="Enter a email..."
                   name="email"
		   value={editFormData.email}
		   onChange={handleEditFormChange}
                 ></input>
	       </STD>
               <STD>
		 <input
                   type="text"
                   required="required"
                   placeholder="Enter a ruc..."
                   name="ruc"
		   value={editFormData.ruc}
		   onChange={handleEditFormChange}
                 ></input>
	       </STD>
               <STD>
                 <BsSave2Fill
		   onClick={handleEditFormSubmit}
		   style={{ color: "#416AF9",fontSize: "25px", marginRight: "10px", cursor: "pointer" }}
		  />
                 <BsFillXCircleFill
		   onClick={handleCancelClick}
		   style={{ color: "#ff0000", fontSize: "25px", cursor: "pointer" }}
		  />
              </STD>
             </STBodyTR>
	);
};

export default EditableRow
