import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackSort – Auto-sort Slack messages by actual urgency",
  description: "AI analyzes your Slack messages and surfaces truly urgent ones first. Stop drowning in noise."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a7eff3dd-953a-4bc6-94a5-784826e9c563"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
