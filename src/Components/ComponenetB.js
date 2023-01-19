import React from "react";
import ComponenetC from "./ComponenetC";
import { UserContext, ChannelContext } from "../App";

const ComponenetB = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <h1>
                    {user}-{channel}
                  </h1>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponenetB;
