import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Categorie per la lista nascita
const categorieListaNascita = [
	'Altro',
	'Giochi',
	'Igiene & Salute',
	'Ricordi & Decorazioni',
	'Sedute/Trasporto',
	'Nanna',
	'Pappa',
	'Libri',
	'Accessori genitori'
] as const;

const listaNascita = defineCollection({
	loader: glob({ base: './src/lista-nascita', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			nome: z.string(),
			categoria: z.enum(categorieListaNascita),
			negozio: z.string(),
			link: z.string().refine((val) => val === '' || z.string().url().safeParse(val).success, {
				message: "Link deve essere un URL valido o una stringa vuota"
			}).optional(),
			prezzo: z.number().optional(),
			acquistato: z.boolean().default(false),
			icona: z.string().optional(),
			priorita: z.number().min(1).max(5).default(3), // 1=massima priorità, 5=minima priorità
		})
});

export const collections = { 'lista-nascita': listaNascita };

// Export delle categorie per uso in altri file
export { categorieListaNascita };
export type CategoriaListaNascita = typeof categorieListaNascita[number];
