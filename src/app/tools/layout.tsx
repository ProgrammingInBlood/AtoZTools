import ToolsLayout from "@/components/layouts/ToolsLayout";
import tools from "@/constants/tools";
import { headers } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const pathname = new URL(headers().get("x-request-url") || "").pathname;

  const currentTool = tools.find((tool) => tool.path === pathname);

  console.log({ pathname });

  if (currentTool) {
    return {
      title: `${currentTool.name} | AtoZ Tools`,
      description: currentTool.desciption,
      openGraph: {
        title:
          currentTool.formattedName.underlineText +
          " " +
          currentTool.formattedName.title,
        description: currentTool.desciption,
        url: `https://atoztools.vercel.app${pathname}`,
        type: "website",
      },
      // You can add other meta tags like Twitter card, images, etc., here
    };
  }

  return {
    title: "Tools | AtoZ Tools",
    description: "Explore all the tools available on AtoZ Tools.",
    openGraph: {
      title: "All Tools",
      description: "Explore all the tools available on AtoZ Tools.",
      url: "https://yourwebsite.com/tools",
      type: "website",
    },
  };
}

export default function AllToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ToolsLayout>{children}</ToolsLayout>;
}
