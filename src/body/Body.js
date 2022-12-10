import React from "react";
import "./body.css";
import Box from "@mui/material/Box";
 import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function Body() {
  const columns = [
    {
      field: "ChgCode",
      headerName: "ChgCode",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Customer Name",
      headerName: "Fee Account",
      width: 200,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Currency",
      headerName: "Currency",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Tenor",
      headerName: "Tenor",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Fee Amount Per Book",
      headerName: "Effect Date",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Rate",
      headerName: "Rate",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "Rate",
      headerName: "Amt Granted",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Rate",
      headerName: "Facility Bal",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Rate",
      headerName: "Accrued Int",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Rate",
      headerName: "Accrued Pen",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    
    {
      field: "Rate",
      headerName: "Facility Status",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
  ];

  const rows = [];
  return (
    <div className="Main_Body">
      <div className="body_1">
        <div className="Req_input">
          <label for="Name" style={{fontSize:"25px"}}>Request ID:</label>
          <input type="text" id="Name" name="Name" placeholder="Jane Doe" style={{width:"280px", height:"40px", marginTop:"20px", borderRadius:"5px", marginLeft:"223px" }}/>
        </div>
      </div>

      <br />

      <div className="body_2">
        <div className="Textboxes">
          <div className="TB1">
            <form action="/action_page.php">
              <label for="Name" style={{fontSize:"25px"}}>Account Number:</label>
              <input type="text" id="Name" name="Name" placeholder="Jane Doe" style={{width:"280px", height:"40px", marginTop:"15px", borderRadius:"5px", marginLeft:"20px", marginTop:"40px"}}/>
               <></>
              <input type="text" id="lname" name="lname" disabled size="74" style={{ height:"40px", marginTop:"15px", borderRadius:"5px", marginLeft:"10px", marginTop:"40px"}}></input>
            </form>
          </div>
          <div className="TB2">
            <form action="/action_page.php">
              <label for="Name" style={{fontSize:"25px" }}>Product:</label>
              <input type="text" id="lname" name="lname" disabled style={{width:"280px", height:"40px", marginTop:"15px", borderRadius:"5px",marginLeft:"115px" }}></input>
              <label for="Name" style={{fontSize:"20px", marginLeft:"110px"}}>Date Opened:</label>
              <input type="text" id="lname" name="lname" disabled style={{width:"282px", height:"40px", marginTop:"15px", borderRadius:"5px", marginLeft:"30px" }}></input>
            </form>
          </div>
          <div className="TB3">
            <form action="/action_page.php">
              <label for="Name" style={{fontSize:"25px"}}>Currency:</label>
              <input type="text" id="lname" name="lname" disabled style={{width:"280px", height:"40px", marginTop:"15px", borderRadius:"5px", marginLeft:"100px"}}></input>
              <label for="Name" style={{fontSize:"20px", marginLeft:"44px"}}>Date of Last Activity:</label>
              <input type="text" id="lname" name="lname" disabled style={{width:"285px", height:"40px", marginTop:"15px", borderRadius:"5px",marginLeft:"30px"  }}></input>
            </form>
          </div>
          <div className="TB4">
            <form action="/action_page.php">
              <label for="Name" style={{fontSize:"25px"}}>Cheque Number:</label>
              <input type="text" id="Name" name="Name" placeholder="Jane Doe"  style={{width:"280px", height:"40px", marginTop:"15px", borderRadius:"5px", marginLeft:"29px"}}/>

              <label for="Name" style={{fontSize:"20px",marginLeft:"10px" , marginLeft:"144px"}}>Amount:</label>
              <input type="text" id="Name" name="Name" placeholder="Jane Doe" style={{width:"286px", height:"41px", marginTop:"15px", borderRadius:"5px", marginLeft:"32px"}} />            </form>
          </div>
          <div className="TB5">
            
              <label for="Name" style={{fontSize:"25px"}}>Requested By:</label>
              <input type="text" id="Name" name="Name" placeholder="Jane Doe"  size="119"style={{ height:"40px", marginTop:"15px", borderRadius:"5px", marginLeft:"53px"}}/>

            
          </div>
          <div className="TB6">
            <form action="/action_page.php">
              <label for="Name" style={{fontSize:"20px"}}>Document Number:</label>
              <input type="text" id="Name" name="Name" placeholder="Jane Doe" style={{width:"280px", height:"40px", marginTop:"15px", borderRadius:"5px",marginLeft:"40px" }} />

              <a href="https://freecodecamp.org">View Document</a>


            </form>
          </div>
          <div className="TB7">
            
              <label for="Name" style={{fontSize:"25px"}}>Comments:</label>
              <input type="text" id="Name" name="Name" placeholder="Jane Doe"  size="119" style={{ height:"40px", marginTop:"15px", borderRadius:"5px", marginLeft:"84px" }}/>

            
          </div>


        </div>
      </div>
      <br />
      <div className="body_3">
      <div>
          {/**Data Table */}
          <Box
            sx={{
              height: "220px",
              width: "auto",
              marginLeft: "20px",

              "& .super-app-theme--header": {
                backgroundColor: "rgb(85, 130, 192)",
                color: "white",
                fontStyle: "italic",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[4]}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </div>
      </div>
      
    </div>
  );
}

export default Body;

