'use client';
import { useApp } from '@/context/AppContext';

export default function Toast() {
  const { toastMsg } = useApp();
  return <div id="toast" role="status" className={toastMsg ? 'on' : ''}>{toastMsg}</div>;
}
