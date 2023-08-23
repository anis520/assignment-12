"use client";
import { getSingleBlog } from "@/app/service/getBlog";
import React from "react";
import bogimg from "@/app/img/blog.webp";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
const page = async () => {
  const params = useParams();
  console.log(params);
  const singleBlog = await getSingleBlog(params.id);
  console.log(singleBlog);
  return (
    <div className="pb-36  bg-base-100">
      <div className="hero py-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={bogimg}
            width={800}
            height={800}
            alt="Picture of the author"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{singleBlog?.title}</h1>
            <p className="py-6">{singleBlog.body}</p>
            <Link href="/">
              <button className="btn btn-primary">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
