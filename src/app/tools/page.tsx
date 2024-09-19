"use client";

import ToolsCards from "@/components/cards/ToolsCards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import alltools from "@/constants/tools";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

function ToolsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const tools = useMemo(() => {
    if (search) {
      return alltools.filter((tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return alltools;
    }
  }, [search]);

  return (
    <div>
      <div className="flex w-full  mt-5 items-center space-x-2">
        <Input
          type="text"
          placeholder="Search any tool..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </div>

      <div className="mt-10">
        {tools.map((tool) => (
          <ToolsCards
            title={tool.name}
            description={tool.desciption}
            icon={<tool.icon width={30} height={30} />}
            onClick={() => router.push(tool.path)}
            full
          />
        ))}
      </div>
    </div>
  );
}

export default ToolsPage;
