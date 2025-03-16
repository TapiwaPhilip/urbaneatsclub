
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How Lunch Programs Boost Employee Retention by 22%',
    excerpt: 'New research shows companies with regular lunch programs see significantly higher retention rates. Discover the key factors that make food benefits so effective.',
    author: 'Emma Rodriguez',
    date: 'October 15, 2023',
    category: 'Research',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'The Rise of Hybrid Work Lunches: Balancing Office and Remote Days',
    excerpt: 'With hybrid work models becoming the new normal, companies are finding innovative ways to maintain food benefits for employees both in and out of the office.',
    author: 'Michael Chen',
    date: 'September 28, 2023',
    category: 'Workplace Trends',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'How to Choose the Right Restaurant Partners for Your Corporate Lunch Program',
    excerpt: 'Selecting the right restaurant mix can make or break your lunch program. We cover the key considerations when building your restaurant network.',
    author: 'Sarah Johnson',
    date: 'September 12, 2023',
    category: 'Best Practices',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'The Environmental Impact of Corporate Food Programs: Making Sustainable Choices',
    excerpt: 'Corporate lunch programs can significantly impact sustainability efforts. Learn how to implement eco-friendly practices in your food benefits.',
    author: 'Thomas Müller',
    date: 'August 24, 2023',
    category: 'Sustainability',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    title: 'ROI of Food Benefits: Financial Analysis for CFOs',
    excerpt: 'Breaking down the numbers behind food benefit programs and how they contribute to both employee satisfaction and company financial performance.',
    author: 'Olivia Smith',
    date: 'August 10, 2023',
    category: 'Finance',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    title: 'Tech Solutions for Managing Corporate Food Programs at Scale',
    excerpt: 'As companies grow, managing food benefits becomes more complex. Explore the technology solutions making food program administration efficient.',
    author: 'Alex Kumar',
    date: 'July 29, 2023',
    category: 'Technology',
    image: '/placeholder.svg'
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200">
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
    </div>
    <div className="flex flex-1 flex-col justify-between bg-white p-6">
      <div className="flex-1">
        <p className="text-sm font-medium text-urban-600 mb-1">{post.category}</p>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{post.title}</h3>
        <p className="mt-3 text-base text-slate-600">{post.excerpt}</p>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
            <User size={20} />
          </div>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-slate-900">{post.author}</p>
          <div className="flex space-x-1 text-sm text-slate-500">
            <Calendar size={14} className="mt-0.5" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | Urban Eats Club</title>
        <meta name="description" content="Insights and updates about corporate food benefits, workplace culture, and employee satisfaction." />
      </Helmet>
      
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">Latest insights on corporate food benefits, employee satisfaction, and workplace culture trends.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="flex justify-center">
            <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 hover:bg-slate-50 transition-colors">
              <span>Load more articles</span>
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="mt-20 bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to our newsletter</h2>
            <p className="text-slate-600 mb-6">Get the latest articles, resources, and insights on corporate food benefits delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
