import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Songs = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Songs</CardTitle>
          <CardDescription>
            lyrics for songs that i've written. hopefully i can figure out how
            to attach the audio at some point !
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <p>no songs yet !!</p>
        </CardContent>
      </Card>
    </div>
  );
};
