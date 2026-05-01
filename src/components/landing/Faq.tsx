import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Какие серверы CS:S вы настраиваете?",
    answer:
      "Работаю с обычными серверами Counter-Strike Source и версией v34 ClientMod. Настраиваю с нуля или дорабатываю уже существующие серверы: плагины, конфиги, защита от читов, оптимизация.",
  },
  {
    id: 2,
    question: "Что входит в установку веб-панели?",
    answer:
      "Устанавливаю и настраиваю SourceBans, MaterialAdmin, Level Ranks Web и GameCMS. Это включает: развёртывание на хостинге, настройку подключения к серверу, создание администраторских аккаунтов и базовую настройку прав.",
  },
  {
    id: 3,
    question: "Делаете ли вы сайты-визитки для серверов?",
    answer:
      "Да, разрабатываю сайты-визитки с нуля, исправляю ошибки на существующих сайтах, а также настраиваю серверные компоненты. Адаптивный дизайн под мобильные устройства включён.",
  },
  {
    id: 4,
    question: "Сколько стоит настройка сервера?",
    answer:
      "Стоимость зависит от объёма работ: базовая настройка сервера, установка плагинов или полный запуск под ключ с веб-панелью. Напишите мне — обсудим задачу и назову точную цену.",
  },
  {
    id: 5,
    question: "Как быстро выполняются заказы?",
    answer:
      "Большинство задач выполняю в течение 1-3 дней. Установка веб-панели — обычно за несколько часов. Сложные проекты (сайт + сервер + панели) — до 7 дней.",
  },
  {
    id: 6,
    question: "Есть ли поддержка после выполнения работы?",
    answer:
      "Да, после сдачи работы всегда помогаю с возникающими вопросами. При необходимости можем договориться о постоянном сопровождении сервера.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Отвечаю на самые популярные вопросы о настройке серверов CS:S, установке веб-панелей и разработке сайтов.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
