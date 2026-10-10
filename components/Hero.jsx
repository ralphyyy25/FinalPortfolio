'use client';
import { useEffect, useState } from 'react';
import { useApp } from '@/context/AppContext';

const CODE = "const INITIALIZE_SYSTEM = async () => { const DEVELOPER = 'Ralph'; await build(); };";
const ic = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' };

export default function Hero() {
  const { t } = useApp();
  const [today, setToday] = useState('…');
  const [n, setN] = useState(0);

  useEffect(() => {
    setToday(new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase());
    const id = setInterval(() => setN((x) => (x + 1) % (CODE.length + 14)), 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="home">
      <div className="pills">
        <div className="pill s">RALPH ✦</div>
        <div className="pill o">STUDENT</div>
        <div className="pill s">UI/UX DESIGNER</div>
        <div className="dot"><svg {...ic} strokeWidth={3}><path d="M12 6v12M17.2 9 6.8 15M6.8 9l10.4 6" /></svg></div>
        <div className="pill o">MERN STACK</div>
        <div className="dot inv"><svg {...ic} strokeWidth={2.5}><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" /></svg></div>
        <div className="pill s">WEB APPS</div>
      </div>
      <h1 className="hh">RALPH LAUREN TE</h1>
      <div className="code">{CODE.slice(0, n)}</div>
      <div className="bar">
        <div><span className="ping" /><b>{t('open')}</b></div>
        <div>{t('based')}</div>
        <div><b>TODAY:</b><span>{today}</span></div>
        <div className="sc" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span>{t('scroll')}</span>↓
        </div>
      </div>
    </div>
  );
}
