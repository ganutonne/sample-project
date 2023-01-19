import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

const ComponenetC = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      user is {user} & his channel name is {channel}
    </div>
  );
};

export default ComponenetC;
