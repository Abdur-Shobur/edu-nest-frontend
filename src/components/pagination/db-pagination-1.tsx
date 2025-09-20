'use client';
import { Pagination } from '@/components/ui/pagination';
import { IMeta } from '@/store/features/api/response-type';

interface Props {
	pagination: IMeta;
	setPage: (page: number) => void;
	setLimit?: (limit: number) => void;
}

export function DBPagination1({ pagination, setPage, setLimit }: Props) {
	if (!pagination) return null;

	const limitOptions = [5, 10, 20, 50, 100];

	return (
		<div>
			<Pagination
				currentPage={pagination?.page}
				totalItems={pagination?.total}
				pageSize={pagination?.pageCount}
				onPageChange={setPage}
				onPageSizeChange={setLimit}
				pageSizeOptions={limitOptions}
			/>
		</div>
	);
}
