import React from "react";
import CommentsList from "./CommentsList";
import { commentsMockData } from "../utils/commentsMockData";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <div className="text-2xl font-bold">Comments</div>
      <div>
        <CommentsList comments={commentsMockData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
