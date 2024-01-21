import { Input } from '@/components/ui/input';
import { Link } from '@tanstack/react-router';
import slugify from 'slugify';
import {
  MediaFragmentFragment,
  useGetAnimesByCategories,
} from './hooks/useGetAnimesByCategories';

export function SearchAnimePage() {
  const { loading, data } = useGetAnimesByCategories();
  console.log({ data });

  if (loading) {
    return <div>Loading...</div>;
  }

  const sections = [
    {
      key: 'trending' as const,
      title: 'Trending now',
    },
    {
      key: 'season' as const,
      title: 'Popular this season',
    },
    {
      key: 'nextSeason' as const,
      title: 'Upcoming next season',
    },
    {
      key: 'popular' as const,
      title: 'All time popular anime',
    },
    {
      key: 'top',
      title: 'Top 100 anime',
    },
  ] as const;

  return (
    <div>
      <div>
        <Input type="text" onChange={() => {}} />
      </div>
      {data?.trending?.media ? (
        <div>
          {sections.map((section) => {
            return (
              <div key={section.key} className="mb-10">
                <Link
                  to="/search/anime/$category"
                  params={{
                    category: section.key,
                  }}>
                  <Title title={section.title} />
                </Link>
                <div className="grid grid-cols-5 gap-4">
                  {data[section.key]?.media
                    ?.slice(0, 5)
                    .map((media) => <Card media={media} key={media?.id} />)}
                </div>
              </div>
            );
          })}
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

function Card({ media }: { media?: MediaFragmentFragment | null }) {
  if (!media) {
    return null;
  }

  return (
    <div>
      <Link
        to="/anime/$animeId/$animeSlug"
        params={{
          animeId: media.id.toString(),
          animeSlug: slugify(media.title?.userPreferred || ''),
        }}
        className="group">
        <img
          className="w-[185px] h-[265px] object-contain object-center rounded-md shadow-2xl"
          src={media.coverImage?.large || ''}
        />
        <span className="font-semibold text-sm text-teal-800 inline-block mt-2 group-hover:text-rose-500 transition-colors">
          {media.title?.userPreferred}
        </span>
      </Link>
    </div>
  );
}
