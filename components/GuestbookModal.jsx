'use client';
import Modal from './Modal';
import { useApp } from '@/context/AppContext';

export default function GuestbookModal() {
  const { modal, entries, addEntry } = useApp();
  const submit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    addEntry(f.n.value.trim(), f.m.value.trim());
    f.reset();
  };
  return (
    <Modal open={modal === 'guestbook'}>
      <h3>Guestbook</h3>
      <div className="gl">
        {entries.length === 0 && <p>No entries yet. Be the first to sign.</p>}
        {entries.map((g, i) => (
          <div className="gi" key={i}><small>{g.n} · {g.d}</small><span>{g.m}</span></div>
        ))}
      </div>
      <form onSubmit={submit}>
        <input name="n" required maxLength={30} placeholder="Your name" />
        <textarea name="m" required rows={3} maxLength={200} placeholder="Leave a message..." />
        <button className="btn" style={{ justifyContent: 'center', margin: 0 }} type="submit">Sign guestbook</button>
      </form>
    </Modal>
  );
}
