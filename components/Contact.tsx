'use client';

import { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email content
      const subject = `New Contact Form Submission from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage: ${formData.message}`;
      const mailtoUrl = `mailto:Apexinternationalelite@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#032b4a' }}
          >
            Contact Us
          </h2>
          <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#b29559' }}></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ready to explore global opportunities? Connect with our team to discover how Apex International Elite can drive your strategic growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ color: '#032b4a' }}
            >
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f8f6f0' }}
                >
                  <Mail className="w-6 h-6" style={{ color: '#b29559' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1" style={{ color: '#032b4a' }}>Email</h4>
                  <a 
                    href="mailto:info@apexelite.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    info@apexelite.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f8f6f0' }}
                >
                  <Phone className="w-6 h-6" style={{ color: '#b29559' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1" style={{ color: '#032b4a' }}>Phone</h4>
                  <a 
                    href="tel:+15551234567" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f8f6f0' }}
                >
                  <Globe className="w-6 h-6" style={{ color: '#b29559' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1" style={{ color: '#032b4a' }}>Website</h4>
                  <a 
                    href="https://www.apexelite.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.apexelite.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f8f6f0' }}
                >
                  <MapPin className="w-6 h-6" style={{ color: '#b29559' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1" style={{ color: '#032b4a' }}>Global Presence</h4>
                  <p className="text-gray-600">
                    Serving strategic markets across Panama, Venezuela, Colombia, Spain, and Ecuador
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: '#f8f6f0' }}>
              <h4 className="font-semibold text-lg mb-4" style={{ color: '#032b4a' }}>
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                <p>Saturday: 10:00 AM - 2:00 PM (EST)</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ color: '#032b4a' }}
            >
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#032b4a' }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#032b4a' }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="company" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#032b4a' }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#032b4a' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your requirements or how we can help..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-green-800 text-sm">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-800 text-sm">
                    ✗ Error sending message. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: '#b29559' }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#a68349';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#b29559';
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message via Email
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Your message will be sent directly to our team via email for prompt response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
