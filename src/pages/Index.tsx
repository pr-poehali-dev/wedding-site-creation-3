import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const guests = [
    { name: "Ольга", category: "Родитель невесты" },
    { name: "Людмила и Петр", category: "Родители жениха" },
    { name: "Евгения и Сергей", category: "Пара" },
    { name: "Наталья и Евгений", category: "Пара" },
    { name: "Алена и Александр", category: "Пара" },
    { name: "Оксана и Сергей", category: "Пара" },
    { name: "Елизавета и Артем", category: "Пара" },
    { name: "Андрей", category: "Гость" },
    { name: "Лидия", category: "Гость" },
    { name: "Никита", category: "Гость" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/IMG_9317.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8">
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-light text-primary mb-2 tracking-wider">
                А & В
              </h1>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" 
                   style={{ backgroundSize: '200% 100%' }} />
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-secondary font-light tracking-[0.3em] mb-4">
            АЛЕКСАНДР & ВИКТОРИЯ
          </p>
          
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-lg tracking-widest">12.02.2006</p>
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </div>

      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-light text-primary mb-8">
            Наша история
          </h2>
          <div className="h-px w-24 bg-primary mx-auto mb-12" />
          
          <div className="text-lg md:text-xl leading-relaxed text-secondary/90 space-y-6 font-light">
            <p>Наша история началась с алой розы и моря в ночи.</p>
            <p>Мы прошли через звёздные обрывы, разлуку и возвращение — и нашли в себе смелость выбрать «навсегда».</p>
            <p className="italic">Это не конец сказки.</p>
            <p>Это первая запятая в самом долгом и счастливом предложении нашей жизни.</p>
            <p className="text-primary mt-8">
              Приглашаем вас разделить с нами день,<br />
              когда «я» и «ты» станут «мы».
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-light text-primary mb-8">
            Информация для гостей
          </h2>
          <div className="h-px w-24 bg-primary mx-auto mb-12" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon name="Calendar" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-light text-primary mb-3">Дата и время</h3>
                <p className="text-lg text-secondary/80">12 февраля 2006 года</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon name="MapPin" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-light text-primary mb-3">Место проведения</h3>
                <p className="text-lg text-secondary/80 leading-relaxed">
                  Г. Новосибирск<br />
                  Новосибирская область<br />
                  С. Новолуговое<br />
                  Железнодорожная 10/1
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <Icon name="Users" className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-light text-primary">Список приглашённых гостей</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guests.map((guest, index) => (
              <div 
                key={index}
                className="p-4 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-200"
              >
                <p className="text-lg text-secondary font-medium mb-1">{guest.name}</p>
                <p className="text-sm text-muted-foreground">{guest.category}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Heart" className="text-primary mx-auto mb-4" size={48} />
          </div>
          <p className="text-2xl md:text-3xl font-light text-secondary/90 leading-relaxed">
            Мы будем рады видеть вас на нашем празднике!
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary/50" />
            <p className="text-primary tracking-widest">А & В</p>
            <div className="h-px w-16 bg-primary/50" />
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 text-center">
        <p className="text-sm text-muted-foreground tracking-wider">
          12 февраля 2006 • Александр & Виктория
        </p>
      </footer>
    </div>
  );
}