import React from "react";
import { Reply } from "../typings";
import ReplyComponent from "./Reply";

interface Props {
  replies?: Reply[];
}

const Replies: React.FC<Props> = ({ replies }) => {
  return (
    <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
      {replies?.map(reply => (
        <ReplyComponent key={reply._id} reply={reply} />
      ))}
    </div>
  );
};

export default Replies;
