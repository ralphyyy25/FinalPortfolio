'use client';
import Modal from './Modal';
import { projects } from '@/data/projects';
import { useApp } from '@/context/AppContext';

export default function ProjectModal() {
  const { modal } = useApp();
  const p = modal && typeof modal === 'object' ? projects[modal.project] : null;
  return (
    <Modal open={!!p}>
      {p && (<>
        <h3>{p.title}</h3>
        <img src={p.image} alt={p.title} onError={(e) => (e.currentTarget.style.display = 'none')} style={{ width: '100%', borderRadius: 12, margin: '4px 0 14px' }} />
        <p>{p.desc}</p>
      </>)}
    </Modal>
  );
}
