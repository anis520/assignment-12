import React from "react";
import { getBlog } from "../service/getBlog";
import Link from "next/link";

const page = async () => {
  const blogdata = await getBlog();
  return (
    <div className="my-12">
      {" "}
      <div className="w-11/12 mx-auto grid    md:grid-cols-2 gap-4 lg:grid-cols-3 ">
        {blogdata?.map((item, key) => {
          return (
            <div
              key={key}
              className="card card-compact w-full bg-gray-200 shadow-xl "
            >
              <div className="card-body">
                <p className="text-gray-500 font-semibold text-lg ">
                  Id : # {item.id}
                </p>
                <h2 className="card-title text-gray-900 font-semibold text-2xl">
                  {item.title}
                </h2>
                <p className="text-gray-700 font-semibold text-lg">
                  {item.body}
                </p>
                <div className="card-actions justify-end">
                  <Link href={`/blog/${item.id}`}>
                    <button className="btn btn-primary">See more</button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
