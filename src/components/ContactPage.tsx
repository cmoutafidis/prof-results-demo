import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MessageSquare, Globe, DollarSign, User, Building } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    question: '',
    howDidYouFindUs: '',
    advertisingBudget: '',
    website: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your request and will contact you within 48 hours for your free marketing analysis.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-green-800 font-medium">
                No costs, no obligations, no annoying sales pitch. Guaranteed.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Receive A Free Marketing Analysis:
            </h1>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Would you like to know what we can do for you?
                <br /><br />
                Fill out the form below and we will contact you within 48 hours for a free analysis.
                <br /><br />
                No costs, no obligations, no annoying sales pitch. Guaranteed.
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <label className="block text-white font-medium mb-2">
                    <User className="inline w-5 h-5 mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="Name"
                  />
                </div>

                {/* Company Name */}
                <div className="relative">
                  <label className="block text-white font-medium mb-2">
                    <Building className="inline w-5 h-5 mr-2" />
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="relative">
                  <label className="block text-white font-medium mb-2">
                    <Mail className="inline w-5 h-5 mr-2" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="E-mail"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-white font-medium mb-2">
                    <Phone className="inline w-5 h-5 mr-2" />
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              {/* Question */}
              <div className="relative">
                <label className="block text-white font-medium mb-2">
                  <MessageSquare className="inline w-5 h-5 mr-2" />
                  What is your most important question? *
                </label>
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="What is your most important question?"
                />
              </div>

              {/* How did you find us */}
              <div className="relative">
                <label className="block text-white font-medium mb-2">
                  <MessageSquare className="inline w-5 h-5 mr-2" />
                  How did you find us?
                </label>
                <input
                  type="text"
                  name="howDidYouFindUs"
                  value={formData.howDidYouFindUs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="How did you find us?"
                />
              </div>

              {/* Advertising Budget */}
              <div className="relative">
                <label className="block text-white font-medium mb-2">
                  <DollarSign className="inline w-5 h-5 mr-2" />
                  How much are you spending on advertising / month (in USD)?
                </label>
                <input
                  type="number"
                  name="advertisingBudget"
                  value={formData.advertisingBudget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="How much are you spending on advertising / month (in USD)?"
                />
              </div>

              {/* Website */}
              <div className="relative">
                <label className="block text-white font-medium mb-2">
                  <Globe className="inline w-5 h-5 mr-2" />
                  What's your website?
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="What's your website?"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3" size={24} />
                      SEND
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;