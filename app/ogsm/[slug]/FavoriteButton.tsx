"use client";
import { Button } from "@/components/ui/button";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function FavoriteButton() {
  const [favoriteState, setFavoriteState] = useState(true);
  const handleButtonClick = () => {
    setFavoriteState((prevValue) => !prevValue);
  };

  return (
    <Button
      onClick={handleButtonClick}
      className={`flex items-center p-2 ${
        favoriteState
          ? ""
          : "bg-amber-200 text-amber-600 transition hover:bg-amber-300 hover:text-amber-600"
      }`}
      variant="outline"
    >
      {favoriteState ? (
        <StarIconOutline className="h-5 w-5" />
      ) : (
        // {/* <div className="ml-1">Star</div> */}
        <StarIconSolid className="h-5 w-5" />
      )}
    </Button>
  );
}

{
  /* <Button className="flex items-center p-2" variant="outline">
<StarIcon className="h-5 w-5" />
<div className="ml-1">Star</div>
</Button> */
}
