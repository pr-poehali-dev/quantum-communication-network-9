import { useState } from "react"
import Icon from "@/components/ui/icon"

const SEND_ORDER_URL = "https://functions.poehali.dev/3a076136-8ccc-43e2-9640-6a07b8619cc8"

const SERVICES = [
  "Настройка сервера CS:S",
  "Настройка CS:S v34 ClientMod",
  "Установка SourceBans",
  "Установка MaterialAdmin",
  "Установка Level Ranks Web",
  "Установка GameCMS",
  "Сайт-визитка",
  "Исправление ошибок сайта",
  "Другое",
]

export default function OrderForm() {
  const [form, setForm] = useState({ name: "", contact: "", service: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", contact: "", service: "", message: "" })
      } else {
        const data = await res.json()
        setErrorMsg(data.error || "Что-то пошло не так")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Ошибка соединения. Попробуйте ещё раз.")
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-10 items-start">

        <div className="w-full md:w-2/5 z-10">
          <h2 className="text-black dark:text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Готов запустить{" "}
            <span className="text-[#7A7FEE]">ваш сервер</span>{" "}
            CS:S
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6">
            Напишите — обсудим задачу, назову сроки и стоимость. Работаю быстро и с гарантией результата.
          </p>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-[#7A7FEE] shrink-0" />
              Серверы CS:S и v34 ClientMod
            </li>
            <li className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-[#7A7FEE] shrink-0" />
              Веб-панели: SourceBans, MaterialAdmin, GameCMS
            </li>
            <li className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-[#7A7FEE] shrink-0" />
              Сайты-визитки и исправление ошибок
            </li>
            <li className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-[#7A7FEE] shrink-0" />
              Ответ в течение 24 часов
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/5 z-10">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
              <div className="w-16 h-16 rounded-full bg-[#7A7FEE]/20 flex items-center justify-center">
                <Icon name="CheckCircle" size={36} className="text-[#7A7FEE]" />
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white">Заявка отправлена!</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                Я получил ваше сообщение и свяжусь с вами в ближайшее время.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-[#7A7FEE] text-sm underline underline-offset-2 hover:opacity-80"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Ваше имя <span className="text-[#7A7FEE]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Иван"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Telegram / VK / Discord <span className="text-[#7A7FEE]">*</span>
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="@username"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-1">
                  Услуга
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] transition"
                >
                  <option value="">Выберите услугу...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-1">
                  Опишите задачу <span className="text-[#7A7FEE]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Расскажите подробнее — что нужно сделать, есть ли готовые материалы..."
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] transition resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Icon name="Loader2" size={18} className="animate-spin" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={18} />
                    Отправить заявку
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
