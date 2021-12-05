type Props = {
  src: string;
  caption: string;
  alt?: string;
};

export const Figure: React.FC<Props> = ({ src, caption, alt = caption }) => (
  <figure className="mt-4">
    <img src={src} className="rounded-lg" alt={alt} />
    <figcaption className="text-gray-400 ml-2 mt-1 leading-tight text-sm">
      {caption}
    </figcaption>
  </figure>
);
