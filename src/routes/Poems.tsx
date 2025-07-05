import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { collections } from "@/data/collections";
import { poems } from "@/data/poems";

export const Poems = () => {
  return (
    <div className="mx-auto max-w-4xl p-1 pt-2 md:p-4">
      <Link to="/">back to home</Link>
      <Card className="mt-4 bg-[#141414]">
        <h3 className="mb-4 text-3xl lowercase text-white">Poems</h3>
        <Accordion type="multiple">
          {collections.map((collection, index) => (
            <AccordionItem
              key={index}
              value={collection.title}
              className="border-none"
            >
              <AccordionTrigger className="pb-4 text-2xl lowercase text-white">
                {collection.title}
              </AccordionTrigger>
              <AccordionContent key={collection.id} className="pb-4">
                {poems
                  .filter((poem) => poem.collectionId === collection.id)
                  .map((poem) => (
                    <Link to={`${poem.id}`} key={poem.id}>
                      <p className="text-md border-l-2 pl-4 lowercase text-white hover:text-blue-400 lg:text-xl">
                        {poem.title}
                      </p>
                    </Link>
                  ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
};
