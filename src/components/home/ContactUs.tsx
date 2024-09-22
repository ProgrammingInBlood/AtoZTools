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
import { Instagram, Mail, MailIcon, MapPin } from "lucide-react";
import UnderlineText from "../shared/UnderlineText";
import Headline from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import ShineBorder from "../magicui/shine-border";

export default function ContactUsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black ">
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row">
        {/* LEFT SECTION */}
        <div className="relative mt-12 text-center lg:text-left">
          <div className="space-y-2">
            <Headline className="tracking-tighter">
              Get in
              <UnderlineText>Touch</UnderlineText>
            </Headline>
            <Paragraph className="max-w-[500px] mx-auto lg:mx-0">
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you!
            </Paragraph>
          </div>

          <div className="space-y-4 mt-8  w-fit mx-auto lg:mx-0">
            <h2 className="text-xl font-semibold text-left">
              Contact Information
            </h2>
            <div className="flex items-center space-x-2">
              <Instagram className="h-5 w-5 text-primary" />
              <span>mr.eklavya</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>eklavyasingh12065@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="mx-auto max-w-lg mt-12 relative w-full">
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
