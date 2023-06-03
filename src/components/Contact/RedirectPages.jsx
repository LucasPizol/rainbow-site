import React, { useEffect, useState } from "react";
import { db } from "../config/config";
import * as database from "firebase/database";

const RedirectPages = () => {
  const handleAddClick = (value) => {
    const ref = database.ref(db);
    const getref = database.get(ref);
    getref.then((data) => {
      const databaseReference = data.toJSON();
      const counting = databaseReference[value] + 1;
      database.set(ref, { ...databaseReference, [value]: counting });
    });
  };

  return (
    <div>
      <a
        href="https://www.instagram.com/rainbowpiercing04"
        target="_blank"
        onClick={() => handleAddClick("Instagram")}
      >
        <img src="https://seeklogo.com/images/I/instagram-new-2022-logo-DB6D03CDF0-seeklogo.com.png" />
        <p>rainbowpiercing04</p>
      </a>

      <a
        href="https://wa.me/553599422529"
        target="_blank"
        onClick={() => handleAddClick("WhatsApp")}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" />
        <p>RainbowPiercing</p>
      </a>
    </div>
  );
};

export default RedirectPages;
