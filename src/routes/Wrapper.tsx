import {
  BookUser,
  House,
  Library,
  MessageCircleDashed,
  NotebookText,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

import { Card, CardTitle } from "@/components/ui/card";
import { Time } from "@/components/ui/time";
import { posts } from "@/data/posts";

const MAX_BLOG_POSTS = 5;

export const Wrapper = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Card className="md:mb-6">
        <nav>
          <ul className="flex flex-col justify-center gap-2 md:flex-row md:gap-6">
            <Link
              to="/"
              className="transition duration-200 hover:text-blue-400"
            >
              <li className="flex gap-2 lowercase">
                <House />
                Home
              </li>
            </Link>

            <Link
              to="/about"
              className="transition duration-200 hover:text-blue-400"
            >
              <li className="flex gap-2 lowercase">
                <BookUser />
                About
              </li>
            </Link>

            <Link
              to="/blog"
              className="transition duration-200 hover:text-blue-400"
            >
              <li className="flex gap-2 lowercase">
                <NotebookText />
                Blog
              </li>
            </Link>

            <Link
              to="/thoughts"
              className="transition duration-200 hover:text-blue-400"
            >
              <li className="flex gap-2 lowercase">
                <MessageCircleDashed />
                Thoughts
              </li>
            </Link>

            <Link
              to="/poems"
              className="transition duration-200 hover:text-blue-400"
            >
              <li className="flex gap-2 lowercase">
                <Library />
                Poems
              </li>
            </Link>
          </ul>
        </nav>
      </Card>
      <main className="flex flex-col gap-6 md:flex-row">
        <aside className="w-full space-y-5 md:w-1/5">
          <Card className="hidden md:block">
            <CardTitle>recent blog posts</CardTitle>
            <ul className="ml-4 list-disc">
              {posts.slice(0, MAX_BLOG_POSTS).map((post) => (
                <Link
                  to={`/blog/${post.id}`}
                  className="transition duration-200 hover:text-blue-400"
                >
                  <li>{post.title}</li>
                </Link>
              ))}
            </ul>
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
            <CardTitle>Buttons</CardTitle>
            <div className="no-scrollbar overflow-x-scroll">
              <div className="flex w-max gap-2">
                <a href="https://nekoweb.org/">
                  <img src="https://nekoweb.org/assets/buttons/button7.gif" />
                </a>
                <a href="https://nekoweb.org/">
                  <img src="https://nekoweb.org/assets/buttons/button1.gif" />
                </a>
                <a href="https://nekoweb.org/">
                  <img src="https://nekoweb.org/assets/buttons/button3.gif" />
                </a>
                <a href="https://nekoweb.org/">
                  <img src="https://nekoweb.org/assets/buttons/button6.gif" />
                </a>
              </div>
            </div>
          </Card>
        </aside>
        <section className="md:no-scrollbar flex w-full flex-grow flex-col gap-5 md:w-1/2 md:overflow-scroll">
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
