import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Leaf, Truck, Users, Heart, Clock, ShieldCheck } from "lucide-react";
import heroVegetables from "@/assets/hero-vegetables.jpg";
import localFarm from "@/assets/local-farm.jpg";
import familyCooking from "@/assets/family-cooking.jpg";
import delivery from "@/assets/delivery.jpg";

const GreenMartLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">GreenMart</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Cum funcționează</Button>
            <Button variant="hero">Începe acum</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-fresh py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-success/10 text-success border-success/20">
                🌱 100% Produse Locale
              </Badge>
              <h1 className="text-5xl font-bold text-foreground leading-tight">
                Legume proaspete de la <span className="text-primary">fermieri locali</span> direct la ușa ta
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Descoperă gustul autentic al legumelor de sezon cu abonamentul nostru săptămânal. 
                22-25 kg de produse artizanale selectate cu grijă pentru familia ta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="hero" className="text-lg px-8 py-6">
                  Alege abonamentul
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Vezi cum funcționează
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-success" />
                  <span>Garanție 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-success" />
                  <span>Livrare gratuită</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroVegetables} 
                alt="Cutie cu legume proaspete de la GreenMart"
                className="rounded-2xl shadow-card w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-card font-semibold">
                22-25 kg/lună
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Cum funcționează GreenMart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trei pași simpli către o alimentație mai sănătoasă și sustenabilă
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Alegi abonamentul</h3>
              <p className="text-muted-foreground">
                Selectezi planul care se potrivește familiei tale și preferințelor alimentare
              </p>
            </Card>
            
            <Card className="text-center p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Selectăm cu grijă</h3>
              <p className="text-muted-foreground">
                Echipa noastră alege cele mai proaspete legume de sezon de la fermierii locali
              </p>
            </Card>
            
            <Card className="text-center p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Livrăm la tine</h3>
              <p className="text-muted-foreground">
                Primești săptămânal cutia cu surprize sănătoase direct la ușa ta
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-fresh">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={familyCooking} 
                alt="Familie bucurându-se de legume proaspete"
                className="rounded-2xl shadow-card w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  De ce să alegi GreenMart?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Transformă-ți bucătăria într-un sanctuar al prospețimii și sănătății
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Între 22 și 25 kg de legume și produse artizanale livrate direct la ușa ta lunar",
                  "Rețete făcute de nutriționiști, adaptate exact pentru selecția de legume din fiecare săptămână",
                  "Primești săptămânal legume proaspete și produse artizanale direct de la mici producători locali",
                  "Te bucuri de alimente naturale, gustoase și hrănitoare pentru tine și familia ta",
                  "Timpul pierdut la cumpărături este transformat în timp pentru lucrurile care chiar contează",
                  "Contribui activ la reducerea risipei alimentare și a poluării",
                  "Sprijini fermierii locali și faci parte dintr-o comunitate sustenabilă"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Alege planul perfect pentru familia ta
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Două opțiuni flexibile pentru toate nevoile tale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 relative">
              <CardHeader className="text-center pb-8 space-y-4">
                <CardTitle className="text-2xl">Planul Starter</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">189 RON</div>
                  <div className="text-muted-foreground">/lună</div>
                </div>
                <CardDescription className="text-base">
                  Perfect pentru cupluri sau familii mici
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {[
                    "15-18 kg de legume proaspete",
                    "3-4 tipuri de legume pe săptămână",
                    "Rețete personalizate",
                    "Livrare gratuită",
                    "Suport customer 24/7"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" size="lg" variant="outline">
                  Alege Starter
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-glow transition-all duration-300 relative border-2 border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
                  CEL MAI POPULAR
                </Badge>
              </div>
              <CardHeader className="text-center pb-8 space-y-4">
                <CardTitle className="text-2xl">Planul Family</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">299 RON</div>
                  <div className="text-muted-foreground">/lună</div>
                </div>
                <CardDescription className="text-base">
                  Ideal pentru familii mari și pasionații de gătit
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {[
                    "22-25 kg de legume proaspete",
                    "5-7 tipuri de legume pe săptămână",
                    "Produse artizanale bonus",
                    "Rețete premium de la nutriționiști",
                    "Livrare prioritară gratuită",
                    "Suport premium 24/7",
                    "Acces la comunitatea GreenMart"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" size="lg" variant="hero">
                  Alege Family
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Toate planurile includ garanție de satisfacție 100% și posibilitatea de anulare oricând
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-success" />
                <span>Fără contract</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-success" />
                <span>Anulare oricând</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-success" />
                <span>Prima livrare gratuită</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-fresh">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ce spun clienții noștri
            </h2>
            <p className="text-xl text-muted-foreground">
              Peste 2.500 de familii au ales deja GreenMart
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Popescu",
                location: "București",
                text: "Copiii mei nu au mai mâncat legume procesate de când am descoperit GreenMart. Calitatea este excepțională!"
              },
              {
                name: "Andrei Georgescu", 
                location: "Cluj-Napoca",
                text: "Economisesc 3 ore pe săptămână pe care le petreceam la cumpărături. Acum am mai mult timp pentru familie."
              },
              {
                name: "Elena Dumitrescu",
                location: "Iași", 
                text: "Rețetele personalizate sunt fantastice! Am învățat să gătesc legume pe care nu le-am încercat niciodată."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex text-accent text-lg">★★★★★</div>
                  <p className="text-foreground italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-12 text-center shadow-glow">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Începe călătoria către o alimentație mai sănătoasă
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Alătură-te celor peste 2.500 de familii care au ales să trăiască mai sănătos cu GreenMart
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="text-lg px-8 py-6">
                Începe acum - Prima livrare gratuită
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Contactează-ne
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                <h3 className="text-xl font-bold">GreenMart</h3>
              </div>
              <p className="text-background/80">
                Legume proaspete de la fermieri locali, direct la ușa ta.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Produse</h4>
              <div className="space-y-2 text-sm text-background/80">
                <p>Planul Starter</p>
                <p>Planul Family</p>
                <p>Produse artizanale</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Companie</h4>
              <div className="space-y-2 text-sm text-background/80">
                <p>Despre noi</p>
                <p>Fermierii noștri</p>
                <p>Sustenabilitate</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm text-background/80">
                <p>hello@greenmart.ro</p>
                <p>0700 123 456</p>
                <p>Luni-Vineri 9:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GreenMartLanding;