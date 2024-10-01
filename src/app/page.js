export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Online File Converter
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center px-12 xl:px-44 2xl:px-52">
          Welcome to Convertio, your simple and efficient tool for converting
          files between different formats! We support a wide variety of file
          types, such as images, audio and video. With an intuitive interface,
          fast and secure conversions, we guarantee that your files will retain
          their original quality. There&apos;s no need to install additional software
          - everything is done online, in just a few clicks.
        </p>
      </div>

      {/* Upload Box */}
    </div>
  );
}
