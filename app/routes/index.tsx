import { redirect } from 'remix';

/**
 * I don't want any thing at the URL route, so redirect to /work as the default!
 */

export const loader = async () => {
  throw redirect('/work');
};
