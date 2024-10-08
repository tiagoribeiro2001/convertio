import Dropzone from "@/components/Dropzone";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Toaster />

      <div className="pt-32 space-y-12 px-12 xl:px-44 2xl:px-52">
        {/* Title + Desc */}
          <h1 className="text-3xl md:text-5xl font-medium text-center">
            Online File Converter
          </h1>
          <p className="text-muted-foreground text-md md:text-lg text-center">
            Welcome to Convertio, your simple and efficient tool for converting
            files between different formats! We support a wide variety of file
            types, such as images, audio and video. With an intuitive interface,
            fast and secure conversions, we guarantee that your files will
            retain their original quality. There&apos;s no need to install
            additional software - everything is done online, in just a few
            clicks.
          </p>

        {/* Upload Box */}
        <Dropzone />
      </div>
    </div>
  );
}
