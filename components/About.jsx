'use client';
import { useRef, useState } from 'react';
import { useApp } from '@/context/AppContext';

const stack = [
  ['MERN Stack', ['MongoDB', 'Express.js', 'React', 'Node.js']],
  ['Design', ['UI/UX Design']],
];
const loves = ['Web Applications', 'Learning New Technologies', 'Solving Real-World Problems'];
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function About() {
  const { t } = useApp();
  const card = useRef(null);
  const [imgOk, setImgOk] = useState(true);
  const tilt = (e) => {
    const el = card.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };
  return (
    <section id="about">
      <div className="in">
        <h2 className="t">{t('about')}</h2>
        <div className="bento">
          <div className="bx c2">
            <div className="wave">👋</div>
            <h3>{t('hi')}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{t('bio')}</p>
            <button className="btn" onClick={() => go('projects')}>View My Work</button>
          </div>

          <div className="pcw">
            <div className="pc" ref={card} onMouseMove={tilt} onMouseLeave={() => (card.current.style.transform = '')}>
              <div className="av">R</div>
              {imgOk && <img src="/rap2.png" alt="Ralph" onError={() => setImgOk(false)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
              <div className="inf">
                <div><b>@ralphzxc</b><small>UI/UX | MERN</small></div>
                <button onClick={(e) => { e.stopPropagation(); go('contact'); }}>Contact</button>
              </div>
            </div>
          </div>

          <div className="bx edu">
            <span style={{ fontSize: 28 }}>🎓</span>
            <p style={{ fontSize: 12, fontWeight: 700, marginTop: 18, textTransform: 'uppercase' }}>Student</p>
            <h4 style={{ fontSize: 19, textTransform: 'uppercase', margin: '4px 0 14px' }}>What I Love</h4>
            <div className="chips">{loves.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
          </div>

          <div className="bx c2">
            <h3 style={{ margin: '0 0 8px', fontSize: 22 }}>&gt;_ Tech Stack</h3>
            {stack.map(([title, items]) => (
              <div className="grp" key={title}>
                <h4>{title}</h4>
                <div className="chips">{items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>

          <div className="bx c3 focus">
            <div>
              <h3 style={{ marginTop: 0 }}>My Focus</h3>
              <p>Turning ideas into real web applications and building projects that solve real-world problems.</p>
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <span className="chip">▦ UI/UX Design</span>
              <span className="chip">⛁ MERN Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
