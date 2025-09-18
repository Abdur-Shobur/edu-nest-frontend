export type ResponseType<T> = {
	status: boolean;
	message: string;
	data: T;
	statusCode: number;
};

export interface IPaginatedResponse<T> {
	data: {
		data: T[];
		meta: IMeta;
	};
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
}

export interface IErrorResponse {
	status: boolean;
	message: string;
	statusCode: number;
	errors?: { field: string; message: string }[];
}
