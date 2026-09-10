import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Scope Creep Shield Kit — €24",
    template: "%s · Glint",
  },
  description:
    "Protect freelance margins from AI-era scope creep. SOW templates, scripts, change orders, and a risk calculator. FR/EN.",
  openGraph: {
    title: "Scope Creep Shield Kit",
    description: "Stop unpaid “just one more thing” requests. Digital kit for freelancers — €24.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
