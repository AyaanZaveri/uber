import React from "react";

const Page = ({
  params,
}: {
  params: {
    coord: string;
  };
}) => {
  return (
    <div>
      <h1>coord</h1>
    </div>
  );
};

export default Page;