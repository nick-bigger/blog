import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 leading-relaxed">
            i think a good place to start is...
          </p>
          <p className="mb-4 animate-color-wave text-center text-2xl">
            I LIVE TO CREATE !
          </p>
          <p className="mb-4 leading-relaxed">
            it doesn't matter what form - music, poetry, art, writing, dance -
            it all brings me joy. i try to do these things most days, and a lot
            of them i have been doing for many years !
          </p>
          <p className="mb-4 leading-relaxed">
            i play guitar in a band called{" "}
            <a
              className="underline"
              href="https://tokyovinylband.com"
              target="_blank"
            >
              Tokyo Vinyl
            </a>
            . i am currently in the process of writing a short story tentatively
            called "The Man and the Moon". i have a whole set of poetry on here
            that i try to update. i'm currently learning to swing dance and in
            the process of teaching myself to draw.
          </p>
          <p className="mb-4 leading-relaxed">
            i'm also a software engineer, which i think is much more of a
            creative field than most people realize ! code is art too :)
          </p>
          <p className="mb-4 leading-relaxed">
            at a similar rate that i produce art, i also try to consume it. i am
            a huge fan not only of music, movies, and poetry, but also of food.
            i try A LOT of restauraunts, and i am extremely passionate about
            good food. i'd say my specialty is in coffee, though i haven't yet
            learned enough to make it myself, so take my opinions with a grain
            of salt.
          </p>
          <p>
            anyway, in short, i try to sorround myself with art, creativity, and
            passion as much as possible.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Favorites</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="lowercase text-foreground">
                  Books:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4">
                  <li>Cosmicomics</li>
                  <li>Why Zebras Don't Get Ulcers</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="lowercase text-foreground">
                  Music:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4">
                  <li>Lover, You Should've Come Over</li>
                  <li>Music 2</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="lowercase text-foreground">
                  Video Games:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4">
                  <li>Undertale</li>
                  <li>Marvel Rivals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
