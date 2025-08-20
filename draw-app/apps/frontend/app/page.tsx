'use client';

import { useState } from 'react';
import { 
  Palette, 
  Users, 
  Zap, 
  Shield, 
  Download, 
  Play, 
  Menu, 
  X,
  ArrowRight,
  Check,
  Star,
  Globe,
  Layers,
  MousePointer
} from 'lucide-react';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Intuitive Drawing Tools",
      description: "Sketch, draw, and create with precision using our comprehensive set of drawing tools and shapes."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time, no matter where you are in the world."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Infinite Canvas",
      description: "Never run out of space with our infinite canvas that adapts to your creative needs."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Experience smooth, responsive drawing with optimized performance for all devices."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy First",
      description: "Your creations are secure with end-to-end encryption and privacy-focused design."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Works Everywhere",
      description: "Access Tavropad from any browser on any device - no downloads required."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      company: "TechCorp",
      content: "Tavropad has transformed how our team collaborates on design concepts. The real-time features are incredible!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Engineering Manager",
      company: "StartupXYZ",
      content: "Finally, a drawing tool that's both powerful and simple. Our brainstorming sessions have never been more productive.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "UX Researcher",
      company: "DesignStudio",
      content: "The infinite canvas and collaboration features make Tavropad perfect for user journey mapping and wireframing.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MousePointer className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Tavropad
                  </span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">
                  Reviews
                </a>
                <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </a>
               
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105">
                  Try Free
                </button>
              </div>
            </div>
            
            <div className="md:hidden flex items-center space-x-2">
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 block px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 block px-3 py-2 text-sm font-medium">
                Reviews
              </a>
              <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 block px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <button className="w-full text-left bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-2 rounded-lg text-sm font-medium mt-2">
                Try Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
                <Zap className="h-4 w-4 mr-2" />
                The future of collaborative drawing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Create, Collaborate, and
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent pb-4">
                Bring Ideas to Life
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Tavropad is the powerful yet simple collaborative drawing tool that helps teams brainstorm, 
              design, and visualize ideas together in real-time. No downloads, no complexity - just pure creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg">
                <Play className="h-5 w-5 inline mr-2" />
                Start Drawing Free
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all">
                <Download className="h-5 w-5 inline mr-2" />
                Watch Demo
              </button>
            </div>
            
            {/* Hero Visual */}
            <div className="relative mx-auto max-w-5xl">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 px-4 py-3 border-b border-gray-200 dark:border-gray-600 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">tavropad.com</div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <MousePointer className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">Interactive Canvas Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to create
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful features that make collaboration effortless and creativity boundless
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg dark:hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what our users have to say about their Tavropad experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Start free and scale as you grow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Free</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Perfect for personal use</p>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                $0<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Up to 3 collaborators</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Basic drawing tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">5 saved projects</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all">
                Get Started
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="p-8 rounded-2xl border-2 border-emerald-500 bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 dark:bg-gray-800 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">For growing teams</p>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                $9<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited collaborators</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Advanced drawing tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all">
                Start Free Trial
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">For large organizations</p>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Custom
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">SSO integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Advanced security</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Dedicated support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your creative process?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of teams who've made the switch to Tavropad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
              Start Free Today
              <ArrowRight className="h-5 w-5 inline ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <MousePointer className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Tavropad</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The collaborative drawing tool that brings teams together to create, brainstorm, and visualize ideas effortlessly.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tavropad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}