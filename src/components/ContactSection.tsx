import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowUpRight, Github, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'fallback'>('idle');

  const triggerMailtoFallback = (name: string, email: string, message: string) => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Laverne,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${encodeURIComponent(PERSONAL_INFO.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        triggerMailtoFallback(formState.name, formState.email, formState.message);
        setStatus('fallback');
      }
    } catch {
      triggerMailtoFallback(formState.name, formState.email, formState.message);
      setStatus('fallback');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 transition-colors duration-500 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--c-bg-subtle)',
        color: 'var(--c-text)',
      }}
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ backgroundColor: 'var(--c-accent)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Available Pill, Giant Stacked Headline, Description, Underlined Email */}
          <div className="lg:col-span-6 space-y-6">
            {/* Available for work pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
                color: 'var(--c-text)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wider uppercase font-semibold">AVAILABLE FOR WORK &middot; CAPE TOWN</span>
            </div>

            {/* Giant Stacked Headline: "LET'S WORK TOGETHER" */}
            <h2
              className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tight"
              style={{ color: 'var(--c-text)' }}
            >
              LET'S WORK<br />
              <span style={{ color: 'var(--c-accent)' }}>TOGETHER</span>
            </h2>

            <p
              className="font-sans text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--c-text-muted)' }}
            >
              Have an opening, an innovative idea, or a project in mind? I'm available for associate developer roles, full-stack contracts, and forward-thinking collaborations.
            </p>

            {/* "Prefer email?" underlined link */}
            <div
              className="pt-2 font-sans text-sm sm:text-base"
              style={{ color: 'var(--c-text)' }}
            >
              <span>Prefer direct email? </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-bold underline decoration-[var(--c-accent)] decoration-2 underline-offset-4 hover:text-[var(--c-accent)] transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Direct details */}
            <div
              className="pt-4 space-y-3 text-xs font-mono"
              style={{ color: 'var(--c-text-muted)' }}
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4" style={{ color: 'var(--c-accent)' }} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4" style={{ color: 'var(--c-accent)' }} />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4" style={{ color: 'var(--c-accent)' }} />
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[var(--c-accent)]"
                  style={{ color: 'var(--c-text)' }}
                >
                  github.com/laverne816
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Card with Form & Full-Width Button */}
          <div className="lg:col-span-6">
            <div
              className="p-8 sm:p-10 rounded-3xl border shadow-2xl"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
              }}
            >
              {status === 'success' ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3
                    className="font-heading text-3xl"
                    style={{ color: 'var(--c-text)' }}
                  >
                    MESSAGE RECEIVED!
                  </h3>
                  <p
                    className="font-sans text-sm max-w-sm mx-auto"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    Thank you for reaching out. Your message was delivered directly to {PERSONAL_INFO.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full font-heading text-xs tracking-wider uppercase border cursor-pointer"
                    style={{
                      backgroundColor: 'var(--c-bg)',
                      borderColor: 'var(--c-card-border)',
                      color: 'var(--c-text)',
                    }}
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : status === 'fallback' ? (
                <div className="text-center py-8 space-y-4">
                  <Mail className="w-12 h-12 mx-auto" style={{ color: 'var(--c-accent)' }} />
                  <h3
                    className="font-heading text-2xl"
                    style={{ color: 'var(--c-text)' }}
                  >
                    MAIL CLIENT READY
                  </h3>
                  <p
                    className="font-sans text-xs sm:text-sm max-w-sm mx-auto"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    Your default mail application has been opened with your pre-filled inquiry.
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Inquiry from ${formState.name}`)}&body=${encodeURIComponent(formState.message)}`}
                    className="inline-block px-6 py-2.5 rounded-full font-heading text-xs uppercase tracking-wider text-white"
                    style={{ backgroundColor: 'var(--c-accent)' }}
                  >
                    CLICK HERE IF NOT OPENED &rarr;
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-[10px] uppercase tracking-wider mb-2 font-semibold"
                      style={{ color: 'var(--c-text-muted)' }}
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      disabled={status === 'submitting'}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full border rounded-2xl px-4 py-3 text-sm font-sans focus:border-[var(--c-accent)] outline-none transition-colors"
                      style={{
                        backgroundColor: 'var(--c-bg)',
                        borderColor: 'var(--c-card-border)',
                        color: 'var(--c-text)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-[10px] uppercase tracking-wider mb-2 font-semibold"
                      style={{ color: 'var(--c-text-muted)' }}
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      disabled={status === 'submitting'}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full border rounded-2xl px-4 py-3 text-sm font-sans focus:border-[var(--c-accent)] outline-none transition-colors"
                      style={{
                        backgroundColor: 'var(--c-bg)',
                        borderColor: 'var(--c-card-border)',
                        color: 'var(--c-text)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-[10px] uppercase tracking-wider mb-2 font-semibold"
                      style={{ color: 'var(--c-text-muted)' }}
                    >
                      MESSAGE *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      disabled={status === 'submitting'}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project, team opening, or opportunity..."
                      className="w-full border rounded-2xl px-4 py-3 text-sm font-sans focus:border-[var(--c-accent)] outline-none transition-colors resize-none"
                      style={{
                        backgroundColor: 'var(--c-bg)',
                        borderColor: 'var(--c-card-border)',
                        color: 'var(--c-text)',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-full font-heading text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{
                      backgroundColor: 'var(--c-accent)',
                      color: '#FFFFFF',
                    }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p
                    className="text-[11px] font-mono text-center pt-1"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    Typically responds within 24 hours &middot; Confidential inquiry
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
