import Image from "next/image";
import { getBlog } from "./service/getBlog";
import Link from "next/link";

export default async function Home() {
  const blogdata = await getBlog();

  return (
    <main className="mb-5">
      <div className="hero  py-20 bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

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
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
