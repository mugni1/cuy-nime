"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="w-full min-h-screen items-center justify-center flex flex-col font-sans">
      <h1 className="text-6xl text-red-500 font-extrabold">404</h1>
      <h3 className="text-2xl font-semibold text-[var(--accent)]">NOT FOUND</h3>
      <button
        onClick={() => router.back()}
        className="my-4 rounded-md font-bold cursor-pointer text-dark py-1 px-4 bg-accent text-base md:text-lg"
      >
        Back
      </button>
    </section>
  );
}
