
import React from 'react';
import './style/index.css';

export interface ThumbnailProps {
    imageSource: string,
    description?: string,
    style?:React.CSSProperties
}

const Thumbnail: React.FC<ThumbnailProps> = ({imageSource, description = '', ...rest}) => {
    return (
		<>
			<img
				className='thumbnail'
				src={imageSource}
				alt={description || ''}
				{...rest}
			/>
		</>
    )
}

export default Thumbnail;
