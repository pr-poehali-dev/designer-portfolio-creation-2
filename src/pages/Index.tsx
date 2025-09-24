import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioProjects = [
    {
      id: 1,
      title: "Креативный веб-дизайн",
      description: "Современный сайт для технологической компании с анимированными элементами",
      image: "img/36c617e1-a8e0-48f3-8f32-59e674c63ebb.jpg",
      tags: ["Web Design", "UI/UX", "Анимация"],
      process: "Исследование → Концепция → Прототипирование → Дизайн → Тестирование"
    },
    {
      id: 2,
      title: "Мобильное приложение",
      description: "Интуитивный интерфейс для фитнес-приложения с персонализацией",
      image: "img/8558cf98-36a1-4d18-a889-e8739be1bb3a.jpg",
      tags: ["Mobile", "UI/UX", "Прототипирование"],
      process: "UX Research → Wireframes → Visual Design → Prototype → User Testing"
    },
    {
      id: 3,
      title: "Брендинг проект",
      description: "Полная айдентика для стартапа в сфере экологических технологий",
      image: "img/11305c2d-fa21-4aa0-96d1-5edfe5c9af61.jpg",
      tags: ["Branding", "Logo", "Айдентика"],
      process: "Brand Strategy → Logo Design → Visual Identity → Guidelines → Implementation"
    }
  ];

  const services = [
    {
      icon: "Palette",
      title: "UI/UX Дизайн",
      description: "Создаю интуитивные и красивые интерфейсы для веба и мобильных приложений"
    },
    {
      icon: "Smartphone",
      title: "Мобильный дизайн",
      description: "Разрабатываю пользовательские интерфейсы для iOS и Android приложений"
    },
    {
      icon: "Layers",
      title: "Брендинг",
      description: "Создаю уникальную визуальную айдентику и фирменный стиль"
    },
    {
      icon: "Zap",
      title: "Прототипирование",
      description: "Интерактивные прототипы для тестирования пользовательского опыта"
    }
  ];

  const blogPosts = [
    {
      title: "Тренды дизайна 2024",
      excerpt: "Разбираю основные направления в дизайне интерфейсов на этот год",
      date: "15 сентября 2024"
    },
    {
      title: "Как создать эффективный дизайн-процесс",
      excerpt: "Мой опыт выстраивания рабочих процессов в дизайне",
      date: "8 сентября 2024"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'portfolio', 'about', 'services', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-coral ${
                    activeSection === section ? 'text-coral' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'portfolio' ? 'Портфолио' :
                   section === 'about' ? 'Обо мне' :
                   section === 'services' ? 'Услуги' :
                   section === 'blog' ? 'Блог' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-coral/10 to-mint/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-darkBlue leading-tight">
                  Креативный
                  <span className="block bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent">
                    Дизайнер
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Создаю уникальные дизайн-решения, которые вдохновляют и решают задачи бизнеса
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-gradient-to-r from-coral to-mint text-white hover:opacity-90 px-8 py-6 text-lg"
                >
                  Смотреть работы
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-coral text-coral hover:bg-coral hover:text-white px-8 py-6 text-lg"
                >
                  Связаться
                </Button>
              </div>
            </div>
            <div className={`relative ${isVisible ? 'animate-float' : ''}`}>
              <img 
                src="img/11305c2d-fa21-4aa0-96d1-5edfe5c9af61.jpg" 
                alt="Creative Design Hero" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkBlue mb-4">Мои работы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждый проект — это уникальная история с детальным разбором процесса работы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-darkBlue">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-coral mb-2">Процесс работы:</p>
                    <p className="text-sm text-gray-600">{project.process}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-lavender/20 text-darkBlue">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-darkBlue">Обо мне</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Привет! Меня зовут Анна, и я дизайнер с 7-летним опытом создания 
                  уникальных пользовательских интерфейсов и визуальных решений.
                </p>
                <p>
                  Моя специализация — создание интуитивных и эстетически привлекательных 
                  дизайнов, которые не только радуют глаз, но и решают конкретные бизнес-задачи.
                </p>
                <p>
                  В работе использую современные инструменты дизайна и всегда изучаю 
                  новые тренды, чтобы создавать актуальные и эффективные решения.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-coral/10 rounded-lg">
                  <div className="text-3xl font-bold text-coral">50+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center p-4 bg-mint/10 rounded-lg">
                  <div className="text-3xl font-bold text-mint">7</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="img/8558cf98-36a1-4d18-a889-e8739be1bb3a.jpg" 
                alt="Designer workspace" 
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkBlue mb-4">Услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Предлагаю полный спектр дизайнерских услуг для развития вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`p-8 hover:shadow-lg transition-all duration-300 group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-coral to-mint rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-darkBlue mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkBlue mb-4">Блог</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Делюсь опытом и размышлениями о дизайне
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.title}
                className={`p-6 hover:shadow-lg transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <CardTitle className="text-xl text-darkBlue mb-2">{post.title}</CardTitle>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="ghost" className="text-coral hover:bg-coral/10">
                      Читать далее <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-coral/5 to-mint/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-darkBlue mb-4">Свяжитесь со мной</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Готова обсудить ваш проект и воплотить ваши идеи в жизнь
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-coral to-mint rounded-lg text-white">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkBlue">Email</h3>
                    <p className="text-gray-600">hello@designer.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-coral to-mint rounded-lg text-white">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkBlue">Телефон</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-coral to-mint rounded-lg text-white">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkBlue">Локация</h3>
                    <p className="text-gray-600">Москва, Россия</p>
                  </div>
                </div>
              </div>
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Ваше имя" className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="w-full" />
                  </div>
                  <div>
                    <Input placeholder="Тема сообщения" className="w-full" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..." 
                      className="w-full h-32 resize-none" 
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-coral to-mint text-white hover:opacity-90 py-3">
                    Отправить сообщение
                    <Icon name="Send" size={20} />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkBlue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-gray-400 mb-6">
              Создаю дизайн, который вдохновляет и работает
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Github" size={20} />
              </Button>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Portfolio. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;