import { useDebouncedValue } from "@bunstack/hooks";
import { toTitleCase } from "@bunstack/utils";
import { useState } from "react";
import { BackgroundOrbs } from "./components/background-orbs";
import { DebounceDemo } from "./components/debounce-demo";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";

export function App() {
  const [input, setInput] = useState("hello world");
  const debounced = useDebouncedValue(input, 300);

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <BackgroundOrbs />

      <div className="container mx-auto max-w-3xl space-y-12 relative z-10">
        <Hero
          title="BunStack"
          subtitle="Bun Monorepo Starter"
          description="A clean, elegant starter for Bun monorepo projects"
        />

        <DebounceDemo
          inputValue={input}
          debouncedValue={toTitleCase(debounced)}
          characterCount={input.length}
          maxCount={20}
          onInputChange={setInput}
        />

        <Footer technologies={["Bun", "React", "TypeScript", "Tailwind"]} />
      </div>
    </main>
  );
}
