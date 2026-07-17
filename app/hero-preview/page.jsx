// The hero redesign was promoted to the homepage; keep old links working.
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/');
}
