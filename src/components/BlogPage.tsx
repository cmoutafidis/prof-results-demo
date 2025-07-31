import React from 'react';
import { Calendar, Clock, User, Eye, Heart, MessageCircle, ArrowRight, Search, Filter } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  image: string;
  category?: string;
}

const BlogPage = () => {
  // Sample blog posts data based on the content from the old website
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Money Printing Machine',
      excerpt: "Hi, It's Arno. Ran into something superweird and I'm almost positive you've had a similar experience. I'm running ads for a client and...",
      author: {
        name: 'Arno Wingen',
        avatar: 'https://static.wixstatic.com/media/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg/v1/fill/w_64,h_64,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg'
      },
      publishedAt: '2 dagen geleden',
      readTime: '1 min read',
      views: 14,
      likes: 0,
      comments: 0,
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Marketing Strategy'
    },
    {
      id: '2',
      title: 'The Google Ruse',
      excerpt: "Hi, It's Arno. Google is bamboozling you. And me. All of us. Clients that are looking for US are being sent to our competitors. And I can...",
      author: {
        name: 'Arno Wingen',
        avatar: 'https://static.wixstatic.com/media/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg/v1/fill/w_64,h_64,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg'
      },
      publishedAt: '2 dagen geleden',
      readTime: '1 min read',
      views: 17,
      likes: 0,
      comments: 0,
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Google Ads'
    },
    {
      id: '3',
      title: 'You Really Need to Do This',
      excerpt: "Hi, It's Arno. Quick one this time. If you run a local business you need to be using Google ads. There is no local business that...",
      author: {
        name: 'Arno Wingen',
        avatar: 'https://static.wixstatic.com/media/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg/v1/fill/w_64,h_64,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg'
      },
      publishedAt: '23 mei',
      readTime: '1 min read',
      views: 1036,
      likes: 24,
      comments: 0,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Local Business'
    },
    {
      id: '4',
      title: 'No One Cares. Really.',
      excerpt: "Hi, It's Arno. Was talking to a business owner yesterday. We covered something you'll find interesting too. We were going over his...",
      author: {
        name: 'Arno Wingen',
        avatar: 'https://static.wixstatic.com/media/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg/v1/fill/w_64,h_64,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg'
      },
      publishedAt: '21 mei',
      readTime: '1 min read',
      views: 386,
      likes: 14,
      comments: 0,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Business Insights'
    },
    {
      id: '5',
      title: 'More Sales Formula',
      excerpt: "Hi, It's Arno. 15 years ago I struggled with marketing my own local business. It's one of the very few things that have ever kept me up...",
      author: {
        name: 'Arno Wingen',
        avatar: 'https://static.wixstatic.com/media/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg/v1/fill/w_64,h_64,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg'
      },
      publishedAt: '18 mei',
      readTime: '2 min read',
      views: 338,
      likes: 14,
      comments: 0,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sales Strategy'
    },
    {
      id: '6',
      title: 'BMR',
      excerpt: "Hi, It's Arno. Had a meeting with my team today. Going over some strategy stuff. Main takeaway was that it's actually quite easy to win...",
      author: {
        name: 'Arno Wingen',
        avatar: 'https://static.wixstatic.com/media/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg/v1/fill/w_64,h_64,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9192c1_0da4fe2ab98d4a14a3418dbe92f69ba0%7Emv2.jpg'
      },
      publishedAt: '18 mei',
      readTime: '1 min read',
      views: 165,
      likes: 12,
      comments: 0,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Strategy'
    }
  ];

  const categories = ['All Posts', 'Marketing Strategy', 'Google Ads', 'Local Business', 'Business Insights', 'Sales Strategy', 'Strategy'];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Marketing Insights & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500"> Strategies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover proven marketing strategies, insights, and tactics that help businesses grow and get more clients.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    category === 'All Posts'
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {post.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{post.author.name}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.publishedAt}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-red-600 transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Post Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye size={16} />
                        {post.views} views
                      </span>
                      {post.likes > 0 && (
                        <span className="flex items-center gap-1">
                          <Heart size={16} />
                          {post.likes} likes
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <MessageCircle size={16} />
                        {post.comments} comments
                      </span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div>
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Read Full Article
                      <ArrowRight className="ml-2" size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-red-500 hover:text-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Load More Articles
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest marketing strategies and business insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-red-500 text-gray-900"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;