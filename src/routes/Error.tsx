import { HomeButton } from "../components/HomeButton";

export const ErrorPage = () => {
  return (
    <div className="h-screen bg-[#D8DACF]">
      <HomeButton />
      <div className="flex h-[90%] items-center justify-center">
        <p>sorry.</p>
      </div>
    </div>
  );
};
