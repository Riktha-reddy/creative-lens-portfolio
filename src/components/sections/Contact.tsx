import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Magnetic } from "@/components/Magnetic";
import { setCursorMode } from "@/components/CustomCursor";
import { SectionHeader } from "./Experience";

const socials = [
  { label: "Email", value: "rikthawork@gmail.com", href: "mailto:rikthawork@gmail.com" },
  { label: "GitHub", value: "Riktha-reddy", href: "https://github.com/Riktha-reddy" },
  { label: "Behance", value: "rikthareddy18", href: "https://www.behance.net/rikthareddy18" },
  { label: "Read.cv", value: "/studio", href: "#" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
  
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      form.reset();
      toast.success("Message sent. I'll get back within 24h.");
    } catch {
      toast.error("Something went wrong. Try email instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 md:px-12 py-32 border-t border-border">
      <SectionHeader index="05" title="Contact me for work" subtitle="Open for select Q4 engagements." />

      <div className="grid lg:grid-cols-5 gap-12">
        <form onSubmit={onSubmit} className="lg:col-span-3 space-y-8">
          <Field label="Your name" name="name" placeholder="Jane Doe" />
          <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
          <Field label="Project type" name="type" placeholder="Brand site / Product UX / Engineering…" />
          <FieldArea label="Tell me about it" name="message" placeholder="Timeline, scope, ambitions…" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50 max-w-xs">
              Avg. reply &lt; 24h • Based in Lisbon (GMT+1)
            </p>
            <Magnetic>
              <button
                type="submit"
                disabled={sending}
                onMouseEnter={() => setCursorMode("link")}
                onMouseLeave={() => setCursorMode("default")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--cream)] text-[var(--ink)] font-medium hover-invert border border-[var(--cream)] disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send message"}
                <span aria-hidden>→</span>
              </button>
            </Magnetic>
          </div>
        </form>

        <aside className="lg:col-span-2 space-y-8">
          <div className="rounded-2xl border border-border p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-4">
              Direct
            </div>
            <ul className="divide-y divide-border">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    onMouseEnter={() => setCursorMode("link")}
                    onMouseLeave={() => setCursorMode("default")}
                    className="flex items-center justify-between py-4 group"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60">
                      {s.label}
                    </span>
                    <span className="font-display text-lg group-hover:text-primary transition-colors">
                      {s.value} ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary bg-primary p-6 text-[var(--cream)]">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mb-3">
              Currently
            </div>
            <p className="font-display text-xl leading-snug">
              Studying <span className="bg-[var(--cream)] text-primary px-2">AI & agentic AI</span> — so when the robots take over, I’m on the guest list, not the to-do list.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="block group">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
        {label}
      </span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-[var(--cream)] outline-none py-3 font-display text-lg placeholder:text-foreground/30 transition-colors"
      />
    </label>
  );
}

function FieldArea({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
        {label}
      </span>
      <textarea
        required
        name={name}
        rows={4}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-[var(--cream)] outline-none py-3 font-display text-lg placeholder:text-foreground/30 transition-colors resize-none"
      />
    </label>
  );
}
