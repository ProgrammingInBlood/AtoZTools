/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dsUTMYPfRko
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className=" p-4 md:p-6 w-full bg-black border-t-neutral-800 border-t">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Made with love by Eklavya
        </p>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="px-4 py-2">
            <HeartIcon className="mr-2 h-4 w-4" />
            Donate
          </Button>
          <Button variant="outline" className="px-4 py-2">
            <ArrowUpIcon className="mr-2 h-4 w-4" />
            Go to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}

function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
