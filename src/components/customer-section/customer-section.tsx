import { PT_Sans_Caption } from "next/font/google"
import Image from "next/image"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})
export const CustomerSection = () => {

    const customerStory = [{
        content: 'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
        author: {
            name: 'Annette Bones',
            role: 'CEO na Anne Corp',
            avatar: '/customer-01.png'
        },
    },
    {
        content: 'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
        author: {
            name: 'Jacob Jones',
            role: 'CEO na JJ Org',
            avatar: '/customer-02.png'
        }
    }
    ]

    return (
        <section className="container py-8 md:py-10">
            <div className="flex flex-col items-center gap-12">
                <h2 className={`${ptSansCaption} text-heading-xl text-gray-100`}>Quem utiliza, aprova!</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {customerStory.map((customerStory) =>
                        <div key={customerStory.author.name}>
                            <p>{customerStory.content}</p>
                            <div>
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image
                                        src={customerStory.author.avatar}
                                        alt={customerStory.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <strong className="">{customerStory.author.name}</strong>
                                    <span className="">{customerStory.author.role}</span>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>

        </section>
    )
}