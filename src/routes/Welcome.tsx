import { Card, CardTitle } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

export const Welcome = () => {
  return (
    <>
      <Card>
        <h3 className="mb-4 text-3xl text-white">welcome !</h3>
        <div className="mb-4 flex justify-center">
          {/* <!-- FC2 Clap tag starts here --> */}
          <a
            href="//clap.fc2.com/post/daizycrown/?url=https%3A%2F%2Fconifercrown.com&title=Blog"
            target="_blank"
            title="Web Clap by FC2"
          >
            <img
              src="//clap.fc2.com/images/button/blue/daizycrown?url=https%3A%2F%2Fconifercrown.com&amp;lang=en"
              alt="Web Clap by FC2"
            />
          </a>
          {/* <!-- FC2 Clap tag ends here --> */}
        </div>
        <p className="mb-4 leading-relaxed">
          hey there ! i'm nick. i was inspired by all the cool websites over on
          the{" "}
          <a className="underline" href="https://indieweb.org">
            IndieWeb
          </a>{" "}
          , so i decided to make this website to be my own little slice of the
          internet. i want this mostly to be a place for fun, and also somewhere
          to put all the random things i've created.
        </p>
        <p>
          this is very much in development, so don't be too suprised if there
          are chunks missing or placeholder text here and there lol.
        </p>
        <p></p>
      </Card>
      <Marquee speed={20} className="p-10 text-white">
        <span className="mx-8 text-2xl">月が綺麗ですね</span>
        <span className="mx-8 text-2xl">⛦⛦⛦⛦⛦</span>
        <span className="mx-8 text-2xl">◡̈ welcome ◡̈</span>
        <span className="mx-8 text-2xl">月が綺麗ですね</span>
        <span className="mx-8 text-2xl">⛦⛦⛦⛦⛦</span>
        <span className="mx-8 text-2xl">◡̈ welcome ◡̈</span>
      </Marquee>
      <Card>
        <CardTitle>a little about me</CardTitle>
        <div className="mb-2 grid sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl text-white">me:</h3>
            <ul className="">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl text-white">favorites:</h3>
            <ul className="">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
        <h3 className="mb-4 text-2xl text-white">fun facts:</h3>
        <ul className="">
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </Card>
    </>
  );
};
