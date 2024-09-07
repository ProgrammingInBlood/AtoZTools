import TextReveal from "@/components/magicui/text-reveal";

export async function AboutSection() {
  return (
    <div className="z-10 flex flex-col min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black">
      <TextReveal text="All-in-One Solutions for Your Everyday Tasks" />
      <TextReveal
        className="text-3xl"
        text="No more searching for multiple tools across different websites.
With AtoZTools, you have everything you need in one place — from generating strong passwords, converting images, creating QR codes, to producing MD5 hashes.
Efficient. Reliable. Seamless.
Unlock the power of productivity with just a few clicks."
      />
    </div>
  );
}
