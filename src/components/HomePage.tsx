import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Toast from './Toast';

const HomePage = () => {
  const [showToast, setShowToast] = React.useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <main className="overflow-hidden">
      <Toast
        message="Hey Arno — this is a meticulously transformed version of your website using AI, leveraging a bespoke digital presence to streamline your outdated landscape! AI’s opulent, comprehensive prowess is totally elevating and empowering our implementations, leaving you in the dust 👀"
        onClose={handleCloseToast}
        show={showToast}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              More Growth. More Clients.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 drop-shadow-lg">
                Guaranteed
              </span>
              .
            </h1>
            <div className="mt-12">
              <Link
                to="/free-marketing-analysis"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-pink-700"
              >
                YES, I WANT THAT!
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing is important...
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ...However, there are already 101 things on your to-do list.
              <br />
              And they are all important!
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              So How Do You Get The
              <br />
              Most Out Of Your Marketing?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Option 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  DO EVERYTHING YOURSELF?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have little to do, it's not a problem.
                  <br /><br />
                  However, if you're busy... this is not feasible.
                </p>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  HIRE NEW STAFF?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Finding good people is difficult, training them is expensive.
                  <br /><br />
                  Even if you find the perfect person... You still rely on one individual.
                </p>
              </div>
            </div>

            {/* Option 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  HIRE AN AGENCY?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Don't have a marketing budget of tens of thousands of euros per month? Well then your account is often managed by the intern of the assistant of the assistant. Not ideal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8">
              "OK... But What Makes You Different?"
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Guarantee */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GUARANTEE</h3>
                <p className="text-gray-600 leading-relaxed">
                  We only win if you win. That's the basis for a good partnership.
                  <br /><br />
                  You won't carry all the risk, we'll share it.
                </p>
              </div>
            </div>

            {/* Local */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">LOCAL</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are not tucked away in some anonymous call center.
                  <br /><br />
                  We're a local company, so you'll be able to reach us when you need us.
                </p>
              </div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">RESULT</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our first priority is to get you results.
                  <br /><br />
                  Less talk, more walk.
                </p>
              </div>
            </div>

            {/* Specialization */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SPECIALIZATION</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jack of all trades... Master of none. Specialization works.
                  <br /><br />
                  That's why we work with industries we know, so we can guarantee results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Contact Us For A
            <br />
            Free Marketing Consultation:
          </h2>
          <Link
            to="/free-marketing-analysis"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-pink-700"
          >
            YES, I WANT THAT!
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
