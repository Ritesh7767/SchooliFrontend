import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

let banner = [
  'https://res.cloudinary.com/duvoga9f5/image/upload/v1740069431/u1hjdommjxf1k8kxihdp.jpg',
  'https://res.cloudinary.com/duvoga9f5/image/upload/v1740069433/jedqyxqd1a101a5kmxrd.jpg',
  'https://res.cloudinary.com/duvoga9f5/image/upload/v1740069434/k9tkgwigtxptt7ufvlbm.jpg',
  'https://res.cloudinary.com/duvoga9f5/image/upload/v1740069435/kqysdywsepzaokz7hklw.jpg',
  'https://res.cloudinary.com/duvoga9f5/image/upload/v1740069436/pooaqvbvigwmiyyabeag.jpg',
  'https://res.cloudinary.com/duvoga9f5/image/upload/v1740069437/kanqlhqpl6nuqijbd7su.jpg',
  'https://res.cloudinary.com/duvoga9f5/image/upload/v1740069438/gv80hxqixkdnxpwkjsvf.jpg'
]

const Banner = () => {
  return (
    <div className="">
        <Carousel transitionTime={750} autoPlay={true} infiniteLoop={true} interval={2500} showThumbs={false} showArrows={false}>
          {banner.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
  )
}

export default Banner