import { MetaFunction } from 'remix';

export let meta: MetaFunction = () => {
  return {
    title: 'Jake Taylor — Contact',
    description:
      "Freelance web/app developer available for hire. Get in touch and let's build something together!",
  };
};

export default function Contact() {
  return (
    <>
      <h1 className="text-6xl font-black text-gray-100">Get in touch</h1>

      <p className="text-xl text-gray-300 mt-6">
        Got a project and need a dev? I'm your guy!
      </p>

      <p className="text-xl text-gray-300 mt-4">
        The best way to get in touch with me is either:
      </p>

      <ul className="list-disc pl-8 mt-2 text-gray-300 text-xl">
        <li>
          by emailing me on{' '}
          <a
            href="mailto:me@jaketaylor.co"
            className="text-indigo-500 hover:text-indigo-300"
          >
            me@jaketaylor.co
          </a>
        </li>
        <li className="mt-1">
          or by messaging me on{' '}
          <a
            href="https://www.linkedin.com/in/jakewtaylor/"
            className="text-indigo-500 hover:text-indigo-300"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <p className="text-xl text-gray-300 mt-4">
        I look forward to hearing from you!
      </p>
    </>
  );
}
