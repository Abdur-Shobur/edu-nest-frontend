import { IManager } from '../../manager';
import { IBlogCategory } from '../blog-category';
import { ITag } from '../tag';

export interface IBlog {
	readonly id: number;
	readonly status: IBlogStatus;
	readonly slug: string;

	readonly title: string;
	readonly subtitle: string;
	readonly content: string;

	readonly category: IBlogCategory;
	readonly tags: ITag[];

	readonly author: IManager;
	readonly order: number;

	readonly banner: string;
	readonly image1: string;
	readonly image2: string;

	readonly quotation: string;
	readonly quotationAuthor: string;

	readonly readTime: number;

	readonly likes: number;
	readonly comments: number;

	readonly publishedAt: string;
	readonly updatedAt: string;
	readonly createdAt: string;
}

// payloads for create/update
export interface IBlogCreatePayload {
	status?: IBlogStatus;
	slug?: string;
	title: string;
	subtitle?: string;
	content?: string;
	categoryId: number;
	tagIds?: number[];
	authorId: number;
	order?: number;
	banner?: File;
	image1?: File;
	image2?: File;
	quotation?: string;
	quotationAuthor?: string;
	readTime?: number;
}

export interface IBlogUpdatePayload extends Partial<IBlogCreatePayload> {
	id: number;
}

// for status
export enum IBlogStatus {
	Published = 'published',
	Unpublished = 'unpublished',
	Draft = 'draft',
	Trashed = 'trashed',
}
