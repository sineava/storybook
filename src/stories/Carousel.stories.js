import Carousel from './components/carousel/index.vue'

export default {
  title: 'carousel',
  component: Carousel
}

export const normal = {
  args: {
    imgs: [
      'https://images.unsplash.com/photo-1699391618617-e70493b6cd9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1699116550661-bea051952f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1699471948841-4074082631d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1699119846325-9f8429f36e42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1699002971427-b3f9d306a8d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D'
    ],
    width: 450,
    config: { radius: 4 }
  }
}
