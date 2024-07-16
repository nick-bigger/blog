import { HomeButton } from "../components/HomeButton";
import { P } from "../components/Typography";

export const InMyDreams = () => {
  return (
    <div className="flex h-screen justify-center">
      <HomeButton />
      <div className="m-auto">
        <div className="max-w-[500px] flex-col space-y-3 font-mono lowercase">
          <P>in my dreams, we kiss</P>
          <P>it seems a day is too short</P>
          <P>to taste you fully</P>
        </div>
      </div>
    </div>
  );
};
