import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactPage = () => (
  <div className="min-h-screen bg-gray-900 py-12 pt-20">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Email</h4>
                  <p className="text-gray-400">jit@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Github className="text-gray-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">GitHub</h4>
                  <p className="text-gray-400">github.com/JitRoy-dev</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                  <Linkedin className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">LinkedIn</h4>
                  <p className="text-gray-400">linkedin.com/in/JitRoy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Let's Connect!</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a conversation about technology. Feel free to reach out!
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/JitRoy-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 hover:cursor-pointer">
                  <Github size={16} />
                  View GitHub
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/JitRoy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-purple-500 text-purple-400 px-6 py-2 rounded-lg hover:bg-purple-900/50 transition-colors flex items-center gap-2 hover:cursor-pointer">
                  <Linkedin size={16} />
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-200">Send a Message</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors bg-gray-700 text-gray-200 placeholder-gray-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors bg-gray-700 text-gray-200 placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors bg-gray-700 text-gray-200 placeholder-gray-500"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors resize-none bg-gray-700 text-gray-200 placeholder-gray-500"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button
              onClick={() => { }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;