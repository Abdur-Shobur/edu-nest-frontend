export type ResponseType<T> = {
	status: boolean;
	message: string;
	data: T;
	statusCode: number;
	meta: any;
};

export interface IPaginatedResponse<T> {
	data: T[];
	meta: IMeta;
	status: boolean;
	message: string;
	statusCode: number;
}

export interface IMeta {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	itemsPerPage: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	limit: number;
	page: number;
	nextPage: number;
	total: number;
	pageCount: number;
}

export interface IErrorResponse {
	status: boolean;
	message: string;
	statusCode: number;
	errors?: { field: string; message: string }[];
}
