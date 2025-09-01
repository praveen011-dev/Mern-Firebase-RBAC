import React from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/sharedComponents/Navbar";
export const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 bg-gray-50 min-h-[60vh]">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
          Organize Your Tasks Efficiently
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          Welcome to your personal task management dashboard. Track, organize,
          and complete your tasks with ease. Sign up or log in to get started!
        </p>
        <Button
          variant="default"
          size="lg"
          onClick={() =>
            Cookies.get("token") ? navigate("/create-task") : navigate("/login")
          }
        >
          Get Started
        </Button>
      </section>
    </>
  );
};
