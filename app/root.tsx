import { LinksFunction } from '@remix-run/node';
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useRouteError,
} from '@remix-run/react';

import tailwindStyles from '~/styles/tailwind.css';

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStyles }];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  console.error(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div className="text-gray-500">
        <h1>There was an error</h1>
        <p>{error.data.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = 'Unknown error';
  if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en" className="bg-gray-800">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />

        {process.env.NODE_ENV !== 'development' ? (
          <script
            async
            defer
            data-website-id="f25284cc-bca6-4363-ac55-20107ce03594"
            src="https://umami.jaketaylor.co/umami.js"
          ></script>
        ) : null}
      </head>

      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
