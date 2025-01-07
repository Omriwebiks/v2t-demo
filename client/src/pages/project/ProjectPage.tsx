import { useState } from "react";
import ModeToggle from "./ModeToogle";

export default function ProjectPage() {
  const [view, setView] = useState("list");
  const toggleItems = ["list", "grid"];

  return <ModeToggle items={toggleItems} view={view} setView={setView} />;
}
