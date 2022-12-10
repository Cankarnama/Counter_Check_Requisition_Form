import React from "react";
import Body from "../body/Body";
import Button_option from "../button/Button_option";
import {
  AiFillFileAdd,
  AiOutlineEye,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { TiTick } from "react-icons/ti";

import { BsFileExcel } from "react-icons/bs";

import { FcCancel } from "react-icons/fc";

import { ImSwitch } from "react-icons/im";
import { TbLetterA } from "react-icons/tb";


function Navbar() {
  return (
    <div className="Entire">
      <div className="SEntire">
        <div className="Nav">
          <h1 style={{ padding: 0, margin: 0 }}>Counter check Requisite</h1>
        </div>
        <div className="BottomNav">
          <div className="PbuttonNav">
            <div className="childBn">
              <Button_option text="New" image={<AiFillFileAdd />} />
              <Button_option text="Delete" image={<RxCross1  />} />
              <Button_option text="Authorise" image={<TbLetterA />} />
              <Button_option text="Views" image={<AiOutlineEye />} />
              <Button_option text="Ok" image={<TiTick />} />
              <Button_option text="Cancel" image={<BsFileExcel />} />
              <Button_option text="Reject" image={<FcCancel />} />
              <Button_option text="Help" image={<AiFillQuestionCircle />} />
              <Button_option text="Exit" image={<ImSwitch />} />
            </div>
          </div>
        </div>

        <div>
          <Body />
        </div>
      </div>

      <div className="Nav1"></div>

      <div className="Nav2"></div>
    </div>
  );
}

export default Navbar;
