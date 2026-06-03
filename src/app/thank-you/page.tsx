import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default async function ThankYouPage({
  searchParams
}: {
  searchParams?: Promise<{ status?: string }>;
}) {
  const status = (await searchParams)?.status;
  const message =
    status === "email-not-configured"
      ? "Your inquiry was received, but email delivery still needs SMTP setup before deployment."
      : status === "missing"
        ? "Some required details were missing. Please return home and submit the form again."
        : "Your inquiry has been submitted. I will get back to you soon.";

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-ink px-4 py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(33,247,255,.18),transparent_34%),radial-gradient(circle_at_82%_68%,rgba(255,43,214,.18),transparent_30%)]" />
      <section className="glass relative z-10 w-full max-w-2xl rounded-[30px] p-8 text-center sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cyanFlash text-ink">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h1 className="mt-7 font-display text-5xl font-black leading-none sm:text-7xl">Thank You</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">{message}</p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-ink transition hover:bg-cyanFlash"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>
      </section>
    </main>
  );
}
