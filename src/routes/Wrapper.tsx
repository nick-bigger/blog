import { Link, Outlet } from "react-router-dom";

import HeartGif from "@/assets/heart.gif";
import { Banner } from "@/components/ui/banner";
import { Card, CardTitle } from "@/components/ui/card";
import { Time } from "@/components/ui/time";

export const Wrapper = () => {
  return (
    <div className="relative z-20 mx-auto max-w-7xl">
      <header className="mb-8 text-center">
        <Banner />
      </header>
      <main className="flex flex-col gap-6 md:flex-row">
        <aside className="w-full space-y-5 md:w-1/5">
          <Card>
            <CardTitle>navigation</CardTitle>
            <nav>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    {">"}
                    {">"} home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    {">"}
                    {">"} about
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    {">"}
                    {">"} blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/thoughts"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    {">"}
                    {">"} thoughts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/poems"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    {">"}
                    {">"} poetry
                  </Link>
                </li>
              </ul>
            </nav>
          </Card>
          <Card className="hidden md:block">
            <CardTitle>status</CardTitle>
            the worst thing you can be is boring
          </Card>
          <Card className="hidden md:block">
            <CardTitle>my time</CardTitle>
            <Time />
          </Card>
          <Card className="hidden md:block">
            <CardTitle>Stickers</CardTitle>
            <div className="no-scrollbar flex gap-5 overflow-x-scroll">
              <img src={HeartGif} className="h-20" />
              <img src={HeartGif} className="h-20" />
              <img src={HeartGif} className="h-20" />
              <img src={HeartGif} className="h-20" />
              <img src={HeartGif} className="h-20" />
            </div>
          </Card>
        </aside>
        <section className="md:no-scrollbar flex w-full flex-grow flex-col gap-5 md:max-h-[600px] md:w-1/2 md:overflow-scroll">
          <Outlet />
        </section>
        <aside className="w-full space-y-5 md:w-1/5">
          <Card className="hidden md:block">
            <CardTitle>find me</CardTitle>
            <ul className="space-y-1">
              <li>
                <a
                  target="_blank"
                  href="https://beliapp.co/app/daizycrown"
                  className="transition duration-200 hover:text-blue-400"
                >
                  beli
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.goodreads.com/user/show/34398985-nick"
                  className="transition duration-200 hover:text-blue-400"
                >
                  goodreads
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://boxd.it/ec5Jr"
                  className="transition duration-200 hover:text-blue-400"
                >
                  letterboxd
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://open.spotify.com/user/1136204305?si=e34a13bd7c7149e4"
                  className="transition duration-200 hover:text-blue-400"
                >
                  spotify
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/nick.bigger/"
                  className="transition duration-200 hover:text-blue-400"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nickbigger/"
                  className="transition duration-200 hover:text-blue-400"
                >
                  linkedin
                </a>
              </li>
            </ul>
          </Card>
          <Card>
            <CardTitle>Clap for Me</CardTitle>
            <div className="flex justify-center">
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
          </Card>
          <Card className="hidden md:block">
            <CardTitle>monthly goal</CardTitle>
            skateboard !!!
          </Card>
        </aside>
      </main>
    </div>
  );
};
