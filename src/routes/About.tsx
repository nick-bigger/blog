import { Card, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <>
      <Card>
        <h3 className="mb-4 text-3xl text-white">about me</h3>
        <p>here's where i'll put all the cool things about me</p>
      </Card>
      <Card>
        <CardTitle>favorites lists</CardTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardTitle>Books</CardTitle>
            <ul>
              <li>Book 1</li>
              <li>Book 2</li>
            </ul>
          </Card>
          <Card>
            <CardTitle>Music</CardTitle>
            <ul>
              <li>Music 1</li>
              <li>Music 2</li>
            </ul>
          </Card>
          <Card>
            <CardTitle>Video Games</CardTitle>
            <ul>
              <li>Video Game 1</li>
              <li>Video Game 2</li>
            </ul>
          </Card>
        </div>
      </Card>
    </>
  );
};
