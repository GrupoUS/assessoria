
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { DiagnosticInfo } from '@/types/blogService';
import { fetchPosts } from '@/services/blogService';
import { 
  distributePosts, 
  handleNoPosts, 
  handleError 
} from '@/services/blogDataProcessor';
import { generateDiagnosticInfo } from '@/services/blogService';

export const useBlogData = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);
  const [diagnosticInfo, setDiagnosticData] = useState<DiagnosticInfo | null>(null);

  // Função para forçar um novo carregamento dos dados
  const refreshData = async () => {
    console.log('useBlogData: Forçando atualização dos dados do blog');
    setIsLoading(true);
    await fetchBlogData();
  };

  const fetchBlogData = async () => {
    try {
      setIsLoading(true);
      console.log('useBlogData: Iniciando busca de posts do blog');
      
      const startTime = new Date();
      console.log(`useBlogData: Horário de início da consulta: ${startTime.toISOString()}`);
      
      const posts = await fetchPosts();
      const diagnostics = generateDiagnosticInfo(startTime, posts);
      setDiagnosticData(diagnostics);
      
      if (posts.length > 0) {
        const distribution = distributePosts(posts);
        setFeaturedPosts(distribution.featuredPosts);
        setRecentPosts(distribution.recentPosts);
        setCategories(distribution.categories);
      } else {
        handleNoPosts();
        setFeaturedPosts([]);
        setRecentPosts([]);
        setCategories([]);
      }
      
      setLastFetchTime(new Date());
    } catch (error) {
      handleError(error);
      setFeaturedPosts([]);
      setRecentPosts([]);
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchBlogData();
  }, []);

  return {
    featuredPosts,
    recentPosts,
    categories,
    isLoading,
    lastFetchTime,
    refreshData,
    diagnosticInfo
  };
};
