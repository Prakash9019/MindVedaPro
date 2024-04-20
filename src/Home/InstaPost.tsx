import * as React from "react";

interface AuthorProps {
  avatarSrc: string;
  name: string;
  title: string;
}

const Author: React.FC<AuthorProps> = ({ avatarSrc, name, title }) => (
  <div className="flex flex-col justify-center px-4 py-2 w-full bg-slate-50 leading-[150%]">
    <div className="flex gap-4">
      <img src={avatarSrc} alt={`${name}'s avatar`} className="shrink-0 w-14 aspect-square" />
      <div className="flex flex-col justify-center my-auto">
        <div className="text-base font-medium text-neutral-900">{name}</div>
        <div className="text-sm text-slate-500">{title}</div>
      </div>
    </div>
  </div>
);

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <div className="flex flex-col justify-center py-3 mt-32 w-full bg-slate-50">
    <div className="flex gap-1 bg-slate-50">
      <img src={images[0]} alt="" className="shrink-0 max-w-full aspect-[0.74] w-[191px]" />
      <div className="flex flex-col flex-1">
        <div className="flex gap-1">
          <img src={images[1]} alt="" className="shrink-0 w-24 aspect-[0.75]" />
          <img src={images[2]} alt="" className="shrink-0 aspect-[0.7] w-[90px]" />
        </div>
        <div className="flex gap-1 mt-1">
          <img src={images[3]} alt="" className="shrink-0 w-24 aspect-[0.75]" />
          <img src={images[4]} alt="" className="shrink-0 aspect-[0.7] w-[90px]" />
        </div>
      </div>
    </div>
  </div>
);

interface ActionProps {
  iconSrc: string;
  count: number;
}

const Action: React.FC<ActionProps> = ({ iconSrc, count }) => (
  <div className="flex gap-2 justify-center px-3 py-2">
    <img src={iconSrc} alt="" className="shrink-0 w-6 aspect-square" />
    <div className="my-auto">{count}</div>
  </div>
);

interface PostProps {
  author: AuthorProps;
  content: string;
  imageGrid?: ImageGridProps;
  actions: ActionProps[];
  commentsCount: number;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({ author, content, imageGrid, actions, commentsCount, timestamp }) => (
  <article className="flex flex-col px-5 pb-20 w-full bg-slate-50">
    <Author {...author} />
    <div className="mt-1 w-full text-base leading-6 text-neutral-900">{content}</div>
    {imageGrid && <ImageGrid {...imageGrid} />}
    <div className="flex gap-4 py-2 pr-20 pl-4 text-sm font-bold tracking-normal leading-5 whitespace-nowrap text-slate-500">
      {actions.map((action, index) => (
        <Action key={index} {...action} />
      ))}
    </div>
    <div className="flex flex-col justify-center p-4 w-full bg-slate-50 leading-[150%]">
      <div className="flex gap-4 justify-between">
        <div className="text-base text-neutral-900">See {commentsCount} comments</div>
        <div className="text-sm text-slate-500">{timestamp}</div>
      </div>
    </div>
  </article>
);

const InstaPost: React.FC = () => {
  const posts: PostProps[] = [
    {
      author: {
        avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/19ed3b7b6e8cd2604f1b950c757e8d2263852dfd94b224d074c92aaf9fe80031?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&",
        name: "Dr. Rhea Bhatia",
        title: "Psychiatrist at Stanford University",
      },
      content:
        "It's okay to not be okay. It's okay to not have everything figured out. It's okay to feel lost and confused. It's okay to cry and feel sad. It's okay to take a break. It's okay to not know what you want. It's okay to say no. It's okay to ask for help. It's okay to be human.",
      imageGrid: {
        images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/8bf09432c65c869f64049dd2b3e8b710b0faadabe28d281ad89decba6d2df5e6?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", "https://cdn.builder.io/api/v1/image/assets/TEMP/bbd7b86387a8914d74f59118e86018cb2dbdb2d6d46e11b7a4afffdcc1ec1c43?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", "https://cdn.builder.io/api/v1/image/assets/TEMP/0cce4343728891d4d3756543341ec1a987dd09793c2224bc767452f67238ddf8?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", "https://cdn.builder.io/api/v1/image/assets/TEMP/d1a879f2ad4fab7056c5e9abb63778e138806903abe4c342cf1e17a3686e4f2d?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", "https://cdn.builder.io/api/v1/image/assets/TEMP/b52692f203f34222733dc6e3480d7de717d8af2e57810a14e982bfb2e97ba66b?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&"],
      },
      actions: [
        { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/869e4979ca30f8904cad91d234d347479c8b9c3967650cd09f903b315b149bb7?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", count: 123 },
        { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9c6c8bd8fa781e7624c649c818955b2c09caf9ef0c7953130d78c39516f4c0f?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", count: 45 },
        { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03b788cf7673a2da94df3d94772ef5a9b9f0cbdfdbb4c9784c3d103a3bf4a4f7?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", count: 6 },
      ],
      commentsCount: 12,
      timestamp: "2w",
    },
    {
      author: {
        avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/65b3209dac2224f6cda3744b1eb9287cb840b370b044c0b952a11893aed34eb0?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&",
        name: "Dr. Rhea Bhatia",
        title: "Psychiatrist at Stanford University",
      },
      content: "How do I know if my child has ADHD or is just being a kid?",
      imageGrid: undefined,
      actions: [
        { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc4737db055484ae32a6c479a374808b8608659b3ee360a7d28e94ca69f8e188?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", count: 45 },
        { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/34850f39d2523ddcfd246d59ccaeeebee646c1ee971c473258f4a70df426e107?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", count: 23 },
        { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef9cff049214c26df299f4405a7c5e9052735dc7638e0c596f6d875460441db2?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&", count: 3 },
      ],
      commentsCount: 7,
      timestamp: "4d",
    },
  ];

  return (
    <div className="flex flex-col justify-center mx-auto w-full bg-white max-w-[480px]">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
      <div className="w-full bg-slate-50 min-h-[20px]" />
    </div>
  );
};

export default InstaPost;