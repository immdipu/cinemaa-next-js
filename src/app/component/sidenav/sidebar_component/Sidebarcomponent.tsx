"use client";
import React from "react";
import useSidebarRoutes from "@/app/hooks/usesidebarRoutes";
import SingleComponent from "./SingleComponent";
import { DesktopSingleComponentProps } from "@/types/types";

const Sidebarcomponent = () => {
  const routes = useSidebarRoutes();
  return (
    <div>
      <h1 className="text-_white font-Helvetica text-2xl font-bold tracking-wider pl-7 mt-8">
        CINEMAA
      </h1>
      <section className="mt-6 flex flex-col gap-3">
        {routes.map((item: DesktopSingleComponentProps) => {
          return (
            <SingleComponent
              key={item.label}
              href={item.href}
              label={item.label}
              active={item.active}
              icon={item.icon}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Sidebarcomponent;
