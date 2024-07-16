import { HomeButton } from "../components/HomeButton";

export const Mother = () => {
  return (
    <div className="flex h-screen justify-center">
      <HomeButton />
      <div className="m-auto">
        <div className="max-w-[500px] flex-col space-y-3 font-mono lowercase">
          <p>I just know that you'll be the best mother</p>
          <p>I've been dreaming about it all week</p>
          <p>to be fair you prepared the most beautiful breakfast</p>
          <p>and though I was sick, kissed my cheek</p>
          <p className="pt-8">It's so clear I could swear that it's real</p>
          <p>they're in your arms and you are in mine</p>
          <p>in that dream every hardship i've ever endured</p>
          <p>has meaning and I know that i'm fine</p>
        </div>
      </div>
    </div>
  );
};
