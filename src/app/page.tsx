"use client";
import { useEffect, useState } from "react";
import initSync, { greet, add } from "../../public/pkg";

export default function Home() {
  const [greeting, setGreeting] = useState("now loading...");
  const [num, setNum] = useState(0);

  const greetAndAdd = () => {
    const greeting = greet("World");
    setGreeting(greeting);
    setNum((num) => add(num, 1));
  };

  useEffect(() => {
    initSync();
  }, []);

  return (
    <center>
      <h1>{greeting}</h1>
      <h1>{num}</h1>
      <button onClick={greetAndAdd}>greet and add button</button>
    </center>
  );
}
