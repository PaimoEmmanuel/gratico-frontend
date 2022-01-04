import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const StoryCardSkeleton: React.FC = () => {
	return (
		<div
			style={{
				width: '315px',
				margin: '10px auto',
				padding: '10px 0 20px',
				borderBottom: '1px solid #363636',
			}}
		>
			<SkeletonTheme baseColor='#202020' highlightColor='#444'>
				<div style={{ width: '180px', height: '15px' }}>
					<Skeleton height={15} />
				</div>

				<div
					style={{
						width: '100%',
						margin: '14px 0 16px',
					}}
				>
					<Skeleton height={109} />
				</div>

				<div
					style={{
						width: '300px',
						marginBottom: '18px',
					}}
				>
					<Skeleton height={35} />
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div>
						{' '}
						<Skeleton width={124} />{' '}
					</div>
					<div>
						{' '}
						<Skeleton width={70} />{' '}
					</div>
				</div>
			</SkeletonTheme>
		</div>
	)
}
export default StoryCardSkeleton
