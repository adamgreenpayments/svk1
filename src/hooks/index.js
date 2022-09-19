import * as cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

// import db from '$lib/db';

export async function prepare(incoming) {
  console.log("poop1a");
  const cookies = cookie.parse(incoming.headers.cookie || '');

  const headers = {};
  if (!cookies.session_id) {
    headers['set-cookie'] = `session_id=${uuid()}; HttpOnly`;
  }

  return {
    headers,
    context: {
      adnanTest: {
        key1: 'value 1',
      },
      // user: await db.get_user(cookies.session_id),
    },
  };
}

/**
 * @param {{
 *   context: any
 * }} options
 * @returns {any}
 */
export function getSession({ context }) {
  console.log("poop2");
  console.log(context);
  return {
    adnanTest: {
      key1: context.adnanTest?.key1,
      poop: "poopy"
    },
    user: {
      // only include properties needed client-side —
      // exclude anything else attached to the user
      // like access tokens etc
      name: context.user?.name,
      email: context.user?.email,
      avatar: context.user?.avatar,
    },
  };
}


const publicPages = ['/', '/api'] 

function verifyToken(token) {
    if (token === 'haha') {
        return true
    }
    return false
}


// export async function handle({ request, render }) {
//   console.log("poppy33");
//   console.log(request);
//   console.log(cookie);
//   const { token } = cookie.parse(request?.headers?.cookie || '');
//   console.log(token)
//   if (token) {
//       request.locals.isLoggedIn = verifyToken(token)
//   } else {
//       // request.locals.isLoggedIn = false
//   }
//   const response = await render(request);
//   if (!request?.locals?.isLoggedIn && !publicPages.includes(request.path)) {
//    // If you are not logged in and you are not on a public page, 
//    // it just redirects you to the main page, which is / in this case. 
//       return {
//           status: 301,
//           headers: {
//               location: '/'
//           }
//       };
//   }
//   return {
//       ...response
//   }
// }


