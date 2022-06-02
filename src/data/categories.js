import appDesignThumb from '../assets/home/mobile/image-app-design.jpg'
import webDesignThumb from '../assets/home/mobile/image-web-design.jpg'
import graphicDesignThumb from '../assets/home/mobile/image-graphic-design.jpg'
// large
import appDesignThumbLarge from '../assets/home/desktop/image-app-design.jpg'
import webDesignThumbLarge from '../assets/home/desktop/image-web-design-large.jpg'
import graphicDesignThumbLarge from '../assets/home/desktop/image-graphic-design.jpg'
// tab
import appDesignThumbTab from '../assets/home/tablet/image-app-design.jpg'
import webDesignThumbTab from '../assets/home/tablet/image-web-design.jpg'
import graphicDesignThumbTab from '../assets/home/tablet/image-graphic-design.jpg'

export const categories = [
  {
    name: 'web design',
    image: `${
      window.innerWidth < 640
        ? webDesignThumb
        : window.innerWidth >= 640 && window.innerWidth < 850
        ? webDesignThumbTab
        : webDesignThumbLarge
    }`,
  },
  {
    name: 'app design',
    image: `${
      window.innerWidth < 640
        ? appDesignThumb
        : window.innerWidth >= 640 && window.innerWidth < 850
        ? appDesignThumbTab
        : appDesignThumbLarge
    }`,
  },
  {
    name: 'graphic design',
    image: `${
      window.innerWidth < 640
        ? graphicDesignThumb
        : window.innerWidth >= 640 && window.innerWidth < 850
        ? graphicDesignThumbTab
        : graphicDesignThumbLarge
    }`,
  },
]
