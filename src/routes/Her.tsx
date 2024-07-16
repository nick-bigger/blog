import { HomeButton } from "../components/HomeButton";
import { P } from "../components/Typography";

export const Her = () => {
  return (
    <div>
      <HomeButton />
      <p className="pr-5 text-end font-mono text-[100px] tracking-tight">HER</p>
      <div className="flex">
        <div className="m-auto w-[700px]">
          <div className="w-[300px] flex-col space-y-5 font-mono">
            <P>
              i refuse to negotiate with the universe on less than certain terms
            </P>
            <P>i reject a connection that is less than perfect</P>
            <P>i will not be rocked by forces explained</P>
            <P>my heart will beat for Her or cease entirely</P>
          </div>
        </div>
      </div>
    </div>
  );
};
