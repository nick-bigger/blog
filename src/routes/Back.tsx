import { HomeButton } from "../components/HomeButton";
import { P } from "../components/Typography";

export const Back = () => {
  return (
    <div className="h-screen bg-[#D8DACF]">
      <HomeButton />
      <div className="p-8">
        <div className="m-auto w-[700px]">
          <div className="w-[300px] flex-col space-y-5 font-mono">
            <P>
              for a while it felt like every word was dying to be your name. but
              now you mostly wallow in the pauses and the &nbsp;gaps
              &nbsp;&nbsp;that &nbsp;&nbsp;&nbsp;&nbsp;weren't
              &nbsp;&nbsp;&nbsp;there
            </P>
            <P>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;before</P>
          </div>
        </div>
      </div>
    </div>
  );
};
