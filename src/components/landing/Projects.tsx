import Icon from "@/components/ui/icon"

const projects = [
  {
    id: 1,
    slug: "sourcebans-setup",
    title: "SourceBans",
    shortDescription: "Установка и настройка системы банов и администрирования для CS:S сервера",
    mainImage: "/portfolio-images/saas-dashboard-1.jpg",
  },
  {
    id: 2,
    slug: "level-ranks-web",
    title: "Level Ranks Web",
    shortDescription: "Веб-панель рейтинга игроков с таблицей лидеров и статистикой",
    mainImage: "/portfolio-images/saas-dashboard-2.jpg",
  },
  {
    id: 3,
    slug: "css-server-site",
    title: "Сайт сервера CS:S",
    shortDescription: "Сайт-визитка игрового сервера с правилами, новостями и ссылкой для подключения",
    mainImage: "/portfolio-images/ecommerce-interface-1.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Примеры
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">выполненных работ</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Серверы CS:S под ключ, настроенные веб-панели и готовые сайты-визитки — вот что я делаю для своих клиентов.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{project.shortDescription}</p>
              <div className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                Подробнее{" "}
                <Icon name="ArrowUpRight" size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Обсудить проект
        </a>
      </div>
    </section>
  )
}
