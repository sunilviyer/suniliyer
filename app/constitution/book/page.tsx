import { redirect } from 'next/navigation';

/**
 * Legacy URL. The book now begins with the Author's Note.
 */
export default function BookRedirect() {
  redirect('/constitution/authors-note');
}
