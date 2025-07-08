import { Link, Outlet } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Time } from "@/components/ui/time";
import { posts } from "@/data/posts";

const MAX_BLOG_POSTS = 5;

export const Wrapper = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <main className="flex flex-col gap-6 md:flex-row">
        <aside className="order-3 w-full space-y-5 md:order-1 md:w-1/5">
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc">
                {posts.slice(0, MAX_BLOG_POSTS).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="transition duration-200 hover:text-blue-400"
                  >
                    <li>{post.title}</li>
                  </Link>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p>the worst thing you can be is boring</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>My Time</CardTitle>
            </CardHeader>
            <CardContent>
              <Time />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </aside>
        <section className="order-1 flex w-full flex-grow flex-col gap-5 md:order-2 md:w-1/2">
          <Outlet />
        </section>
        <aside className="order-2 w-full space-y-5 md:order-3 md:w-1/5">
          <Card>
            <CardHeader>
              <CardTitle>Find Me</CardTitle>
            </CardHeader>
            <CardContent>
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
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/nick-bigger"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Clap for Me</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>skateboard !!!</p>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
};
