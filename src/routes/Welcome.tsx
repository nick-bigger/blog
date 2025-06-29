import { Card, CardTitle } from "@/components/ui/card";

export const Welcome = () => {
  return (
    <>
      <Card>
        <h3 className="mb-4 text-3xl text-white">welcome !</h3>
        <p className="mb-4 leading-relaxed text-gray-300">
          hey there ! i'm nick. i wrote this website for fun and to put all the
          random things i've created in a single place.
        </p>
      </Card>
      <Card>
        <CardTitle>about me</CardTitle>
        test
      </Card>
    </>
  );
};
