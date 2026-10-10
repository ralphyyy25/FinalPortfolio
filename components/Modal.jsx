'use client';
import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';

export default function Modal({ open, children }) {
  const { closeModal } = useApp();
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && closeModal();
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [open, closeModal]);
  return (
    <div className={`md${open ? ' open' : ''}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className="mb2" role="dialog" aria-modal="true">
        <button className="cl ib" onClick={closeModal} aria-label="Close">✕</button>
        {children}
      </div>
    </div>
  );
}
