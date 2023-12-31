'use client';

import { useRouter } from "next/navigation";



interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset
}) => {
  const router = useRouter();

  return ( 
    <div 
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      
      <div className="w-48 mt-4">
        {showReset && (
          <button onClick={() => router.push('/advertiser')}>dashboard</button>
        )}
      </div>
    </div>
   );
}
 
export default EmptyState;