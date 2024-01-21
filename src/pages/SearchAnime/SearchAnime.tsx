import { Input } from '@/components/ui/input';
import { Link } from '@tanstack/react-router';
import {
  MediaFragment,
  useGetAnimesByCategories,
} from './hooks/useGetAnimesByCategories';

export function SearchAnimePage() {
  const { loading, data } = useGetAnimesByCategories();
  console.log({ data });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Input type="text" onChange={() => {}} />
      </div>
      {data?.trending?.media ? (
        <div>
          <Link to="/search/anime/trending">
            <Title title="Trending now" />
          </Link>
          <div>
            {data.trending.media.map((media) => (
              <Card media={media} key={media?.id} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Title({ title }: { title: string }) {
  return (
    <div className="flex justify-between mb-5 text-teal-800 font-bold">
      <h3 className="text-md">{title}</h3>
      <span className="text-xs">View all</span>
    </div>
  );
}

function Card({ media }: { media: MediaFragment }) {
  return (
    <div>
      <img
        className="w-[185px] h-[265px] object-cover object-center"
        src={media.coverImage?.large || ''}
      />
    </div>
  );
}
