import { Card, CardTitle } from "@/components/ui/card";

export const Welcome = () => {
  return (
    <>
      <Card>
        <h3 className="text-1xl mb-4 text-white">welcome to my website !</h3>
        <p className="mb-4 leading-relaxed text-gray-300">
          hey there ! i'm nick. i wrote this website
        </p>
      </Card>
      <Card>
        <CardTitle>about me</CardTitle>
        test
      </Card>
    </>
  );
};
