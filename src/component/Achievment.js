
import images1 from '../images/achiev1.jpg';
import images2 from '../images/achiev2.jpg';
import images3 from '../images/achiev3.jpg';
import images5 from '../images/achiev5.jpg';
import '../style/achiImages.css'

export default function Achievment() {
  return (
    <>
      <div className='achi_images'>
        {itemData.map((elem , index)=>(
          <img src={`${elem.img}`} alt='images_' width={500}/>
        ))}
      </div>
    </>
  );
}

const itemData = [
  {
    img: images1,
    title: 'Bed',
  },
  {
    img: images2,
    title: 'Books',
  },
  {
    img: images3,
    title: 'Sink',
  },
  {
    img: images5,
    title: 'Blinds',
  },
];