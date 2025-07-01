import { Link } from "react-router-dom";

import { collections } from "@/data/collections";
import { poems } from "@/data/poems";

export const Poems = () => {
  return (
    <div className="mx-auto max-w-4xl p-1 md:p-4">
      <Link to="/">back to home</Link>
      <div className="mt-4 flex justify-start border border-white bg-[#141414] p-8">
        <div className="flex flex-col items-start">
          {collections.map((collection) => (
            <>
              <p className="pb-4 text-3xl lowercase text-white">
                {collection.title}
              </p>
              <div className="pb-10" key={collection.id}>
                {poems
                  .filter((poem) => poem.collectionId === collection.id)
                  .map((poem) => (
                    <Link to={`${poem.id}`} key={poem.id}>
                      <p className="text-2xl lowercase text-white hover:text-blue-400 lg:text-2xl">
                        {`>`} {poem.title}
                      </p>
                    </Link>
                  ))}
              </div>
              <hr className="mb-10 h-1 w-8 bg-white" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
