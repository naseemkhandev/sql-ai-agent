import Image from "next/image";

const NoChatMessages = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-6 z-10">
      <Image src={"/logo.svg"} alt="SQL AI Agent Logo" width={60} height={60} />

      <div className="flex flex-col space-y-2.5 text-center">
        <h2 className="text-xl font-semibold tracking-tight">
          👋 Welcome to SQL AI Agent
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Ask me anything about your SQL database. I&apos;m here to help you
          with queries, data analysis, and more! Get started by typing your
          first question below.
        </p>
      </div>
    </div>
  );
};

export default NoChatMessages;
