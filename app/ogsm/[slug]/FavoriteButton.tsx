"use client";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function FavoriteButton() {
  const [favoriteState, setFavoriteState] = useState(true);
  const handleButtonClick = () => {
    setFavoriteState((prevValue) => !prevValue);
  };

  return (
    <div onClick={handleButtonClick}>
      {favoriteState ? (
        <span className="flex items-center gap-1 text-sm text-amber-600">
          <StarIcon className="h-5 w-5" />
        </span>
      ) : (
        <span className="flex items-center gap-1 text-sm text-amber-600">
          <StarFilledIcon className="h-5 w-5"></StarFilledIcon>
        </span>
      )}
    </div>
  );
}
