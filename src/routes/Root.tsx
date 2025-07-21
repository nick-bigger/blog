import {
  BookUser,
  Guitar,
  House,
  Library,
  MessageCircleDashed,
  NotebookText,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import Banner from "@/assets/banner.png";
import StarsGif from "@/assets/stars.gif";
import { CRTScreen } from "@/components/CRTScreen";
import { NowPlaying } from "@/components/NowPlaying";

export const Root = () => {
  return (
    <>
      <div
        className="min-h-screen bg-background font-cnc-ra text-lg tracking-wider text-foreground"
        style={{ backgroundImage: `url(${StarsGif})` }}
      >
        <img src={Banner} className="mx-auto w-[400px]" />
        <nav className="no-scrollbar z-30 mx-auto mb-[-2px] flex max-w-7xl justify-start gap-1 overflow-x-scroll px-2 md:px-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 rounded-t-md border-2 border-border border-b-card bg-card p-2 text-primary"
                : "flex gap-2 rounded-t-md border-2 border-border bg-card p-2 hover:cursor-pointer"
            }
          >
            <House />
            home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 rounded-t-md border-2 border-border border-b-card bg-card p-2 text-primary"
                : "flex gap-2 rounded-t-md border-2 border-border bg-card p-2 hover:cursor-pointer"
            }
          >
            <BookUser />
            about
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 rounded-t-md border-2 border-border border-b-card bg-card p-2 text-primary"
                : "flex gap-2 rounded-t-md border-2 border-border bg-card p-2 hover:cursor-pointer"
            }
          >
            <NotebookText />
            blog
          </NavLink>
          <NavLink
            to="/thoughts"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 rounded-t-md border-2 border-border border-b-card bg-card p-2 text-primary"
                : "flex gap-2 rounded-t-md border-2 border-border bg-card p-2 hover:cursor-pointer"
            }
          >
            <MessageCircleDashed />
            thoughts
          </NavLink>
          <NavLink
            to="/poems"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 rounded-t-md border-2 border-border border-b-card bg-card p-2 text-primary"
                : "flex gap-2 rounded-t-md border-2 border-border bg-card p-2 hover:cursor-pointer"
            }
          >
            <Library />
            poems
          </NavLink>
          <NavLink
            to="/songs"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 rounded-t-md border-2 border-border border-b-card bg-card p-2 text-primary"
                : "flex gap-2 rounded-t-md border-2 border-border bg-card p-2 hover:cursor-pointer"
            }
          >
            <Guitar />
            songs
          </NavLink>
        </nav>
        <div className="min-h-screen border-y-2 border-border bg-card p-2 md:mx-auto md:max-w-7xl md:rounded-sm md:rounded-tl-none md:border-2 md:p-4">
          <Outlet />
        </div>
        <NowPlaying />
        <div>
          <div className="flex justify-center py-4">
            <script
              type="text/javascript"
              src="https://www.freevisitorcounters.com/auth.php?id=1840f318b952e4f7ad8ca1a3210afe2734c583c6"
            ></script>
            <script
              type="text/javascript"
              src="https://www.freevisitorcounters.com/en/home/counter/1357826/t/5"
            ></script>
            <a
              href="https://www.freevisitorcounters.com/en/home/stats/id/1357826"
              target="_blank"
            >
              <img src="https://www.freevisitorcounters.com/en/counter/render/1357826/t/5" />
            </a>
          </div>
          <footer className="pb-10 text-center font-mono text-sm text-muted-foreground">
            <p>2025 nick, all rights reserved</p>
            <p>made by me :)</p>
          </footer>
        </div>
      </div>
      <CRTScreen />
    </>
  );
};
