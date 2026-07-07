"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import BecomeDealerDialog from "./become-dealer-dialog";
export default function Btn(params) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className=" btn  text-white cursor-pointer "
        onClick={() => setIsOpen(true)}
      >
        Become a Dealer
      </button>
      <BecomeDealerDialog isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
    </>
  );
}
