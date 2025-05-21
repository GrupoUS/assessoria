
import { BlogPost } from './blog';

export interface DiagnosticInfo {
  queryStart: string;
  queryEnd: string;
  queryDuration: number;
  postsCount?: number;
  postsIds?: string[];
  rlsStatus?: string;
  slugQueried?: string;
  resultFound?: boolean;
  error?: string | null;
}

export interface BlogDataResult {
  featuredPosts: BlogPost[];
  recentPosts: BlogPost[];
  categories: string[];
  isLoading: boolean;
  lastFetchTime: Date | null;
  refreshData: () => Promise<void>;
  diagnosticInfo: DiagnosticInfo | null;
}
