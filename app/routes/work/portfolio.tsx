import { Outlet, useLocation, MetaFunction } from 'remix';

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Jake Taylor — Portfolio',
    description:
      "Take a look at some of my work. I'm a freelance web/app developer available for hire, get in touch and let's build something together!",
  };
};

export default function Portfolio() {
  const location = useLocation();

  return (
    <>
      <h1
        className={`${
          location.pathname === '/work/portfolio'
            ? 'text-6xl'
            : 'text-xl text-opacity-75'
        } font-black text-gray-100 transition-all`}
      >
        Portfolio
      </h1>

      <Outlet />
    </>
  );
}
