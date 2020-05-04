import React, { useState } from "react";

const TouchEventComponent = (props) => {
  const [displayText, setDisplayText] = useState("Swipe me");

  //USAGE:
  let swipedir,
      startX,
      startY,
      distX,
      distY,
      threshold = 150, //required min distance traveled to be considered swipe
      restraint = 100, // maximum distance allowed at the same time in perpendicular direction
      allowedTime = 300, // maximum time allowed to travel that distance
      elapsedTime,
      startTime;

    const onTouchStart = (event) => {
    let touchobj = event.changedTouches[0];
      swipedir = "none";
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime(); // record time when finger first makes contact with surface
      // event.preventDefault();
  };
  const onTouchMove = (event) => {
    // event.preventDefault();
  };
  const onTouchEnd = (event) => {
    var touchobj = event.changedTouches[0];
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime) {
          // first condition for swipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
            // 2nd condition for horizontal swipe met
            swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
          } else if (
            Math.abs(distY) >= threshold &&
            Math.abs(distX) <= restraint
          ) {
            // 2nd condition for vertical swipe met
            swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
          }
        }
        setDisplayText(`Swiped ${swipedir}`);
        // event.preventDefault();
  };

  return (
    <div
      id="swipezone"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {displayText}
    </div>
  );
};

export default TouchEventComponent;
