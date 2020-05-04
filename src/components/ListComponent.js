import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { onTouchStart, onTouchEnd } from "../events/eventsHelper";
import { displayNotification } from "../toastrHelper";
import { NOTIFICATION_POSITION } from "../constant";

const ListComponent = ({ listData }) => {
  const onTouchStartHandler = (event) => {
    onTouchStart(event);
  };

  const onTouchMoveHandler = () => {};

  const onTouchEndHandler = (event) => {
    const eventOccured = onTouchEnd(event);
    console.log("onTouchEnd(event): ", eventOccured);
    displayNotification({
      message: `(event) swipe: ${eventOccured}`,
      position: NOTIFICATION_POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <ListGroup>
      {listData.map((ele) => (
        <ListGroupItem
          key={ele}
          className="pt-4 pb-4"
          onTouchStart={onTouchStartHandler}
          onTouchMove={onTouchMoveHandler}
          onTouchEnd={onTouchEndHandler}
        >
          {ele}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

ListComponent.defaultProps = {
  listData: [
    "Cras justo odio(Swip me)",
    "Dapibus ac facilisis in(Swip me)",
    "Morbi leo risus(Swip me)",
    "Porta ac consectetur ac(Swip me)",
    "Vestibulum at eros(Swip me)",
  ],
};

export { ListComponent };
