"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function SaveButton() {
  const [saveState, setSaveState] = useState(true);
  const handleButtonClick = async () => {
    const serverEndpoint = "http://localhost:300/api/ogsm";

    try {
      // Assuming you want to send some data along with the request
      const dataToSend = { text: "Hello World!" };

      const response = await fetch(serverEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // If the save operation was successful, update the state or handle accordingly
        setSaveState(true);
        console.log("Text saved successfully");
        // window.location.reload();
      } else {
        console.error("Failed to save text");
      }
    } catch (error) {
      console.error("Error during save:", error);
    }
  };

  return (
    <Button onClick={handleButtonClick} className="flex items-center p-2">
      <ArrowDownTrayIcon className="h-5 w-5" />
      <div className="ml-1 text-sm">{saveState ? "Saved" : "Save"}</div>
    </Button>
  );
}
