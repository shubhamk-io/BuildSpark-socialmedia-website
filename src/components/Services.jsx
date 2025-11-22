import { Users, Shield, Video, TrendingUp, Code, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Social Media Services',
      description:
        'Transform your brand into a viral sensation. We connect you with elite creators and build unstoppable community momentum that turns followers into loyal advocates.',
      features: [
        'Creator Partnerships',
        'Brand Collaborations',
        'Community Management',
        'Strategy Development',
      ],
      image: 'https://images.unsplash.com/photo-1675352161865-27816c76141a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsJTIwbWVkaWElMjAlMjBjcmlzaXN8ZW58MHwwfDB8fHww',
    },
    {
      icon: Shield,
      title: 'Crisis Management',
      description:
        'When your digital reputation is on the line, we strike back. Expert account recovery, rapid unban services, and shadowban elimination that restores your influence.',
      features: [
        'Account Restoration',
        'Unban Services',
        'Shadowban Removal',
        'Reputation Management',
      ],
      image: 'https://media.istockphoto.com/id/1367616997/photo/customer-feedback-experience-review-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=2e_mca5307fKUijLSLVjc9mwcUfpROlCb-PSMvnWsqY=',
    },
    {
      icon: Video,
      title: 'Content Production',
      description:
        'Create content that captivates and converts. Our award-winning production team transforms raw ideas into cinematic masterpieces that dominate every platform.',
      features: [
        'Video Production',
        'Photography',
        'Creative Direction',
        'Post-Production',
      ],
      image: 'https://media.istockphoto.com/id/846843010/photo/beautiful-female-video-editor-works-with-footage-on-her-personal-computer-she-works-in.jpg?s=612x612&w=0&k=20&c=pVFT3vTHPuOGGvH1ZcvhOpssat9L7mKwebLhBjRdE9M=',
    },
    {
      icon: TrendingUp,
      title: 'Growth Services',
      description:
        'Explode your metrics with precision. From verified badges to algorithmic dominance, we engineer explosive growth through verified tactics and engagement mastery.',
      features: [
        'Verification (Inc. OF)',
        'Account Management',
        'Engagement Boosting',
        'Analytics & Insights',
      ],
      image: 'https://media.istockphoto.com/id/2209914068/photo/new-business-plan-setting-goals-for-the-new-year-2026-businessman-using-laptop-and-tablet-to.webp?a=1&b=1&s=612x612&w=0&k=20&c=tmISO_Cw03yjAOyLJS6TChJMWSSUnMjhzCsiXX_99rU=',
    },
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Build digital experiences that convert. Custom-coded websites and applications engineered for speed, scalability, and seamless user experiences that drive results.',
      features: [
        'Custom Web Applications',
        'Full-Stack Development',
        'E-Commerce Solutions',
        'Performance Optimization',
      ],
      image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8MHwwfHx8MA%3D%3D',
    },
    {
      icon: Palette,
      title: 'Design Services',
      description:
        'Visual excellence that commands attention. From stunning web design to iconic logos and graphics, we create visual identities that define your brand legacy.',
      features: ['Web Design', 'Graphic Design', 'Logo & Branding', 'UI/UX Design'],
      image: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfDB8MHx8fDA%3D',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
            Our Services
          </h2>

          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to{' '}
            <span className="text-blue-400">Dominate</span>
          </h3>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions designed to take your brand from good to legendary
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-900 border border-gray-700 rounded-2xl hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-105 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-blue-400/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-400 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-400 group-hover:text-black transition-colors duration-300" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p className="text-gray-300 mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-200 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center text-blue-400 font-semibold hover:gap-3 gap-2 transition-all duration-300"
                  >
                    Learn More
                    <span className="text-lg transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


