import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";

export const Home = () => {
  return (
    <>
      <Link to="/">back to home</Link>
      <Card className="mt-4">
        <h3 className="mb-4 text-3xl text-white">blog</h3>
        <ul className="font-mono">
          <li>
            <Link
              to="1"
              className="transition duration-200 hover:text-blue-400"
            >
              {">"} 2025-06-30 - Test Hello
            </Link>
          </li>
        </ul>
      </Card>
    </>
  );
};
