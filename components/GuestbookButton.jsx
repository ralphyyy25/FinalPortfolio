'use client';
import { useApp } from '@/context/AppContext';

export default function GuestbookButton() {
  const { openGuestbook, entries } = useApp();
  return (
    <button className="gb" onClick={openGuestbook} aria-label="Open Guestbook">
      ✎ Guestbook <b>{entries.length}</b>
    </button>
  );
}
