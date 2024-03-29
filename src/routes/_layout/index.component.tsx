import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export function component() {
  return (
    <>
      <div className="p-12 flex items-center justify-center bg-slate-950 rounded-sm mt-12">
        <h1 className="text-white text-2xl">
          The next-generation anime platform
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <Button asChild>
          <Link to="/search/anime">Find animes</Link>
        </Button>
      </div>
    </>
  );
}
