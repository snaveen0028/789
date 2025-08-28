import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'naveen@example.com',
      link: 'mailto:naveen@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Work Together</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always excited to take on new challenges and collaborate on interesting projects. 
                  Whether you have a specific project in mind or just want to chat about possibilities, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.title}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Availability</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    Available for new projects
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    Response time: 24-48 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white ${
                          errors.name ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="Your Name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white ${
                          errors.email ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white ${
                        errors.subject ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Project Discussion"
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;