'use client';
import { useApp } from '@/context/AppContext';

const EMAIL = 'ralphlauren.te@iloilonhs.edu.ph';
const PHONE = '09922430783';
const socials = [
  ['FB', 'Facebook', 'https://www.facebook.com/ralphlauren.te.25/'],
  ['GH', 'GitHub', 'https://github.com/ralphyyy25'],
  ['IG', 'Instagram', 'https://instagram.com/ralphzxc_25'],
];

export default function Contact() {
  const { toast } = useApp();
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); toast('Email copied'); } catch { toast(EMAIL); }
  };
  const submit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const body = `${f.m.value}\n\n— ${f.n.value} (${f.e.value})`;
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.s.value)}&body=${encodeURIComponent(body)}`;
    toast('Opening your email app…');
    f.reset();
  };
  return (
    <section id="contact">
      <div className="in">
        <div className="cg">
          <div>
            <h2 className="t">Contact<br />Me</h2>
            <p className="lead">Interested in working together? Fill out the form or reach out to me directly.</p>
            <p className="lb">Email</p>
            <button className="mail" onClick={copy} aria-label="Copy email address">
              <span>{EMAIL}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="8" width="14" height="14" rx="2" /><path d="M4 16c-1 0-2-1-2-2V4c0-1 1-2 2-2h10c1 0 2 1 2 2" /></svg>
            </button>
            <p className="lb">Phone</p>
            <a className="mail" href={`tel:${PHONE}`}><span>{PHONE}</span></a>
            <p className="lb">Social Presence</p>
            <div className="soc">
              {socials.map(([label, name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>{label}</a>)}
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="r2">
              <div><label>Your Name</label><input name="n" required placeholder="Your name" /></div>
              <div><label>Your Email</label><input name="e" type="email" required placeholder="you@example.com" /></div>
            </div>
            <div><label>Subject</label>
              <select name="s"><option>Project Collaboration</option><option>Job Opportunity</option><option>General Inquiry</option></select>
            </div>
            <div><label>Message</label><textarea name="m" rows={5} required placeholder="Tell me about your project..." /></div>
            <button className="send" type="submit">SEND MESSAGE ➤</button>
          </form>
        </div>
        <div className="ft">
          <p>© 2026 ralphzxc. All rights reserved.</p>
          <div><span>UI/UX Designer | MERN Stack</span></div>
        </div>
      </div>
    </section>
  );
}
