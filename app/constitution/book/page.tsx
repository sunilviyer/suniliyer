import { redirect } from 'next/navigation';

/**
 * The standalone two-volume book prototype was superseded by per-part
 * flipbooks at /constitution/[partId]. Keep the old URL working.
 */
export default function BookRedirect() {
  redirect('/constitution/part-1');
}
