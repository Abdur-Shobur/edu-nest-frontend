import React from 'react';
import styles from './loader-2.module.css';

interface Loader2Props {
	rows?: number;
	columns?: number;
	className?: string;
}

const Loader2: React.FC<Loader2Props> = ({
	rows = 10,
	columns = 8,
	className = '',
}) => {
	return (
		<div className={`${styles.tableSkeleton} ${className}`}>
			{/* Table Header */}
			<div className={styles.tableHeader}>
				{Array.from({ length: columns }).map((_, index) => (
					<div key={`header-${index}`} className={styles.headerCell}>
						<div className={styles.skeletonLine}></div>
					</div>
				))}
			</div>

			{/* Table Body */}
			<div className={styles.tableBody}>
				{Array.from({ length: rows }).map((_, rowIndex) => (
					<div key={`row-${rowIndex}`} className={styles.tableRow}>
						{Array.from({ length: columns }).map((_, colIndex) => (
							<div
								key={`cell-${rowIndex}-${colIndex}`}
								className={styles.tableCell}
							>
								<div className={styles.skeletonLine}></div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Loader2;
