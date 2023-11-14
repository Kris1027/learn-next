import summersale from '/public/summersale.jpg';
import Image from 'next/image';

export default function Photo() {
  return (
    <Image
      src={summersale.src}
      alt='duze zdjecie'
      width={500}
      height={800}
      placeholder='blur'
      blurDataURL='data:image/png;base64,iVBORw0KG...'
    />
  );
}
