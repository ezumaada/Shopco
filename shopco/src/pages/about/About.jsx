import React from 'react';
import   Users from '../../assets/images/profile-icon.png';
import   ShoppingBag from '../../assets/images/profile-icon.png';
import   Globe from '../../assets/images/profile-icon.png';
import   Award from '../../assets/images/profile-icon.png';
import   shop from '../../assets/images/shop.jpg';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


const About = () => {
  const stats = [
    { id: 1, value: '2M+', label: 'Active Users', img: Users },
    { id: 2, value: '500K+', label: 'Products Sold', img: ShoppingBag },
    { id: 3, value: '50+', label: 'Countries Served', img: Globe },
    { id: 4, value: '15+', label: 'Years of Excellence', img: Award },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We ensure every product meets our high standards of quality and durability.'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We go above and beyond to exceed expectations.'
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable fashion choices.'
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving and adapting to bring you the latest in fashion and technology.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlgtRuPr6MaWKf0A3e0c0sUAAdDUzIpeOv4D7SzPC_ArOaxUzjmPKQW-djxinlamFwMw&usqp=CAU'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Customer Experience',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoMbo3zySV12mQAS7zMg6wGfjc3uCFwWgx8U5YVTEhFiwkD2moU4CEAV999BwBK4S8ho&usqp=CAU'
    }
  ];

  return (
    <div>
        <Navbar/>
        <div className="min-h-screen mx-[5vw] bg-gray-50">
            {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About ShopCo
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
            Founded in 2009, ShopCo has grown from a small local boutique to a global
            fashion destination. We believe in making quality fashion accessible to everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                    <div className="flex justify-center mb-4">
                        <img 
                            src={stat.img} 
                            alt={stat.label}
                            className="w-8 h-8"
                        />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold mb-2">
                        {stat.value}
                    </div>
                    <div className="text-gray-600">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src={shop} 
                alt="ShopCo Store" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                What started as a passion for fashion in a small corner store has evolved
                into a global brand that serves millions. Our journey has been driven by
                our commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Today, ShopCo stands as a testament to our dedication to bringing the
                latest trends and timeless classics to fashion enthusiasts worldwide.
                We continue to grow while maintaining the personal touch that made us
                special from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer/>
        </div>
      
  );
};

export default About;