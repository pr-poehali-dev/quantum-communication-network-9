import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Серверы CS:S",
    description: "Установка, настройка и администрирование серверов Counter-Strike Source v34 ClientMod и стандартных CS:S серверов. Исправление ошибок, оптимизация производительности.",
    iconName: "Server",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Веб-панели",
    description: "Установка и настройка SourceBans, MaterialAdmin, Level Ranks Web, GameCMS — полный цикл от установки до настройки прав и интеграции с сервером.",
    iconName: "LayoutDashboard",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Сайты-визитки",
    description: "Разработка, настройка и исправление ошибок сайтов-визиток для серверов и команд. Быстрый запуск, адаптивный дизайн, поддержка и обновления.",
    iconName: "Globe",
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Всё что нужно
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">для вашего сервера</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Занимаюсь настройкой серверов Counter-Strike Source, установкой веб-панелей и разработкой сайтов. Работаю быстро, с гарантией результата и последующей поддержкой.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <Icon name={service.iconName} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
