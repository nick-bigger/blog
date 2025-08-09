import { Clock, MapPin } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

import Avatar from "@/assets/avatar.png";
import { Weather } from "@/components/Weather";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Time } from "@/components/ui/time";
import { posts } from "@/data/posts";
import { formatRelativeShorthand } from "@/helpers/formatRelativeShorthand";

const MAX_BLOG_POSTS = 3;

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
              <ul className="ml-4 list-['-_']">
                {posts.slice(0, MAX_BLOG_POSTS).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="transition duration-200 hover:text-primary hover:underline"
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
            <CardContent className="flex gap-2">
              <div className="float-left block h-fit min-w-[32px] overflow-hidden rounded-sm border border-muted">
                <img
                  src={Avatar}
                  className="h-[32px] w-[32px] min-w-[32px]"
                  alt="user avatar"
                />
              </div>
              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <p className="leading-tight text-primary">@daizycrown</p>
                  <p className="leading-tight text-muted-foreground">
                    {formatRelativeShorthand(new Date(2025, 7, 9, 11, 30))}
                  </p>
                </div>
                <p className="leading-tight">
                  "there is no right and wrong. there is only fun and boring"
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Where I Am</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin size={18} />
                <span>Austin, TX</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock size={16} />
                <Time />
              </div>
              <Weather />
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
                    <img
                      src="https://nekoweb.org/assets/buttons/button7.gif"
                      alt="nekoweb button 1"
                    />
                  </a>
                  <a href="https://nekoweb.org/">
                    <img
                      src="https://nekoweb.org/assets/buttons/button1.gif"
                      alt="nekoweb button 2"
                    />
                  </a>
                  <a href="https://nekoweb.org/">
                    <img
                      src="https://nekoweb.org/assets/buttons/button3.gif"
                      alt="nekoweb button 3"
                    />
                  </a>
                  <a href="https://nekoweb.org/">
                    <img
                      src="https://nekoweb.org/assets/buttons/button6.gif"
                      alt="nekoweb button 4"
                    />
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
              <ul className="ml-4 list-['-_']">
                <li>
                  <a
                    target="_blank"
                    href="https://beliapp.co/app/daizycrown"
                    className="transition duration-200 hover:text-primary hover:underline"
                  >
                    beli
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.goodreads.com/user/show/34398985-nick"
                    className="transition duration-200 hover:text-primary hover:underline"
                  >
                    goodreads
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://boxd.it/ec5Jr"
                    className="transition duration-200 hover:text-primary hover:underline"
                  >
                    letterboxd
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://open.spotify.com/user/1136204305?si=e34a13bd7c7149e4"
                    className="transition duration-200 hover:text-primary hover:underline"
                  >
                    spotify
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/nick.bigger/"
                    className="transition duration-200 hover:text-primary hover:underline"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/nickbigger/"
                    className="transition duration-200 hover:text-primary hover:underline"
                  >
                    linkedin
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/nick-bigger"
                    className="transition duration-200 hover:text-primary hover:underline"
                  >
                    github
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
              <CardTitle>Monthly Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-through">
                ✅ Apr: screen time
              </p>
              <p className="text-muted-foreground line-through">
                ❌ May: meditate
              </p>
              <p className="text-muted-foreground line-through">
                ✅ Jun: skateboard
              </p>
              <p className="text-muted-foreground line-through">
                ✅ Jul: writing
              </p>
              <p>▶️ Aug: dance</p>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
};
