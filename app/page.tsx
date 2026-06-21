export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-4 pt-20 pb-16 max-w-5xl mx-auto text-center">
        <div className="text-7xl mb-6">📸</div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          Бизнес-фото на аву<br />
          <span className="gradient-text">с помощью AI</span>
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-8">
          AI-аватары для резюме, соцсетей и LinkedIn за 30 секунд. Без дизайнера, без кода, без ожидания.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn-primary">Попробовать бесплатно</button>
          <button className="h-12 px-6 rounded-xl font-semibold border border-bg-border hover:bg-bg-surface transition">
            Посмотреть примеры
          </button>
        </div>
        <p className="text-xs text-ink-dim mt-6">Без карты · 5 бесплатных генераций · Результат за 30 секунд</p>
      </section>

      {/* Features */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
        <div className="grid sm:grid-cols-3 gap-6">
      <div className="card">
        <div className="text-3xl mb-3">📤</div>
        <h3 className="text-lg font-semibold mb-2">Загрузи фото</h3>
        <p className="text-sm text-ink-muted">Одно селфи в хорошем свете — достаточно</p>
      </div>
      <div className="card">
        <div className="text-3xl mb-3">🎨</div>
        <h3 className="text-lg font-semibold mb-2">Выбери стиль</h3>
        <p className="text-sm text-ink-muted">8 образов: деловой, креативный, casual, tech</p>
      </div>
      <div className="card">
        <div className="text-3xl mb-3">✨</div>
        <h3 className="text-lg font-semibold mb-2">Получи 20 аватаров</h3>
        <p className="text-sm text-ink-muted">За 30 секунд. Скачай лучшие в 4K</p>
      </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Для кого</h2>
        <div className="grid sm:grid-cols-2 gap-4">
      <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-surface border border-bg-border">
        <div className="text-3xl flex-shrink-0">💼</div>
        <div>
          <h3 className="text-base font-semibold mb-1">LinkedIn</h3>
          <p className="text-sm text-ink-muted">Деловой портрет, который цепляет рекрутеров</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-surface border border-bg-border">
        <div className="text-3xl flex-shrink-0">🎯</div>
        <div>
          <h3 className="text-base font-semibold mb-1">HeadHunter</h3>
          <p className="text-sm text-ink-muted">HR смотрят 6 секунд — попади в топ выдачи</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-surface border border-bg-border">
        <div className="text-3xl flex-shrink-0">📱</div>
        <div>
          <h3 className="text-base font-semibold mb-1">Telegram</h3>
          <p className="text-sm text-ink-muted">Аватар для канала или личного чата</p>
        </div>
      </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Тарифы</h2>
        <p className="text-center text-ink-muted mb-12">Без подписок. Платишь один раз — пользуешься.</p>
        <div className="grid sm:grid-cols-3 gap-6">
      <div className="card text-center">
        <h3 className="text-lg font-semibold mb-2">Старт</h3>
        <div className="text-4xl font-bold gradient-text mb-4">490 ₽</div>
        <ul className="space-y-2 text-sm text-ink-muted mb-6">
          <li>✓ 20 аватаров</li>
          <li>✓ 4K скачивание</li>
          <li>✓ Без водяных знаков</li>
        </ul>
        <button className="btn-primary w-full">Выбрать</button>
      </div>
      <div className="card text-center">
        <h3 className="text-lg font-semibold mb-2">Про</h3>
        <div className="text-4xl font-bold gradient-text mb-4">1 490 ₽</div>
        <ul className="space-y-2 text-sm text-ink-muted mb-6">
          <li>✓ 100 аватаров</li>
          <li>✓ Все стили</li>
          <li>✓ Приоритетная генерация</li>
          <li>✓ История заказов</li>
        </ul>
        <button className="btn-primary w-full">Выбрать</button>
      </div>
      <div className="card text-center">
        <h3 className="text-lg font-semibold mb-2">Бизнес</h3>
        <div className="text-4xl font-bold gradient-text mb-4">4 900 ₽</div>
        <ul className="space-y-2 text-sm text-ink-muted mb-6">
          <li>✓ 500 аватаров</li>
          <li>✓ API доступ</li>
          <li>✓ White-label</li>
          <li>✓ Менеджер</li>
        </ul>
        <button className="btn-primary w-full">Выбрать</button>
      </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Готов попробовать?</h2>
        <p className="text-lg text-ink-muted mb-8">
          5 бесплатных генераций. Без карты. Результат за 30 секунд.
        </p>
        <button className="btn-primary text-lg px-10">Начать бесплатно →</button>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 border-t border-bg-border text-center text-sm text-ink-dim">
        © 2026 Buildo Headshots · Часть экосистемы Buildo · <a href="#" className="hover:text-ink-muted">Telegram</a> · <a href="#" className="hover:text-ink-muted">Поддержка</a>
      </footer>
    </main>
  )
}
