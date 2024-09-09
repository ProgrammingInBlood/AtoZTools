import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import UnderlineText from "../shared/UnderlineText";
import Headline from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import ShineBorder from "../magicui/shine-border";

export default function ContactUsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Headline className="tracking-tighter">
              Get in
              <UnderlineText>Touch</UnderlineText>
            </Headline>
            <Paragraph className="max-w-[600px]">
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you!
            </Paragraph>
          </div>
        </div>
        <div className="mx-auto max-w-lg mt-12 relative">
          <ShineBorder
            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-0"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <Card className="w-full bg-zinc-950  m-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-white">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-200"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="bg-zinc-900 border-zinc-800 text-zinc-100 focus:ring-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-200"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Enter the subject"
                    className="bg-zinc-900 border-zinc-800 text-zinc-100 focus:ring-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-200"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px] bg-zinc-900 border-zinc-800 text-zinc-100 focus:ring-zinc-700"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-black hover:bg-zinc-200 transition-colors">
                  <MailIcon className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          </ShineBorder>
        </div>
      </div>
    </section>
  );
}
