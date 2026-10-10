'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { useApp } from '@/context/AppContext';

function Shot({ p, onOpen }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="shot" onClick={onOpen} style={{ background: `linear-gradient(135deg,${p.color},#0b0b0b)` }}>
      {ok && <img src={p.image} alt={p.title} onError={() => setOk(false)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
      <div className="ov" />
      {!ok && <em>{p.title}</em>}
      <u>View Details</u>
    </div>
  );
}

export default function Projects() {
  const { setModal } = useApp();
  return (
    <section id="projects">
      <div className="in">
        <div className="ph"><h2 className="t">Projects</h2></div>
        {projects.map((p, i) => (
          <div className="pr" key={p.title}>
            <div className="txt">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="acts"><button className="cs" onClick={() => setModal({ project: i })}>📄 View Details</button></div>
            </div>
            <Shot p={p} onOpen={() => setModal({ project: i })} />
          </div>
        ))}
      </div>
    </section>
  );
}
